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
import { WatchRoute } from '../../routes/Routes';
import type { Watch } from './Watch';
import type { WatchApi } from './WatchApi';

export const watchGetMany = (
  queryParams?: QueryParams<Partial<Watch>>,
): Promise<ResourceList<WatchApi>> => {
  const config: QueryParams<Partial<Watch>> = {
    method: 'get',
    url: queryParams?.url ?? WatchRoute(),
    params: queryParams?.params,
    cancelToken: queryParams?.cancelToken,
    headers: queryParams?.headers,
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<ResourceList<WatchApi>>(config)
    : getResponse<ResourceList<WatchApi>, Partial<Watch>>(
        queryParams?.api ?? _client?.api,
        config,
      );
};

export const watchGetOne = (
  id: number,
  queryParams?: QueryParams<Partial<Watch>>,
): Promise<WatchApi> => {
  const config: QueryParams<Partial<Watch>> = {
    method: 'get',
    url: `${queryParams?.url ?? WatchRoute()}/${id}`,
    params: queryParams?.params,
    cancelToken: queryParams?.cancelToken,
    headers: queryParams?.headers,
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<WatchApi>(config)
    : getResponse<WatchApi, Partial<Watch>>(
        queryParams?.api ?? _client?.api,
        config,
      );
};

export const watchDeleteOne = (
  id: number,
  queryParams?: QueryParams<Partial<Watch>>,
): Promise<MessageResponse> => {
  const config: QueryParams<Partial<Watch>> = {
    method: 'delete',
    url: `${queryParams?.url ?? WatchRoute()}/${id}`,
    params: queryParams?.params,
    headers: queryParams?.headers,
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<MessageResponse>(config)
    : getResponse<MessageResponse, Partial<Watch>>(
        queryParams?.api ?? _client?.api,
        config,
      );
};

export const watchDeleteMany = (
  data: (Partial<Watch> & { id: number })[],
  queryParams?: QueryParamsWithList<Partial<Watch> & { id: number }>,
): Promise<{ count: number }[]> => {
  const chunks = chunkArray(data, 1000);
  return Promise.all(
    chunks.map((chunk) => {
      const config: QueryParamsWithList<Partial<Watch> & { id: number }> = {
        method: 'post',
        url: queryParams?.url ?? WatchRoute() + '/delete',
        params: queryParams?.params,
        list: chunk,
        headers: queryParams?.headers,
      };

      return queryParams?.batch
        ? queryParams.batch.addBatch<{ count: number }>(config)
        : getResponse<{ count: number }, Partial<Watch> & { id: number }>(
            queryParams?.api ?? _client?.api,
            config,
          );
    }),
  );
};

export const watchUpdateOne = (
  id: number,
  data: Partial<Watch>,
  queryParams?: QueryParams<Partial<Watch>>,
): Promise<Watch> => {
  const config: QueryParams<Partial<Watch>> = {
    method: 'put',
    url: `${queryParams?.url ?? WatchRoute()}/${id}`,
    params: queryParams?.params,
    data,
    headers: queryParams?.headers,
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<Watch>(config)
    : getResponse<Watch, Partial<Watch>>(
        queryParams?.api ?? _client?.api,
        config,
      );
};

export const watchUpdateMany = (
  data: (Partial<Watch> & { id: number })[],
  queryParams?: QueryParamsWithList<Partial<Watch> & { id: number }>,
): Promise<Watch[][]> => {
  const chunks = chunkArray(data, 1000);
  return Promise.all(
    chunks.map((chunk) => {
      const config: QueryParamsWithList<Partial<Watch> & { id: number }> = {
        method: 'post',
        url: queryParams?.url ?? WatchRoute(),
        params: queryParams?.params,
        list: chunk,
        headers: queryParams?.headers,
      };

      return queryParams?.batch
        ? queryParams.batch.addBatch<Watch[]>(config)
        : getResponse<Watch[], Partial<Watch> & { id: number }>(
            queryParams?.api ?? _client?.api,
            config,
          );
    }),
  );
};

export const watchCreateOne = (
  data: Partial<Watch>,
  queryParams?: QueryParams<Partial<Watch>>,
): Promise<Watch> => {
  const config: QueryParams<Partial<Watch>> = {
    method: 'post',
    url: queryParams?.url ?? WatchRoute(),
    params: queryParams?.params,
    data,
    headers: queryParams?.headers,
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<Watch>(config)
    : getResponse<Watch, Partial<Watch>>(
        queryParams?.api ?? _client?.api,
        config,
      );
};

export const watchCreateMany = (
  data: Partial<Watch>[],
  queryParams?: QueryParamsWithList<Partial<Watch>>,
): Promise<Watch[][]> => {
  const chunks = chunkArray(data, 1000);
  return Promise.all(
    chunks.map((chunk) => {
      const config: QueryParamsWithList<Partial<Watch>> = {
        method: 'post',
        url: queryParams?.url ?? WatchRoute(),
        params: queryParams?.params,
        list: chunk,
        headers: queryParams?.headers,
      };

      return queryParams?.batch
        ? queryParams.batch.addBatch<Watch[]>(config)
        : getResponse<Watch[], Partial<Watch>>(
            queryParams?.api ?? _client?.api,
            config,
          );
    }),
  );
};
