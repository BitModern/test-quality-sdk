import { type AxiosResponse, type AxiosRequestConfig } from 'axios';
import { type AuthCallback, type ReturnToken } from '../auth';
import { type BatchRequest, type BatchResponses } from '../services/http';

export interface APIWorkerInterface {
  postBatch: (
    requests: BatchRequest[],
  ) => Promise<AxiosResponse<BatchResponses>>;
  request: <T = any, R = AxiosResponse<T>>(
    config: AxiosRequestConfig,
  ) => Promise<R>;
  setAuthCallback: (authCallback: AuthCallback) => void;
  setToken: (token?: ReturnToken) => Promise<void>;
}
