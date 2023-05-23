import { AxiosResponse, AxiosRequestConfig } from 'axios';
import { ReturnToken } from '../auth';
import { BatchRequest, BatchResponses } from '../services/http';

export interface APIWorkerInterface {
  postBatch: (
    requests: BatchRequest[]
  ) => Promise<AxiosResponse<BatchResponses>>;
  request: <T = any, R = AxiosResponse<T>>(
    config: AxiosRequestConfig
  ) => Promise<R>;
  setToken: (token: ReturnToken) => void;
  setTokenUpdateHandler: (
    tokenUpdateHandler: (token?: ReturnToken) => void
  ) => void;
}
