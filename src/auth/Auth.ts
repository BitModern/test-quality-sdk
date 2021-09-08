import { AxiosRequestConfig, AxiosResponse } from 'axios';
import { ReturnToken } from './ReturnToken';
import { AUTH, GeneralError, VERIFICATION } from '../exceptions';
import { ClientSdk, _client } from '../ClientSdk';
import { PersistentStorage } from '../PersistentStorage';
import { getResponse } from '../gen/actions';
import {
  EXPIRED_USER_EXCEPTION,
  getHttpResponse,
  HttpError,
  NO_REFRESH_TOKEN,
  UNAUTHORIZED,
} from '../exceptions';

/**
 * Copyright (C) 2021 BitModern, Inc - All Rights Reserved
 */

const grantPath = '/oauth/access_token';

const doesNotRequireAuth: string[] = [
  'system/auth/complete_invite_user',
  'system/auth/begin_password_reset',
  'system/auth/complete_password_reset',
  'system/create_client',
  'system/validate_site_name',
  'email-verification/error',
  'email-verification/check',
  'oauth/access_token',
  'auth/login',
  'auth/register',
  'system/github/authorize',
];

export enum AuthCallbackActions {
  Connected = 1,
  Refreshed,
  Unauthorized,
  Expired,
}
export type AuthCallback = (
  action: AuthCallbackActions,
  token?: ReturnToken,
  me?: Auth
) => Promise<ReturnToken | undefined>;

export class Auth {
  public static checkForFailure(
    response: AxiosResponse<ReturnToken>
  ): AxiosResponse<ReturnToken> {
    if (response.data.verification_ended_at) {
      // if verification ended then we don't have a token
      throw new GeneralError(
        'Email verification is required to login',
        VERIFICATION
      );
    } else if (!response.data.access_token) {
      throw new GeneralError('Auth failed', AUTH);
    }
    return response;
  }

  public static passwordRecovery(email: string) {
    return getResponse<any>(_client.api, {
      method: 'GET',
      url: `/system/auth/begin_password_reset/${email}`,
    });
  }

  public static urlRequiresAuth(url?: string) {
    if (!url) return false;
    for (let i = 0; i < doesNotRequireAuth.length; i += 1) {
      if (url.match(new RegExp(doesNotRequireAuth[i]))) {
        return false;
      }
    }
    return true;
  }

  private token?: ReturnToken;
  private remember?: boolean;
  private refreshRequest?: Promise<AxiosResponse<ReturnToken>>;

  constructor(
    private persistentStorage?: PersistentStorage,
    private client: ClientSdk = _client,
    private authCallback?: AuthCallback
  ) {
    this.addInterceptors();
  }

  public setAuthCallback(authCallback?: AuthCallback): void {
    this.authCallback = authCallback;
  }

  public login(
    username: string,
    password: string,
    remember = false,
    properties?: any
  ): Promise<ReturnToken> {
    return this.client.api
      .post<ReturnToken>(grantPath, {
        grant_type: 'password',
        client_id: this.client.clientId,
        client_secret: this.client.clientSecret,
        username,
        password,
        ...properties,
      })
      .then(Auth.checkForFailure)
      .then(async ({ data: token }): Promise<ReturnToken> => {
        await this.setToken(token, remember);
        if (token && token.trial_ended_at) {
          if (this.authCallback) {
            await this.authCallback(AuthCallbackActions.Expired, token, this);
          }
          return Promise.reject(
            new HttpError(
              'Trial Expired.',
              EXPIRED_USER_EXCEPTION,
              'Trial Ended',
              400
            )
          );
        }
        this.client.logger.info('Logged In');
        if (this.authCallback) {
          const tokenUpdate = await this.authCallback(
            AuthCallbackActions.Connected,
            token,
            this
          );
          if (tokenUpdate) {
            return tokenUpdate;
          }
        }
        return token;
      });
  }

  public logout(): Promise<ReturnToken | undefined> {
    return this.setToken(undefined, undefined);
  }

  public register(email: string, password: string, recaptcha: string) {
    return this.client.api.post<ReturnToken>('auth/register', {
      client_id: this.client.clientId,
      email,
      g_recaptcha_response: recaptcha,
      password_confirmation: password,
      password,
      is_web: true,
    });
  }

  public registerSite(
    email: string,
    password: string,
    site: string,
    recaptcha: string
  ) {
    return this.client.api.post('/system/create_client', {
      name: site,
      development: false,
      g_recaptcha_response: recaptcha,
      user: {
        email,
        password,
        password_confirmation: password,
        g_recaptcha_response: recaptcha,
      },
    });
  }

  public async refresh(
    refreshToken?: string
  ): Promise<ReturnToken | undefined> {
    const token = refreshToken || (await this.getToken())?.refresh_token;
    if (!token) {
      return Promise.reject(
        new HttpError(
          'No refresh token found.',
          NO_REFRESH_TOKEN,
          'Token Error',
          400
        )
      );
    }

    if (!this.refreshRequest) {
      this.refreshRequest = this.client.api.post<ReturnToken>(grantPath, {
        grant_type: 'refresh_token',
        client_id: this.client.clientId,
        client_secret: this.client.clientSecret,
        refresh_token: token,
      });
    }

    return this.refreshRequest
      .then(Auth.checkForFailure)
      .then(({ data }) => {
        this.setToken(data);
        if (this.authCallback) {
          return this.authCallback(AuthCallbackActions.Refreshed, data, this);
        }
        this.client.logger.info('Refreshed');
        return data;
      })
      .finally(() => {
        this.refreshRequest = undefined;
      });
  }

  public async getAccessToken(): Promise<string | undefined> {
    let token = await this.getToken();
    if (token) {
      if (token.expires_at) {
        const expiresAt: Date = new Date(token.expires_at);
        const diff = expiresAt.getTime() - new Date().getTime();

        if (diff < 0) {
          // token has expired, try to get a token
          token = await this.refresh();
        }
      }
      return token?.access_token;
    }
    return undefined;
  }

  public isLoggedIn(): boolean {
    return this.getToken() !== undefined;
  }

  public async getRemember(): Promise<boolean | undefined> {
    if (this.remember === undefined && this.persistentStorage) {
      this.remember = await this.persistentStorage.get('remember');
    }
    return this.remember;
  }

  public async getToken(): Promise<ReturnToken | undefined> {
    if (!this.token && this.persistentStorage) {
      this.token = await this.persistentStorage.get('token');
    }
    return this.token;
  }

  public async setToken(
    token?: ReturnToken,
    remember?: boolean
  ): Promise<ReturnToken | undefined> {
    this.token = token;
    if (this.token && this.token.expires_in) {
      const now = new Date();
      now.setSeconds(now.getSeconds() + (this.token.expires_in - 15)); //subtract 15 seconds to guard against latency
      this.token.expires_at = JSON.parse(JSON.stringify(now));
    }
    this.remember =
      remember !== undefined ? remember : await this.getRemember();
    if (this.persistentStorage) {
      if (this.remember) {
        await this.persistentStorage.set('token', token);
      } else {
        await this.persistentStorage.set('token', undefined);
      }
      await this.persistentStorage.set('remember', this.remember);
    }
    return this.token;
  }

  protected addAddAuthorizationHeaderInterceptor() {
    this.client.api.interceptors.request.use(
      async (config): Promise<AxiosRequestConfig> => {
        const newConfig = { ...config };
        if (
          Auth.urlRequiresAuth(config.url) &&
          newConfig.headers.Authorization === undefined
        ) {
          try {
            const accessToken = await this.getAccessToken();

            if (accessToken) {
              newConfig.headers.Authorization = `Bearer ${accessToken}`;
            }
          } catch (err) {
            if (this.authCallback) {
              await this.authCallback(
                AuthCallbackActions.Unauthorized,
                undefined,
                this
              );
            }
            // don't throw error because there is no check to see if it is calling TestQuality api
            // possible making calls that don't require authentication.
          }
        }
        if (this.client.debug) {
          newConfig.params = config.params || {};
          newConfig.params.XDEBUG_SESSION_START = 'PHPSTORM';
        }
        return newConfig;
      },
      (error: any) => {
        this.client.logger.error('Request error', error);
        return Promise.reject(error);
      }
    );
  }

  // Axios interceptor for HTTP 401 Unauthorized
  // If the token is invalid or has expired, we regenerate a new token and then call the original REST again.
  protected addUnauthorizedInterceptor() {
    const interceptor = this.client.api.interceptors.response.use(
      (response) => response,
      async (error) => {
        // if error response is not HTTP 401, we do a reject to not process this error
        const status = error?.response?.status
          ? typeof error.response.status === 'string'
            ? parseInt(error.response.status, 10)
            : error.response.status
          : undefined;

        // if not an authentication issue just let error flow through
        if (status !== 401 || !Auth.urlRequiresAuth(error.config.url)) {
          return Promise.reject(getHttpResponse(error.response));
        }
        const accessToken = await this.getToken();
        if (!accessToken) {
          if (this.authCallback) {
            await this.authCallback(
              AuthCallbackActions.Unauthorized,
              undefined,
              this
            );
          }
          return Promise.reject(getHttpResponse(error.response));
        }

        // When response code is HTTP 401 Unauthorized, try to refresh the token.
        // Eject the interceptor so it doesn't loop in case token refresh causes
        // the 401 response.
        this.client.api.interceptors.response.eject(interceptor);

        try {
          // use refresh token to generate new access token so request can be retried
          const token = await this.refresh();
          if (token && token.access_token) {
            // trial ended, need to handle it
            if (token.trial_ended_at) {
              if (this.authCallback) {
                await this.authCallback(
                  AuthCallbackActions.Expired,
                  token,
                  this
                );
              }
              return Promise.reject(
                new HttpError(
                  'Trial Expired.',
                  EXPIRED_USER_EXCEPTION,
                  'Trial Ended',
                  400
                )
              );
            } else {
              error.response.config.headers.Authorization = `Bearer ${token.access_token}`;
              return this.client.api(error.response.config);
            }
          }
          if (this.authCallback) {
            await this.authCallback(
              AuthCallbackActions.Unauthorized,
              undefined,
              this
            );
          }
          return Promise.reject(
            new HttpError('Trial Expired.', UNAUTHORIZED, 'Trial Ended', 400)
          );
        } catch (e) {
          if (this.authCallback) {
            await this.authCallback(
              AuthCallbackActions.Unauthorized,
              undefined,
              this
            );
          }
          return Promise.reject(e);
        } finally {
          this.addUnauthorizedInterceptor();
        }
      }
    );
  }

  protected addInterceptors(): void {
    this.addAddAuthorizationHeaderInterceptor();
    this.addUnauthorizedInterceptor();
  }
}
