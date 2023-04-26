import { AxiosInstance } from 'axios';
import { PersistentStorage } from './PersistentStorage';
import { APIWorkerInterface, LoggerInterface } from './common';
import { HttpError } from './exceptions/HttpError';
import { TokenStorage } from './TokenStorage';

export interface Options {
  clientId: string;
  clientSecret: string;

  api?: AxiosInstance;
  baseUrl?: string;
  debug?: boolean;
  errorHandler?: (newError: HttpError) => void;
  logger?: LoggerInterface;
  tokenStorage?: TokenStorage;
  persistentStorage?: PersistentStorage;
  apiWorker?: APIWorkerInterface;
}
