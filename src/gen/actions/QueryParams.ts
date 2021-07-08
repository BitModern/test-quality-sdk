/**
 * Copyright (C) 2021 BitModern, Inc - All Rights Reserved
 */

import { CancelToken, Method, AxiosInstance } from 'axios';
import { TQRequestParameters } from './TQRequestParameters';
import { BatchService } from '../../services/http/BatchService';

export interface QueryParams<T = any> {
  url?: string;
  params?: Partial<T> & TQRequestParameters;
  batch?: BatchService;
  data?: Partial<T>;
  method?: Method;
  id?: number | string;
  cancelToken?: CancelToken;
  api?: AxiosInstance;
}

export interface QueryParamsWithList<T = any> extends QueryParams<T> {
  list: Partial<T>[];
}
