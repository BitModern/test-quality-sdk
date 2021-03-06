import { AxiosInstance } from 'axios';
import { PersistentStorage } from './PersistentStorage';
import { LoggerInterface } from './common/LoggerInterface';
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
}
