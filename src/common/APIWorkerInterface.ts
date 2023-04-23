import { AxiosResponse, AxiosRequestConfig } from 'axios';
import { ReturnToken } from '../auth';
import { BatchRequest, BatchResponses } from '../services/http';

export interface APIWorkerInterface {
  postBatch: (
    requests: BatchRequest[]
  ) => Promise<AxiosResponse<BatchResponses>>;
  request: <T = any, R = AxiosResponse<T>, D = any>(
    config: AxiosRequestConfig<D>
  ) => Promise<R>;
  setToken: (token: ReturnToken) => void;
}
