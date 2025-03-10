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
  queryParams?: QueryParams<Watch>,
): Promise<ResourceList<WatchApi>> => {
  const config: QueryParams<Watch> = {
    method: 'get',
    url: queryParams?.url ?? WatchRoute(),
    params: queryParams?.params,
    cancelToken: queryParams?.cancelToken,
    headers: queryParams?.headers,
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<ResourceList<WatchApi>>(config)
    : getResponse<ResourceList<WatchApi>, Watch>(
        queryParams?.api ?? _client?.api,
        config,
      );
};

export const watchGetOne = (
  id: number,
  queryParams?: QueryParams<Watch>,
): Promise<WatchApi> => {
  const config: QueryParams<Watch> = {
    method: 'get',
    url: `${queryParams?.url ?? WatchRoute()}/${id}`,
    params: queryParams?.params,
    cancelToken: queryParams?.cancelToken,
    headers: queryParams?.headers,
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<WatchApi>(config)
    : getResponse<WatchApi, Watch>(queryParams?.api ?? _client?.api, config);
};

export const watchDeleteOne = (
  id: number,
  queryParams?: QueryParams<Watch>,
): Promise<MessageResponse> => {
  const config: QueryParams<Watch> = {
    method: 'delete',
    url: `${queryParams?.url ?? WatchRoute()}/${id}`,
    params: queryParams?.params,
    headers: queryParams?.headers,
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<MessageResponse>(config)
    : getResponse<MessageResponse, Watch>(
        queryParams?.api ?? _client?.api,
        config,
      );
};

export const watchDeleteMany = (
  data: Partial<Watch>[],
  queryParams?: QueryParamsWithList<Watch>,
): Promise<{ count: number }[]> => {
  const chunks = chunkArray(data, 1000);
  return Promise.all(
    chunks.map((chunk) => {
      const config: QueryParamsWithList<Watch> = {
        method: 'post',
        url: queryParams?.url ?? WatchRoute() + '/delete',
        params: queryParams?.params,
        list: chunk,
        headers: queryParams?.headers,
      };

      return queryParams?.batch
        ? queryParams.batch.addBatch<{ count: number }>(config)
        : getResponse<{ count: number }, Watch>(
            queryParams?.api ?? _client?.api,
            config,
          );
    }),
  );
};

export const watchUpdateOne = (
  id: number,
  data: Partial<Watch>,
  queryParams?: QueryParams<Watch>,
): Promise<Watch> => {
  const config: QueryParams<Watch> = {
    method: 'put',
    url: `${queryParams?.url ?? WatchRoute()}/${id}`,
    params: queryParams?.params,
    data,
    headers: queryParams?.headers,
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<Watch>(config)
    : getResponse<Watch>(queryParams?.api ?? _client?.api, config);
};

export const watchCreateOne = (
  data: Partial<Watch>,
  queryParams?: QueryParams<Watch>,
): Promise<Watch> => {
  const config: QueryParams<Watch> = {
    method: 'post',
    url: queryParams?.url ?? WatchRoute(),
    params: queryParams?.params,
    data,
    headers: queryParams?.headers,
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<Watch>(config)
    : getResponse<Watch>(queryParams?.api ?? _client?.api, config);
};

export const watchCreateMany = (
  data: Partial<Watch>[],
  queryParams?: QueryParamsWithList<Watch>,
): Promise<Watch[][]> => {
  const chunks = chunkArray(data, 1000);
  return Promise.all(
    chunks.map((chunk) => {
      const config: QueryParamsWithList<Watch> = {
        method: 'post',
        url: queryParams?.url ?? WatchRoute(),
        params: queryParams?.params,
        list: chunk,
        headers: queryParams?.headers,
      };

      return queryParams?.batch
        ? queryParams.batch.addBatch<Watch[]>(config)
        : getResponse<Watch[], Watch>(queryParams?.api ?? _client?.api, config);
    }),
  );
};
