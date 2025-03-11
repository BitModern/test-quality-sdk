/**
 * Copyright (C) 2021 BitModern, Inc - All Rights Reserved
 */

import type { CancelToken, Method, AxiosInstance } from 'axios';
import type { TQRequestParameters } from './TQRequestParameters';
import type { BatchService } from '../../services/http/BatchService';

export function hasListProperty(
  queryParams: any,
): queryParams is QueryParamsWithList {
  return 'list' in queryParams;
}

type AddInSuffix<T> = {
  [K in keyof T as `${K & string}-in`]: string;
};

type ParamsWithInSuffix<T> = Partial<T & AddInSuffix<T>> & TQRequestParameters;

export interface QueryParams<T = any, P = T> {
  api?: AxiosInstance;
  batch?: BatchService;
  cancelToken?: CancelToken;
  data?: T;
  headers?: any;
  id?: number | string;
  method?: Method;
  params?: ParamsWithInSuffix<P>;
  url?: string;
}

export interface QueryParamsWithList<T = any> extends QueryParams<T> {
  list: T[];
}

export interface QueryParamsWithInSuffix<T = any> extends QueryParams<T> {
  params?: ParamsWithInSuffix<T>;
}
