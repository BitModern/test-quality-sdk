/**
 * Copyright (C) 2021 BitModern, Inc - All Rights Reserved
 */

import { AxiosInstance } from 'axios';
import { _worker } from '../../ClientSdk';
import { QueryParams } from './QueryParams';

export async function getResponse<T, Q = T>(
  api: AxiosInstance | undefined,
  queryParams: QueryParams<Q>
): Promise<T> {
  if (!api) {
    throw new Error('No clientSkd.api provided');
  }

  const { method = 'get' } = queryParams;
  return (_worker && method.toLowerCase() === 'get' ? _worker : api)
    .request<T>({
      method,
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
