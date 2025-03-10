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
  queryParams?: QueryParams<Virtual>,
): Promise<ResourceList<VirtualApi>> => {
  const config: QueryParams<Virtual> = {
    method: 'get',
    url: queryParams?.url ?? VirtualRoute(),
    params: queryParams?.params,
    cancelToken: queryParams?.cancelToken,
    headers: queryParams?.headers,
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<ResourceList<VirtualApi>>(config)
    : getResponse<ResourceList<VirtualApi>, Virtual>(
        queryParams?.api ?? _client?.api,
        config,
      );
};

export const virtualGetOne = (
  id: number,
  queryParams?: QueryParams<Virtual>,
): Promise<VirtualApi> => {
  const config: QueryParams<Virtual> = {
    method: 'get',
    url: `${queryParams?.url ?? VirtualRoute()}/${id}`,
    params: queryParams?.params,
    cancelToken: queryParams?.cancelToken,
    headers: queryParams?.headers,
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<VirtualApi>(config)
    : getResponse<VirtualApi, Virtual>(
        queryParams?.api ?? _client?.api,
        config,
      );
};

export const virtualDeleteOne = (
  id: number,
  queryParams?: QueryParams<Virtual>,
): Promise<MessageResponse> => {
  const config: QueryParams<Virtual> = {
    method: 'delete',
    url: `${queryParams?.url ?? VirtualRoute()}/${id}`,
    params: queryParams?.params,
    headers: queryParams?.headers,
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<MessageResponse>(config)
    : getResponse<MessageResponse, Virtual>(
        queryParams?.api ?? _client?.api,
        config,
      );
};

export const virtualDeleteMany = (
  data: Partial<Virtual>[],
  queryParams?: QueryParamsWithList<Virtual>,
): Promise<{ count: number }[]> => {
  const chunks = chunkArray(data, 1000);
  return Promise.all(
    chunks.map((chunk) => {
      const config: QueryParamsWithList<Virtual> = {
        method: 'post',
        url: queryParams?.url ?? VirtualRoute() + '/delete',
        params: queryParams?.params,
        list: chunk,
        headers: queryParams?.headers,
      };

      return queryParams?.batch
        ? queryParams.batch.addBatch<{ count: number }>(config)
        : getResponse<{ count: number }, Virtual>(
            queryParams?.api ?? _client?.api,
            config,
          );
    }),
  );
};

export const virtualUpdateOne = (
  id: number,
  data: Partial<Virtual>,
  queryParams?: QueryParams<Virtual>,
): Promise<Virtual> => {
  const config: QueryParams<Virtual> = {
    method: 'put',
    url: `${queryParams?.url ?? VirtualRoute()}/${id}`,
    params: queryParams?.params,
    data,
    headers: queryParams?.headers,
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<Virtual>(config)
    : getResponse<Virtual>(queryParams?.api ?? _client?.api, config);
};

export const virtualCreateOne = (
  data: Partial<Virtual>,
  queryParams?: QueryParams<Virtual>,
): Promise<Virtual> => {
  const config: QueryParams<Virtual> = {
    method: 'post',
    url: queryParams?.url ?? VirtualRoute(),
    params: queryParams?.params,
    data,
    headers: queryParams?.headers,
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<Virtual>(config)
    : getResponse<Virtual>(queryParams?.api ?? _client?.api, config);
};

export const virtualCreateMany = (
  data: Partial<Virtual>[],
  queryParams?: QueryParamsWithList<Virtual>,
): Promise<Virtual[][]> => {
  const chunks = chunkArray(data, 1000);
  return Promise.all(
    chunks.map((chunk) => {
      const config: QueryParamsWithList<Virtual> = {
        method: 'post',
        url: queryParams?.url ?? VirtualRoute(),
        params: queryParams?.params,
        list: chunk,
        headers: queryParams?.headers,
      };

      return queryParams?.batch
        ? queryParams.batch.addBatch<Virtual[]>(config)
        : getResponse<Virtual[], Virtual>(
            queryParams?.api ?? _client?.api,
            config,
          );
    }),
  );
};
