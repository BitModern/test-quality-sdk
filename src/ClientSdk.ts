import axios, { AxiosInstance } from 'axios';
import Debug from 'debug';
import { PersistentStorage } from './PersistentStorage';
import { APIWorkerInterface, EmptyLogger, LoggerInterface } from './common';
import { Options } from './Options';
import { Auth, AuthCallback, TokenStorageImpl } from './auth';
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
  public id = Math.random();

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
    debug('constructor', options, this.id);
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

    this.apiWorker = options.apiWorker;
    this.clientId = options.clientId;
    this.clientSecret = options.clientSecret;
    this.debug = !!options.debug;
    if (options.errorHandler) {
      this.errorHandler = options.errorHandler;
    }
    this.persistentStorage = options.persistentStorage;
    this.tokenStorage =
      options.tokenStorage || new TokenStorageImpl(options.persistentStorage);
  }

  public setErrorHandler(errorHandler: (newError: HttpError) => void): void {
    this.errorHandler = errorHandler;
  }

  public getAuth(authCallback?: AuthCallback) {
    if (!this.auth) {
      this.auth = new Auth(this.tokenStorage, this, authCallback);
    } else if (authCallback) {
      debug('setAuthCallback', authCallback);
      this.auth.setAuthCallback(authCallback);
    }

    return this.auth;
  }

  public setAPIWorker(apiWorker: APIWorkerInterface) {
    debug('setAPIWorker');
    if (!this.apiWorker) {
      this.apiWorker = apiWorker;
    }
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
