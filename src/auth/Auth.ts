import { AxiosResponse, AxiosRequestConfig } from 'axios';
import { ReturnToken } from './ReturnToken';
import { AUTH, GeneralError, VERIFICATION } from '../exceptions';
import { ClientSdk } from '../ClientSdk';
import { getHttpResponse, HttpError, NO_REFRESH_TOKEN } from '../exceptions';
import { TokenStorage } from '../TokenStorage';

/**
 * Copyright (C) 2021 BitModern, Inc - All Rights Reserved
 */

const grantPath = '/oauth/access_token';
const ssoPath = '/sso';

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

  public static urlRequiresAuth(url?: string) {
    if (!url) return false;
    for (let i = 0; i < doesNotRequireAuth.length; i += 1) {
      if (url.match(new RegExp(doesNotRequireAuth[i]))) {
        return false;
      }
    }
    return true;
  }

  private refreshRequest?: Promise<AxiosResponse<ReturnToken>>;
  private remember = true;

  constructor(
    private tokenStorage: TokenStorage,
    private client: ClientSdk,
    private authCallback?: AuthCallback
  ) {
    this.addInterceptors();
  }

  public setAuthCallback(authCallback?: AuthCallback): void {
    this.authCallback = authCallback;
  }

  public passwordRecovery(email: string) {
    return this.client.api.get(`/system/auth/begin_password_reset/${email}`, {
      params: {
        is_web: true,
      },
    });
  }

  public passwordReset(email: string, password: string, token: string) {
    return this.client.api.post<ReturnToken>(
      '/system/auth/complete_password_reset',
      {
        email,
        password,
        token,
      }
    );
  }

  public login(
    username: string,
    password: string,
    remember = false,
    properties?: any
  ): Promise<ReturnToken> {
    this.remember = remember;
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
      .then((res) => this.performLogin(res.data));
  }

  public loginSSO(
    username: string,
    callbackUrl: string
  ): Promise<{ redirect_url: string }> {
    return this.client.api
      .post(`${ssoPath}/openid`, {
        client_id: this.client.clientId,
        client_secret: this.client.clientSecret,
        username,
        callbackUrl,
      })
      .then((res) => ({ redirect_url: res.data.redirect_url }));
  }

  public loginGithub(callbackUrl: string): Promise<{ redirect_url: string }> {
    return this.client.api
      .post(`${ssoPath}/github`, { callbackUrl })
      .then((res) => ({ redirect_url: res.data.redirect_url }));
  }

  public loginGoogle(callbackUrl: string): Promise<{ redirect_url: string }> {
    return this.client.api
      .post(`${ssoPath}/google`, {
        callbackUrl,
      })
      .then((res) => ({ redirect_url: res.data.redirect_url }));
  }

  public loginAtlassian(
    callbackUrl: string
  ): Promise<{ redirect_url: string }> {
    return this.client.api
      .post(`${ssoPath}/atlassian`, { callbackUrl })
      .then((res) => ({ redirect_url: res.data.redirect_url }));
  }

  public async performLogin(token: ReturnToken): Promise<ReturnToken> {
    await this.setToken(token, this.remember);
    await this.handleExpired(token);
    this.client.logger.info('Logged In');
    if (!this.authCallback) return token;
    const tokenUpdate = await this.authCallback(
      AuthCallbackActions.Connected,
      token,
      this
    );
    if (tokenUpdate) return tokenUpdate;
    return token;
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
      is_web: true,
      user: {
        email,
        password,
        password_confirmation: password,
        g_recaptcha_response: recaptcha,
      },
    });
  }

  public signUpWithEmail(
    email: string,
    password: string,
    recaptcha: string
  ): Promise<ReturnToken> {
    return this.client.api
      .post('/system/sign_up_with_email', {
        email,
        password,
        g_recaptcha_response: recaptcha,
      })
      .then(Auth.checkForFailure)
      .then((res) => this.performLogin(res.data));
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
      .then(async ({ data }) => {
        await this.setToken(data);
        await this.handleExpired(data);
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
    return this.tokenStorage.getRemember();
  }

  public async getToken(): Promise<ReturnToken | undefined> {
    return this.tokenStorage.getToken();
  }

  public async setToken(
    token?: ReturnToken,
    remember?: boolean
  ): Promise<ReturnToken | undefined> {
    if (token && token.expires_in) {
      const now = new Date();
      now.setSeconds(now.getSeconds() + (token.expires_in - 15)); //subtract 15 seconds to guard against latency
      token.expires_at = JSON.parse(JSON.stringify(now));
    }
    this.client.tokenUpdateHandler(token);
    if (token) {
      this.client.apiWorker?.setToken(token);
    }
    return this.tokenStorage.setToken(token, remember);
  }

  public setPat(pat: string): this {
    this.setToken({ access_token: pat } as any);
    return this;
  }

  public isExpired(token?: ReturnToken): boolean {
    return token !== undefined && token.is_expired === true;
  }

  public isTrialExpired(token?: ReturnToken): boolean {
    return token !== undefined && token.trial_ended_at !== undefined;
  }

  protected async handleExpired(
    token?: ReturnToken
  ): Promise<ReturnToken | undefined> {
    let newToken = token;
    if (this.isExpired(token)) {
      if (this.authCallback) {
        newToken = await this.authCallback(
          AuthCallbackActions.Expired,
          token,
          this
        );
      }
    }
    return newToken || token;
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
            error.response.config.headers.Authorization = `Bearer ${token.access_token}`;
            return this.client.api(error.response.config);
          }
          if (this.authCallback) {
            await this.authCallback(
              AuthCallbackActions.Unauthorized,
              undefined,
              this
            );
          }
          return Promise.reject(getHttpResponse(error.response));
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
