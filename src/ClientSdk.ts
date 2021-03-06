import axios, { AxiosInstance } from 'axios';
import { PersistentStorage } from './PersistentStorage';
import { EmptyLogger, LoggerInterface } from './common';
import { Options } from './Options';
import { Auth, AuthCallback, TokenStorageImpl } from './auth';
import { HttpError } from './exceptions';
import { TokenStorage } from './TokenStorage';

export let _client: ClientSdk;

export class ClientSdk {
  private auth?: Auth;
  public logger: LoggerInterface;
  public api: AxiosInstance;
  public clientId: string;
  public clientSecret: string;
  public debug: boolean;
  public tokenStorage: TokenStorage;
  public persistentStorage?: PersistentStorage;

  public errorHandlerDefault = (newError: HttpError) => {
    this.logger.error(
      newError.stack ? newError.stack : newError.message,
      newError.title,
      newError.status,
      newError.code,
      newError.trace
    );
  };

  public errorHandler: (newError: HttpError) => void = this.errorHandlerDefault;

  constructor(options: Options) {
    this.logger = options.logger || new EmptyLogger();

    this.api =
      options.api ||
      axios.create({
        baseURL: (options.baseUrl || 'https://api.testquality.com') + '/api',
        timeout: 1000000,
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
      });

    this.clientId = options.clientId;
    this.clientSecret = options.clientSecret;
    this.debug = !!options.debug;
    if (options.errorHandler) {
      this.errorHandler = options.errorHandler;
    }
    this.persistentStorage = options.persistentStorage;
    this.tokenStorage =
      options.tokenStorage || new TokenStorageImpl(options.persistentStorage);

    if (!_client) {
      _client = this;
    }
  }

  public setErrorHandler(errorHandler: (newError: HttpError) => void) {
    this.errorHandler = errorHandler;
  }

  public getAuth(authCallback?: AuthCallback) {
    if (!this.auth) {
      this.auth = new Auth(this.tokenStorage, this, authCallback);
    } else {
      this.auth.setAuthCallback(authCallback);
    }
    return this.auth;
  }
}
