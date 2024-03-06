/**
 * Copyright (C) 2021 BitModern, Inc - All Rights Reserved
 */

import { CancelToken, Method, AxiosInstance } from 'axios';
import { TQRequestParameters } from './TQRequestParameters';
import { BatchService } from '../../services/http/BatchService';

export function hasListProperty(
  queryParams: any
): queryParams is QueryParamsWithList {
  return 'list' in queryParams;
}

export interface QueryParams<T = any> {
  api?: AxiosInstance;
  batch?: BatchService;
  cancelToken?: CancelToken;
  data?: Partial<T>;
  headers?: any;
  id?: number | string;
  method?: Method;
  params?: Partial<T> & TQRequestParameters;
  url?: string;
}

export interface QueryParamsWithList<T = any> extends QueryParams<T> {
  list: Partial<T>[];
}
