import axios, { AxiosInstance } from 'axios';
import { EmptyLogger } from './common/EmptyLogger';
import { LoggerInterface } from './common/LoggerInterface';
import { Options } from './Options';

export let _client: Client;

export class Client {
  public logger: LoggerInterface;
  public api: AxiosInstance;
  public clientId: string;
  public clientSecret: string;
  public debug: boolean;

  constructor(options: Options) {
    this.logger = options.logger || new EmptyLogger();

    this.api =
      options.api ||
      axios.create({
        baseURL: (options.baseUrl || 'https://api.testquality.com') + '/api',
        timeout: 1000000,
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
      });

    this.clientId = options.clientId;
    this.clientSecret = options.clientSecret;
    this.debug = !!options.debug;

    if (!_client) {
      _client = this;
    }
  }
}
