/**
 * Copyright (C) 2021 BitModern, Inc - All Rights Reserved
 */

import { AxiosInstance } from 'axios';
import { QueryParams } from './QueryParams';

export async function getResponse<T, Q = T>(
  api: AxiosInstance | undefined,
  queryParams: QueryParams<Q>
): Promise<T> {
  if (!api) {
    throw new Error('No clientSkd.api provided');
  }

  // TODO
  // Only for GET ?
  // worker.post(action?, queryParams);
  /* const { method = 'GET' } = queryParams;
  if (method === 'GET') {
    return Worker.query()
  } */

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
