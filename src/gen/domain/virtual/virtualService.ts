/**
 * Copyright (C) 2021 BitModern, Inc - All Rights Reserved
 */

import { _client } from '../../../ClientSdk';
import { getResponse } from '../../actions/getResponse';
import { chunkArray } from '../../actions/chunkArray';
import type {
  QueryParams,
  QueryParamsWithList,
} from '../../actions/QueryParams';
import type { MessageResponse } from '../../actions/MessageResponse';
import type { ResourceList } from '../../models/ResourceList';
import { VirtualRoute } from '../../routes/Routes';
import type { Virtual } from './Virtual';
import type { VirtualApi } from './VirtualApi';

export const virtualGetMany = (
  queryParams?: QueryParams<Partial<Virtual>>,
): Promise<ResourceList<VirtualApi>> => {
  const config: QueryParams<Partial<Virtual>> = {
    method: 'get',
    url: queryParams?.url ?? VirtualRoute(),
    params: queryParams?.params,
    cancelToken: queryParams?.cancelToken,
    headers: queryParams?.headers,
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<ResourceList<VirtualApi>>(config)
    : getResponse<ResourceList<VirtualApi>, Partial<Virtual>>(
        queryParams?.api ?? _client?.api,
        config,
      );
};

export const virtualGetOne = (
  id: number,
  queryParams?: QueryParams<Partial<Virtual>>,
): Promise<VirtualApi> => {
  const config: QueryParams<Partial<Virtual>> = {
    method: 'get',
    url: `${queryParams?.url ?? VirtualRoute()}/${id}`,
    params: queryParams?.params,
    cancelToken: queryParams?.cancelToken,
    headers: queryParams?.headers,
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<VirtualApi>(config)
    : getResponse<VirtualApi, Partial<Virtual>>(
        queryParams?.api ?? _client?.api,
        config,
      );
};

export const virtualDeleteOne = (
  id: number,
  queryParams?: QueryParams<Partial<Virtual>>,
): Promise<MessageResponse> => {
  const config: QueryParams<Partial<Virtual>> = {
    method: 'delete',
    url: `${queryParams?.url ?? VirtualRoute()}/${id}`,
    params: queryParams?.params,
    headers: queryParams?.headers,
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<MessageResponse>(config)
    : getResponse<MessageResponse, Partial<Virtual>>(
        queryParams?.api ?? _client?.api,
        config,
      );
};

export const virtualDeleteMany = (
  data: (Partial<Virtual> & { id: number })[],
  queryParams?: QueryParamsWithList<Partial<Virtual> & { id: number }>,
): Promise<{ count: number }[]> => {
  const chunks = chunkArray(data, 1000);
  return Promise.all(
    chunks.map((chunk) => {
      const config: QueryParamsWithList<Partial<Virtual> & { id: number }> = {
        method: 'post',
        url: queryParams?.url ?? VirtualRoute() + '/delete',
        params: queryParams?.params,
        list: chunk,
        headers: queryParams?.headers,
      };

      return queryParams?.batch
        ? queryParams.batch.addBatch<{ count: number }>(config)
        : getResponse<{ count: number }, Partial<Virtual> & { id: number }>(
            queryParams?.api ?? _client?.api,
            config,
          );
    }),
  );
};

export const virtualUpdateOne = (
  id: number,
  data: Partial<Virtual>,
  queryParams?: QueryParams<Partial<Virtual>>,
): Promise<Virtual> => {
  const config: QueryParams<Partial<Virtual>> = {
    method: 'put',
    url: `${queryParams?.url ?? VirtualRoute()}/${id}`,
    params: queryParams?.params,
    data,
    headers: queryParams?.headers,
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<Virtual>(config)
    : getResponse<Virtual, Partial<Virtual>>(
        queryParams?.api ?? _client?.api,
        config,
      );
};

export const virtualUpdateMany = (
  data: (Partial<Virtual> & { id: number })[],
  queryParams?: QueryParamsWithList<Partial<Virtual> & { id: number }>,
): Promise<Virtual[][]> => {
  const chunks = chunkArray(data, 1000);
  return Promise.all(
    chunks.map((chunk) => {
      const config: QueryParamsWithList<Partial<Virtual> & { id: number }> = {
        method: 'post',
        url: queryParams?.url ?? VirtualRoute(),
        params: queryParams?.params,
        list: chunk,
        headers: queryParams?.headers,
      };

      return queryParams?.batch
        ? queryParams.batch.addBatch<Virtual[]>(config)
        : getResponse<Virtual[], Partial<Virtual> & { id: number }>(
            queryParams?.api ?? _client?.api,
            config,
          );
    }),
  );
};

export const virtualCreateOne = (
  data: Partial<Virtual>,
  queryParams?: QueryParams<Partial<Virtual>>,
): Promise<Virtual> => {
  const config: QueryParams<Partial<Virtual>> = {
    method: 'post',
    url: queryParams?.url ?? VirtualRoute(),
    params: queryParams?.params,
    data,
    headers: queryParams?.headers,
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<Virtual>(config)
    : getResponse<Virtual, Partial<Virtual>>(
        queryParams?.api ?? _client?.api,
        config,
      );
};

export const virtualCreateMany = (
  data: Partial<Virtual>[],
  queryParams?: QueryParamsWithList<Partial<Virtual>>,
): Promise<Virtual[][]> => {
  const chunks = chunkArray(data, 1000);
  return Promise.all(
    chunks.map((chunk) => {
      const config: QueryParamsWithList<Partial<Virtual>> = {
        method: 'post',
        url: queryParams?.url ?? VirtualRoute(),
        params: queryParams?.params,
        list: chunk,
        headers: queryParams?.headers,
      };

      return queryParams?.batch
        ? queryParams.batch.addBatch<Virtual[]>(config)
        : getResponse<Virtual[], Partial<Virtual>>(
            queryParams?.api ?? _client?.api,
            config,
          );
    }),
  );
};
