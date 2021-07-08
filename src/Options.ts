import { AxiosInstance } from 'axios';
import { LoggerInterface } from './common/LoggerInterface';

export interface Options {
  clientId: string;
  clientSecret: string;
  logger?: LoggerInterface;
  baseUrl?: string;
  debug?: boolean;
  api?: AxiosInstance;
}
