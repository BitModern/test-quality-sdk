import axios, { type AxiosInstance } from 'axios';
import Debug from 'debug';
import { type PersistentStorage } from './PersistentStorage';
import {
  type APIWorkerInterface,
  EmptyLogger,
  type LoggerInterface,
} from './common';
import { type Options } from './Options';
import { Auth, type AuthCallback, TokenStorageImpl } from './auth';
import { type HttpError } from './exceptions';
import { type TokenStorage } from './TokenStorage';

export let _client: ClientSdk | undefined;

const debug = Debug('tq:sdk:client');

export class ClientSdk {
  private readonly auth: Auth;
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
      newError.trace,
    );
  };

  public errorHandler: (newError: HttpError) => void = this.errorHandlerDefault;

  constructor(options: Options) {
    debug('constructor', { id: this.id, versions: 1, options });
    const baseUrl = options.baseUrl ?? 'https://api.testquality.com';
    this.logger = options.logger ?? new EmptyLogger();

    const logger = this.logger;
    this.api =
      options.api ??
      axios.create({
        baseURL: `${baseUrl}/api`,
        timeout: 1000000,
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        transformResponse: [
          function transformResponse(data, headers) {
            if (headers['content-type'] === 'application/json') {
              try {
                return JSON.parse(data, (_, value) =>
                  value === null ? undefined : value,
                );
              } catch (error) {
                logger.error(
                  'Failed to parse JSON response',
                  error instanceof Error ? error.message : String(error),
                );
                return data;
              }
            }
            return data;
          },
        ],
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
      options.tokenStorage ?? new TokenStorageImpl(options.persistentStorage);

    this.auth = new Auth(this.tokenStorage, this, options.authCallback);
  }

  public getAuth(
    /**
     * @deprecated authCallback is set in constructor
     */
    authCallback?: AuthCallback,
  ) {
    if (authCallback) {
      console.warn(
        'Param authCallback has been deprecated since version 1.12.11',
      );
    }
    return this.auth;
  }

  /**
   * @deprecated since version 1.12.11
   */
  public setAuth() {
    console.warn('Method has been deprecated since version 1.12.11');
    return this.getAuth();
  }

  public setErrorHandler(errorHandler: (newError: HttpError) => void): void {
    this.errorHandler = errorHandler;
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
