import {
  type InternalAxiosRequestConfig,
  type AxiosResponse,
  type AxiosRequestConfig,
} from 'axios';
import Debug from 'debug';
import {
  AUTH,
  GeneralError,
  getHttpResponse,
  HttpError,
  NO_ACCESS_TOKEN,
  NO_REFRESH_TOKEN,
  REFRESH_TOKEN_ERROR,
  TOKEN,
  VERIFICATION,
} from '../exceptions';
import { type ClientSdk } from '../ClientSdk';
import { getSubscriptionEntitlement } from '../services/auth';
import { type TokenStorage } from '../TokenStorage';
import { type ReturnToken } from './ReturnToken';

const debug = Debug('tq:sdk:Auth');

/**
 * Copyright (C) 2021 BitModern, Inc - All Rights Reserved
 */

const grantPath = '/oauth/access_token';
const ssoPath = '/sso';

const doesNotRequireAuth: string[] = [
  'auth/login',
  'auth/register',
  'email-verification/check',
  'email-verification/error',
  'oauth/access_token',
  'system/auth/begin_password_reset',
  'system/auth/complete_invite_user',
  'system/auth/complete_password_reset',
  'system/create_client',
  'system/github/authorize',
  'system/sign_up_with_email',
  'system/validate_site_name',
  'system/auth/complete_share_invite',
  'system/auth/complete_magic_share_invite',
];

export enum AuthCallbackActions {
  Connected = 1,
  Refreshed,
  Unauthorized,
  SubscriptionExpired,
  TrialExpired,
  TokenUpdated,
}

export type AuthCallback = (
  action: AuthCallbackActions,
  token?: ReturnToken,
  me?: Auth,
) => Promise<void>;

export interface SignUpWithEmailData {
  email: string;
  password: string;
  recaptcha: string;
  type?: number;
}

export class Auth {
  public static validateTokenPayload(token: any) {
    debug('validateTokenPayload: %j', token);
    if (token?.error) {
      throw new GeneralError(token.error, TOKEN);
    } else if (token?.message) {
      throw new GeneralError(token.message, TOKEN);
    } else if (token?.verification_ended_at) {
      // if verification ended then we don't have a token
      throw new GeneralError(
        'Email verification is required to login',
        VERIFICATION,
      );
    } else if (!token?.access_token) {
      throw new GeneralError('Auth failed', AUTH);
    }
    debug('validateTokenPayload: ok');
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

  private checkSubscriptionRequest?: Promise<ReturnToken | undefined>;
  private disableHandler = false;
  public id = Math.random();
  private refreshRequest?: Promise<AxiosResponse<ReturnToken>>;
  private remember = true;

  constructor(
    private readonly tokenStorage: TokenStorage,
    private readonly client: ClientSdk,
    private authCallback?: AuthCallback,
  ) {
    this.setAuthCallback(authCallback);
    this.addInterceptors();
  }

  public setAuthCallback(authCallback?: AuthCallback): void {
    this.authCallback = authCallback;
    if (this.client.apiWorker) {
      this.client.apiWorker.setAuthCallback(
        async (action: AuthCallbackActions, token?: ReturnToken) => {
          if (action === AuthCallbackActions.TokenUpdated) {
            debug('token updated in apiWorker');
            await this.tokenStorage.setToken(token);
          }
          if (this.authCallback) {
            await this.authCallback(action, token);
          }
        },
      );
    }
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
      },
    );
  }

  public login(
    username: string,
    password: string,
    remember = false,
    share?: string,
    properties?: any,
  ): Promise<ReturnToken> {
    this.remember = remember;
    return this.client.api
      .post<ReturnToken>(grantPath, {
        grant_type: 'password',
        client_id: this.client.clientId,
        client_secret: this.client.clientSecret,
        username,
        password,
        share,
        ...properties,
      })
      .then((res) => this.performLogin(res.data));
  }

  public loginSSO(
    username: string,
    callbackUrl: string,
    share?: string,
  ): Promise<{ redirect_url: string }> {
    return this.client.api
      .post(`${ssoPath}/openid`, {
        client_id: this.client.clientId,
        client_secret: this.client.clientSecret,
        username,
        callbackUrl,
        share,
      })
      .then((res) => ({ redirect_url: res.data.redirect_url }));
  }

  public loginGithub(
    callbackUrl: string,
    verificationToken?: string,
    appVersion?: number,
    type?: number,
    share?: string,
  ): Promise<{ redirect_url: string }> {
    return this.client.api
      .post(`${ssoPath}/github`, {
        callbackUrl,
        verificationToken,
        appVersion,
        type,
        share,
      })
      .then((res) => ({ redirect_url: res.data.redirect_url }));
  }

  public loginGoogle(
    callbackUrl: string,
    verificationToken?: string,
    type?: number,
    share?: string,
  ): Promise<{ redirect_url: string }> {
    return this.client.api
      .post(`${ssoPath}/google`, {
        callbackUrl,
        verificationToken,
        type,
        share,
      })
      .then((res) => ({ redirect_url: res.data.redirect_url }));
  }

  public loginAtlassian(
    callbackUrl: string,
    type?: number,
    share?: string,
  ): Promise<{ redirect_url: string }> {
    return this.client.api
      .post(`${ssoPath}/atlassian`, { callbackUrl, type, share })
      .then((res) => ({ redirect_url: res.data.redirect_url }));
  }

  public async performLogin(token: ReturnToken): Promise<ReturnToken> {
    await this.setToken(token, this.remember);
    await this.handleExpired(token);
    this.client.logger.info('Logged In');
    if (this.authCallback) {
      await this.authCallback(AuthCallbackActions.Connected, token, this);
    }
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
    recaptcha: string,
    type?: number,
  ) {
    return this.client.api.post('/system/create_client', {
      name: site,
      development: false,
      g_recaptcha_response: recaptcha,
      is_web: true,
      type,
      user: {
        email,
        password,
        password_confirmation: password,
        g_recaptcha_response: recaptcha,
      },
    });
  }

  public signUpWithEmail(
    data: SignUpWithEmailData,
    config?: AxiosRequestConfig<SignUpWithEmailData>,
  ): Promise<ReturnToken> {
    return this.client.api
      .post('/system/sign_up_with_email', data, config)
      .then((res) => this.performLogin(res.data));
  }

  public async refresh(
    refreshToken?: string,
  ): Promise<ReturnToken | undefined> {
    if (this.refreshRequest) {
      debug('refresh: in process');
      return await this.refreshRequest
        .then(async ({ data }) => {
          debug('refresh: resolved');
          return data;
        })
        .catch((err) => {
          debug('refresh: error', err);
          return undefined;
        });
    }

    let token = refreshToken;
    if (!token) {
      if (!(await this.isLoggedIn())) {
        // Do not attempt to refresh token as it will fail
        debug('refresh: not authenticated');
        return undefined;
      }
      token = (await this.getToken())?.refresh_token;
      if (!token) {
        await this.logout();
        return await Promise.reject(
          new HttpError(
            'No refresh token found.',
            NO_REFRESH_TOKEN,
            'Token Error',
            400,
            NO_REFRESH_TOKEN,
          ),
        );
      }
    }

    debug('refreshRequest: starting', token);
    this.refreshRequest = this.client.api.request<ReturnToken>({
      method: 'post',
      url: grantPath,
      data: {
        grant_type: 'refresh_token',
        client_id: this.client.clientId,
        client_secret: this.client.clientSecret,
        refresh_token: token,
      },
    });
    return await this.refreshRequest
      .then(async (response) => {
        const data = response.data;
        await this.setToken(data, this.remember);
        await this.handleExpired(data);
        if (this.authCallback) {
          await this.authCallback(AuthCallbackActions.Refreshed, data, this);
        }
        debug('refreshRequest: ok');
        return data;
      })
      .catch(async (error: any) => {
        await this.logout();
        debug('refreshRequest error:', error?.message ?? error);
        return await Promise.reject(
          new HttpError(
            'Could not refresh token.',
            REFRESH_TOKEN_ERROR,
            'Refresh Token Error',
            400,
            REFRESH_TOKEN_ERROR,
          ),
        );
      })
      .finally(() => {
        debug('refreshRequest: finished');
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
          debug('getAccessToken: token expired, refreshing');
          token = await this.refresh();
        }
      }
      return token?.access_token;
    }
    return undefined;
  }

  private async checkSubscription(): Promise<ReturnToken | undefined> {
    // Ensure access_token is not expired
    const accessToken = await this.getAccessToken();
    if (!accessToken) {
      return undefined;
    }

    // Get current token
    const token = await this.getToken();
    if (!token) {
      return undefined;
    }

    // Override config headers in auth interceptor to prevent deadlock
    const entitlement = await getSubscriptionEntitlement({
      headers: { Authorization: `Bearer ${accessToken}` },
    });

    if (token?.subscription_ends_at !== entitlement?.subscription_ends_at) {
      debug('checkSubscription: subscription_ends_at has changed');
      return await this.refresh();
    }

    if (token?.trial_ends_at !== entitlement?.trial_ends_at) {
      debug('checkSubscription: trial_ends_at has changed');
      return await this.refresh();
    }

    return undefined;
  }

  public async refreshTokenIfSubscriptionStaled(): Promise<
    ReturnToken | undefined
  > {
    if (!this.checkSubscriptionRequest) {
      debug('refreshTokenIfSubscriptionStaled: starting');
      this.checkSubscriptionRequest = this.checkSubscription().finally(() => {
        debug('refreshTokenIfSubscriptionStaled: finished');
        this.checkSubscriptionRequest = undefined;
      });
      return await this.checkSubscriptionRequest;
    }

    debug('refreshTokenIfSubscriptionStaled: in process');
    return await this.checkSubscriptionRequest;
  }

  public async isLoggedIn(): Promise<boolean> {
    return (await this.getToken()) !== undefined;
  }

  public async getRemember(): Promise<boolean | undefined> {
    return await this.tokenStorage.getRemember();
  }

  public async getToken(): Promise<ReturnToken | undefined> {
    return await this.tokenStorage.getToken();
  }

  public async setToken(
    token?: ReturnToken,
    remember?: boolean,
  ): Promise<ReturnToken | undefined> {
    debug('setToken: %j', { token, remember });
    if (token) {
      Auth.validateTokenPayload(token);
    }
    // The backend does not return when the token was created, it only returns
    // when the token will expire. If expires_at does not exist we assume token
    // has been created recently, although as mentioned this is not necessarily
    // true, it is the best guess we can make.
    if (token?.expires_in && !token?.expires_at) {
      const now = new Date();
      now.setSeconds(now.getSeconds() + (token.expires_in - 15)); // subtract 15 seconds to guard against latency
      token.expires_at = JSON.parse(JSON.stringify(now));
    }
    if (this.authCallback) {
      await this.authCallback(AuthCallbackActions.TokenUpdated, token, this);
    }
    if (this.client.apiWorker) {
      await this.client.apiWorker.setToken(token);
    }
    return await this.tokenStorage.setToken(token, remember);
  }

  public async setPat(pat: string): Promise<this> {
    await this.setToken({ access_token: pat } as any);
    return this;
  }

  public isExpired(token?: ReturnToken): boolean {
    return token?.is_expired ?? false;
  }

  public isSubscriptionExpired(token?: ReturnToken): boolean {
    if (!token) {
      return false;
    }
    const now = Date.now();
    if (token.subscription_ends_at) {
      return new Date(token.subscription_ends_at).getTime() < now;
    }
    if (token.subscription_ended_at) {
      return new Date(token.subscription_ended_at).getTime() < now;
    }
    return false;
  }

  public isTrialExpired(token?: ReturnToken): boolean {
    if (!token) {
      return false;
    }
    const now = Date.now();
    if (token.trial_ends_at) {
      return new Date(token.trial_ends_at).getTime() < now;
    }
    if (token.trial_ended_at) {
      return new Date(token.trial_ended_at).getTime() < now;
    }
    return false;
  }

  protected async handleExpired(token?: ReturnToken): Promise<undefined> {
    if (!this.authCallback) {
      return;
    }
    if (!token?.is_expired) {
      return;
    }

    let action = AuthCallbackActions.SubscriptionExpired;
    let time = 0;

    if (
      token.subscription_ends_at &&
      new Date(token.subscription_ends_at).getTime() > time
    ) {
      time = new Date(token.subscription_ends_at).getTime();
    }
    if (
      token.subscription_ended_at &&
      new Date(token.subscription_ended_at).getTime() > time
    ) {
      time = new Date(token.subscription_ended_at).getTime();
    }
    if (token.trial_ends_at && new Date(token.trial_ends_at).getTime() > time) {
      time = new Date(token.trial_ends_at).getTime();
      action = AuthCallbackActions.TrialExpired;
    }
    if (
      token.trial_ended_at &&
      new Date(token.trial_ended_at).getTime() > time
    ) {
      time = new Date(token.trial_ended_at).getTime();
      action = AuthCallbackActions.TrialExpired;
    }

    if (time && time < Date.now()) {
      await this.authCallback(action, token, this);
    }
  }

  protected addAuthorizationHeaderInterceptor() {
    this.client.api.interceptors.request.use(
      async (config): Promise<InternalAxiosRequestConfig> => {
        const newConfig = { ...config };
        if (
          Auth.urlRequiresAuth(config.url) &&
          newConfig.headers.Authorization === undefined
        ) {
          try {
            if (this.checkSubscriptionRequest) {
              // Wait till check is finished as the token might be refreshed.
              debug(
                'authorizationHeaderInterceptor: waiting for checkSubscriptionRequest',
                config.url,
              );
              await this.checkSubscriptionRequest;
              debug('authorizationHeaderInterceptor: resuming', config.url);
            }
            const accessToken = await this.getAccessToken();
            if (!accessToken) {
              throw new HttpError(
                'No access token found.',
                NO_ACCESS_TOKEN,
                'Token Error',
                401,
                NO_ACCESS_TOKEN,
              );
            }
            newConfig.headers.Authorization = `Bearer ${accessToken}`;
          } catch (err: any) {
            if (err?.code !== 'REFRESH_TOKEN_ERROR') {
              await this.logout();
            }
            return await Promise.reject(err);
          }
        }
        if (this.client.debug) {
          newConfig.params = config.params ?? {};
          newConfig.params.XDEBUG_SESSION_START = 'PHPSTORM';
        }
        return newConfig;
      },
      (error: any) => {
        this.client.logger.error('Request error', error);
        return Promise.reject(error);
      },
    );
  }

  // Axios interceptor for HTTP 401 Unauthorized
  // If the token is invalid or has expired, we regenerate a new token and then call the original REST again.
  protected addUnauthorizedInterceptor() {
    this.client.api.interceptors.response.use(
      (response) => response,
      async (error: any) => {
        // if error response is not HTTP 401, we do a reject to not process this error
        const status = error?.response?.status
          ? typeof error.response.status === 'string'
            ? parseInt(error.response.status, 10)
            : error.response.status
          : undefined;

        const isRetry = Boolean(error.response?.config?._retry);

        debug('unauthorizedInterceptor', {
          error: error?.message ?? error,
          id: this.id,
          isAuthCallbackSet: !!this.authCallback,
          isDisabled: this.disableHandler,
          isRetry,
          status,
          url: error.config?.url,
          urlRequiresAuth: Auth.urlRequiresAuth(error.config?.url),
        });

        // if not an authentication issue just let error flow through
        if (
          this.disableHandler ||
          isRetry ||
          status !== 401 ||
          !Auth.urlRequiresAuth(error.config?.url)
        ) {
          if (error.response?.data) {
            return await Promise.reject(getHttpResponse(error.response));
          }
          return await Promise.reject(error);
        }

        const accessToken = await this.getToken();
        if (!accessToken) {
          if (this.authCallback) {
            debug('unauthorizedInterceptor: authCallback due to empty token');
            await this.authCallback(
              AuthCallbackActions.Unauthorized,
              undefined,
              this,
            );
          }
          return await Promise.reject(getHttpResponse(error.response));
        }

        // When response code is HTTP 401 Unauthorized, try to refresh the token.
        // Don't handle again so it doesn't loop in case token refresh causes
        // the 401 response.
        this.disableHandler = true;

        let authCallbackAlreadyInvoked = false;
        try {
          // use refresh token to generate new access token so request can be retried
          const token = await this.refresh();
          if (token?.access_token) {
            error.response.config.headers.Authorization = `Bearer ${token.access_token}`;
            error.response.config._retry = true;
            return await this.client.api(error.response.config);
          }
          if (this.authCallback) {
            debug(
              'unauthorizedInterceptor: authCallback due to empty token after refresh',
            );
            authCallbackAlreadyInvoked = true;
            await this.authCallback(
              AuthCallbackActions.Unauthorized,
              undefined,
              this,
            );
          }
          return await Promise.reject(getHttpResponse(error.response));
        } catch (e: any) {
          // Add url that required authentication the error
          if (!e.url) {
            e.url = error.config?.url;
          }
          if (this.authCallback && !authCallbackAlreadyInvoked) {
            debug(
              'unauthorizedInterceptor: authCallback due to error',
              e?.message ?? e,
            );
            await this.authCallback(
              AuthCallbackActions.Unauthorized,
              undefined,
              this,
            );
          }
          return await Promise.reject(e);
        } finally {
          this.disableHandler = false;
        }
      },
    );
  }

  protected addInterceptors(): void {
    this.addAuthorizationHeaderInterceptor();
    this.addUnauthorizedInterceptor();
  }
}
