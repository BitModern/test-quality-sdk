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
import { ResourceValueRoute } from '../../routes/Routes';
import type { ResourceValue } from './ResourceValue';
import type { ResourceValueApi } from './ResourceValueApi';

export const resourceValueGetMany = (
  queryParams?: QueryParams<Partial<ResourceValue>>,
): Promise<ResourceList<ResourceValueApi>> => {
  const config: QueryParams<Partial<ResourceValue>> = {
    method: 'get',
    url: queryParams?.url ?? ResourceValueRoute(),
    params: queryParams?.params,
    cancelToken: queryParams?.cancelToken,
    headers: queryParams?.headers,
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<ResourceList<ResourceValueApi>>(config)
    : getResponse<ResourceList<ResourceValueApi>, Partial<ResourceValue>>(
        queryParams?.api ?? _client?.api,
        config,
      );
};

export const resourceValueGetOne = (
  id: number,
  queryParams?: QueryParams<Partial<ResourceValue>>,
): Promise<ResourceValueApi> => {
  const config: QueryParams<Partial<ResourceValue>> = {
    method: 'get',
    url: `${queryParams?.url ?? ResourceValueRoute()}/${id}`,
    params: queryParams?.params,
    cancelToken: queryParams?.cancelToken,
    headers: queryParams?.headers,
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<ResourceValueApi>(config)
    : getResponse<ResourceValueApi, Partial<ResourceValue>>(
        queryParams?.api ?? _client?.api,
        config,
      );
};

export const resourceValueDeleteOne = (
  id: number,
  queryParams?: QueryParams<Partial<ResourceValue>>,
): Promise<MessageResponse> => {
  const config: QueryParams<Partial<ResourceValue>> = {
    method: 'delete',
    url: `${queryParams?.url ?? ResourceValueRoute()}/${id}`,
    params: queryParams?.params,
    headers: queryParams?.headers,
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<MessageResponse>(config)
    : getResponse<MessageResponse, Partial<ResourceValue>>(
        queryParams?.api ?? _client?.api,
        config,
      );
};

export const resourceValueDeleteMany = (
  data: (Partial<ResourceValue> & { id: number })[],
  queryParams?: QueryParamsWithList<Partial<ResourceValue> & { id: number }>,
): Promise<{ count: number }[]> => {
  const chunks = chunkArray(data, 1000);
  return Promise.all(
    chunks.map((chunk) => {
      const config: QueryParamsWithList<
        Partial<ResourceValue> & { id: number }
      > = {
        method: 'post',
        url: queryParams?.url ?? ResourceValueRoute() + '/delete',
        params: queryParams?.params,
        list: chunk,
        headers: queryParams?.headers,
      };

      return queryParams?.batch
        ? queryParams.batch.addBatch<{ count: number }>(config)
        : getResponse<
            { count: number },
            Partial<ResourceValue> & { id: number }
          >(queryParams?.api ?? _client?.api, config);
    }),
  );
};

export const resourceValueUpdateOne = (
  id: number,
  data: Partial<ResourceValue>,
  queryParams?: QueryParams<Partial<ResourceValue>>,
): Promise<ResourceValue> => {
  const config: QueryParams<Partial<ResourceValue>> = {
    method: 'put',
    url: `${queryParams?.url ?? ResourceValueRoute()}/${id}`,
    params: queryParams?.params,
    data,
    headers: queryParams?.headers,
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<ResourceValue>(config)
    : getResponse<ResourceValue, Partial<ResourceValue>>(
        queryParams?.api ?? _client?.api,
        config,
      );
};

export const resourceValueUpdateMany = (
  data: (Partial<ResourceValue> & { id: number })[],
  queryParams?: QueryParamsWithList<Partial<ResourceValue> & { id: number }>,
): Promise<ResourceValue[][]> => {
  const chunks = chunkArray(data, 1000);
  return Promise.all(
    chunks.map((chunk) => {
      const config: QueryParamsWithList<
        Partial<ResourceValue> & { id: number }
      > = {
        method: 'post',
        url: queryParams?.url ?? ResourceValueRoute(),
        params: queryParams?.params,
        list: chunk,
        headers: queryParams?.headers,
      };

      return queryParams?.batch
        ? queryParams.batch.addBatch<ResourceValue[]>(config)
        : getResponse<ResourceValue[], Partial<ResourceValue> & { id: number }>(
            queryParams?.api ?? _client?.api,
            config,
          );
    }),
  );
};

export const resourceValueCreateOne = (
  data: Partial<ResourceValue>,
  queryParams?: QueryParams<Partial<ResourceValue>>,
): Promise<ResourceValue> => {
  const config: QueryParams<Partial<ResourceValue>> = {
    method: 'post',
    url: queryParams?.url ?? ResourceValueRoute(),
    params: queryParams?.params,
    data,
    headers: queryParams?.headers,
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<ResourceValue>(config)
    : getResponse<ResourceValue, Partial<ResourceValue>>(
        queryParams?.api ?? _client?.api,
        config,
      );
};

export const resourceValueCreateMany = (
  data: Partial<ResourceValue>[],
  queryParams?: QueryParamsWithList<Partial<ResourceValue>>,
): Promise<ResourceValue[][]> => {
  const chunks = chunkArray(data, 1000);
  return Promise.all(
    chunks.map((chunk) => {
      const config: QueryParamsWithList<Partial<ResourceValue>> = {
        method: 'post',
        url: queryParams?.url ?? ResourceValueRoute(),
        params: queryParams?.params,
        list: chunk,
        headers: queryParams?.headers,
      };

      return queryParams?.batch
        ? queryParams.batch.addBatch<ResourceValue[]>(config)
        : getResponse<ResourceValue[], Partial<ResourceValue>>(
            queryParams?.api ?? _client?.api,
            config,
          );
    }),
  );
};
