import { AxiosResponse } from 'axios';
import { ReturnToken } from '../auth';
import { QueryParams } from '../gen/actions';
import { BatchRequest, BatchResponses } from '../services/http';

export interface ClientWorkerInterface {
  postBatch: (
    requests: BatchRequest[]
  ) => Promise<AxiosResponse<BatchResponses>>;
  setToken: (token: ReturnToken) => Promise<any>;
  request: <T>(request: QueryParams) => Promise<T>;
}
