import { AxiosInstance } from 'axios';
import { PersistentStorage } from './PersistentStorage';
import { APIWorkerInterface, LoggerInterface } from './common';
import { HttpError } from './exceptions/HttpError';
import { TokenStorage } from './TokenStorage';

export interface Options {
  clientId: string;
  clientSecret: string;

  api?: AxiosInstance;
  apiWorker?: APIWorkerInterface;
  baseUrl?: string;
  debug?: boolean;
  errorHandler?: (newError: HttpError) => void;
  logger?: LoggerInterface;
  persistentStorage?: PersistentStorage;
  tokenStorage?: TokenStorage;
}
