import { AxiosInstance } from 'axios';
import { PersistentStorage } from 'PersistentStorage';
import { LoggerInterface } from './common/LoggerInterface';

export interface Options {
  clientId: string;
  clientSecret: string;

  api?: AxiosInstance;
  baseUrl?: string;
  debug?: boolean;
  logger?: LoggerInterface;
  persistentStorage?: PersistentStorage;
}
