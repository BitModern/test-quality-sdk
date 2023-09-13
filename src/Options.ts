import { AxiosInstance } from 'axios';
import { AuthCallback } from './auth';
import { APIWorkerInterface, LoggerInterface } from './common';
import { HttpError } from './exceptions/HttpError';
import { PersistentStorage } from './PersistentStorage';
import { TokenStorage } from './TokenStorage';

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
