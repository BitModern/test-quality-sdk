import axios, { AxiosInstance } from 'axios';
import Debug from 'debug';
import { PersistentStorage } from './PersistentStorage';
import { APIWorkerInterface, EmptyLogger, LoggerInterface } from './common';
import { Options } from './Options';
import { Auth, AuthCallback, ReturnToken, TokenStorageImpl } from './auth';
import { HttpError } from './exceptions';
import { TokenStorage } from './TokenStorage';

export let _client: ClientSdk | undefined;

const debug = Debug('tq:sdk:client');

export class ClientSdk {
  private auth?: Auth;
  public logger: LoggerInterface;
  public api: AxiosInstance;
  public clientId: string;
  public clientSecret: string;
  public debug: boolean;
  public tokenStorage: TokenStorage;
  public persistentStorage?: PersistentStorage;
  public apiWorker?: APIWorkerInterface;

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
    debug('constructor', options);
    const baseUrl = options.baseUrl || 'https://api.testquality.com';
    this.logger = options.logger || new EmptyLogger();

    this.api =
      options.api ||
      axios.create({
        baseURL: `${baseUrl}/api`,
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
    this.apiWorker = options.apiWorker;
  }

  public setErrorHandler(errorHandler: (newError: HttpError) => void): void {
    this.errorHandler = errorHandler;
  }

  // TODO setAPIWorkerHandler

  public async updateToken(token: ReturnToken | undefined) {
    if (!this.apiWorker) {
      return;
    }
    const tok = token || (await this.tokenStorage.getToken());
    if (tok) {
      this.apiWorker.setToken(tok);
    }
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

export function setGlobalClient(client?: ClientSdk) {
  _client = client;
}

export function getGlobalClient(): ClientSdk {
  if (!_client) {
    throw new Error('No global client has been set up');
  }

  return _client;
}
