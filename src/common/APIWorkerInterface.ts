import { AxiosResponse, AxiosRequestConfig } from 'axios';
import { AuthCallback, ReturnToken } from '../auth';
import { BatchRequest, BatchResponses } from '../services/http';

export interface APIWorkerInterface {
  postBatch: (
    requests: BatchRequest[]
  ) => Promise<AxiosResponse<BatchResponses>>;
  request: <T = any, R = AxiosResponse<T>>(
    config: AxiosRequestConfig
  ) => Promise<R>;
  setAuthCallback: (authCallback: AuthCallback) => void;
  setToken: (token?: ReturnToken) => Promise<void>;
}
