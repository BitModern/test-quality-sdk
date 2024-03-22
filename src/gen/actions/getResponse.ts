/**
 * Copyright (C) 2021 BitModern, Inc - All Rights Reserved
 */

import { AxiosInstance } from 'axios';
import {
  QueryParams,
  QueryParamsWithList,
  hasListProperty,
} from './QueryParams';

export async function getResponse<T, Q = T>(
  api: AxiosInstance | undefined,
  queryParams: QueryParams<Q> | QueryParamsWithList<Q>,
): Promise<T> {
  if (!api) {
    throw new Error('No clientSkd.api provided');
  }

  return api
    .request<T>({
      method: queryParams.method || 'get',
      url: queryParams.url,
      params: queryParams.params,
      data: hasListProperty(queryParams) ? queryParams.list : queryParams.data,
      headers: queryParams.headers,
    })
    .then((resp) => {
      if (resp && resp.data) {
        return resp.data;
      }
      throw new Error('No response was provided');
    });
}
