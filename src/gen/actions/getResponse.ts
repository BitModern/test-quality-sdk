/**
 * Copyright (C) 2021 BitModern, Inc - All Rights Reserved
 */

import { AxiosInstance } from 'axios';
import { QueryParams } from './QueryParams';

export function getResponse<T, Q = T>(
  api: AxiosInstance,
  queryParams: QueryParams<Q>
): Promise<T> {
  return api
    .request<T>({
      method: queryParams.method || 'get',
      url: queryParams.url,
      params: queryParams.params,
      data: queryParams.data,
      headers: queryParams.headers,
    })
    .then((resp) => {
      if (resp && resp.data) {
        return resp.data;
      }
      throw new Error('No response was provided');
    });
}
