import { type AxiosInstance } from 'axios';
import { type AuthCallback } from './auth';
import { type APIWorkerInterface, type LoggerInterface } from './common';
import { type HttpError } from './exceptions/HttpError';
import { type PersistentStorage } from './PersistentStorage';
import { type TokenStorage } from './TokenStorage';

export interface Options {
  clientId: string;
  clientSecret: string;

  api?: AxiosInstance;
  apiWorker?: APIWorkerInterface;
  authCallback?: AuthCallback;
  baseUrl?: string;
  debug?: boolean;
  errorHandler?: (newError: HttpError) => void;
  logger?: LoggerInterface;
  persistentStorage?: PersistentStorage;
  tokenStorage?: TokenStorage;
}
