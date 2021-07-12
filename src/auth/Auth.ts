import { AxiosRequestConfig, AxiosResponse } from 'axios';
import { ReturnToken } from './ReturnToken';
import { AUTH, GeneralError, VERIFICATION } from '../exceptions/GeneralError';
import { Client, _client } from '../Client';
import { PersistentStorage } from '../PersistentStorage';
import { getResponse } from '../gen/actions/getResponse';
import { getHttpResponse, HttpError } from '../exceptions';

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
  me: Auth
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
    private client: Client = _client,
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
  ): Promise<ReturnToken | undefined> {
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
      .then(({ data: token }) => {
        this.setToken(token, remember);
        if (this.authCallback) {
          return this.authCallback(AuthCallbackActions.Connected, this);
        }
        this.client.logger.info('Logged In');
        return token;
      });
  }

  public logout() {
    this.setToken(undefined, false);
  }

  public async refresh(
    refreshToken?: string
  ): Promise<ReturnToken | undefined> {
    const token = refreshToken || this.getToken()?.refresh_token;
    if (!token) {
      return Promise.reject(Error('No Refresh Token'));
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
          return this.authCallback(AuthCallbackActions.Refreshed, this);
        }
        this.client.logger.info('Refreshed');
        return data;
      })
      .finally(() => {
        this.refreshRequest = undefined;
      });
  }

  public async getAccessToken(): Promise<string | undefined> {
    let token = this.getToken();
    if (token) {
      const expiresAt: Date = new Date(token.expires_at);
      const diff = expiresAt.getTime() - new Date().getTime();

      if (diff < 0) {
        // token has expired, try to get a token
        token = await this.refresh();
      }
      return token?.access_token;
    }
    return undefined;
  }

  public isLoggedIn(): boolean {
    return this.getToken() !== undefined;
  }

  public getToken() {
    if (!this.token && this.persistentStorage) {
      this.token = this.persistentStorage.get('token');
    }
    if (this.remember === undefined && this.persistentStorage) {
      this.remember = this.persistentStorage.get('remember');
    }
    return this.token;
  }

  public setToken(
    token?: ReturnToken,
    remember?: boolean
  ): ReturnToken | undefined {
    this.token = token;
    if (this.persistentStorage) {
      if (remember) {
        this.persistentStorage.set('token', token);
        this.persistentStorage.set('remember', true);
      } else {
        this.persistentStorage.set('token', undefined);
        this.persistentStorage.set('remember', undefined);
      }
    }
    return this.token;
  }

  protected addInterceptors(): void {
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
              this.authCallback(AuthCallbackActions.Unauthorized, this);
            }
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

    this.client.api.interceptors.response.use(
      (response) => response,
      (error) => {
        const newError = { ...error };
        const originalRequest = newError.config;
        if (newError?.response?.status) {
          newError.response.status =
            typeof newError.response.status === 'string'
              ? parseInt(newError.response.status, 10)
              : newError.response.status;
        }
        const status = newError?.response?.status;
        if (
          originalRequest &&
          status === 401 &&
          !originalRequest.isRetry &&
          Auth.urlRequiresAuth(originalRequest.url)
        ) {
          originalRequest.isRetry = true;

          if (!this.getToken()) {
            const newResponse = getHttpResponse(newError.response);
            if (this.authCallback) {
              this.authCallback(AuthCallbackActions.Unauthorized, this);
            }
            return newResponse
              ? Promise.reject(newResponse)
              : Promise.reject(newError);
          }
          // refresh will redirect to auth callback
          return this.refresh()
            .then((token) => {
              if (token && token.access_token) {
                if (token.trial_ended_at) {
                  if (this.authCallback) {
                    this.authCallback(AuthCallbackActions.Expired, this);
                  }
                } else {
                  originalRequest.headers.Authorization = `Bearer ${token.access_token}`;
                  return _client.api(originalRequest);
                }
              } else {
                if (this.authCallback) {
                  this.authCallback(AuthCallbackActions.Unauthorized, this);
                }
              }
              return Promise.reject(token);
            })
            .catch(() => {
              if (this.authCallback) {
                this.authCallback(AuthCallbackActions.Unauthorized, this);
              }
            });
        }
        const newResponse = getHttpResponse(newError.response);
        return newResponse
          ? Promise.reject(newResponse)
          : Promise.reject(newError);
      }
    );
  }
}
