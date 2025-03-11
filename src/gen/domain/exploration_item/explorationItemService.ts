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
import { ExplorationItemRoute } from '../../routes/Routes';
import type { ExplorationItem } from './ExplorationItem';
import type { ExplorationItemApi } from './ExplorationItemApi';

export const explorationItemGetMany = (
  queryParams?: QueryParams<ExplorationItem>,
): Promise<ResourceList<ExplorationItemApi>> => {
  const config: QueryParams<ExplorationItem> = {
    method: 'get',
    url: queryParams?.url ?? ExplorationItemRoute(),
    params: queryParams?.params,
    cancelToken: queryParams?.cancelToken,
    headers: queryParams?.headers,
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<ResourceList<ExplorationItemApi>>(config)
    : getResponse<ResourceList<ExplorationItemApi>, ExplorationItem>(
        queryParams?.api ?? _client?.api,
        config,
      );
};

export const explorationItemGetOne = (
  id: number,
  queryParams?: QueryParams<ExplorationItem>,
): Promise<ExplorationItemApi> => {
  const config: QueryParams<ExplorationItem> = {
    method: 'get',
    url: `${queryParams?.url ?? ExplorationItemRoute()}/${id}`,
    params: queryParams?.params,
    cancelToken: queryParams?.cancelToken,
    headers: queryParams?.headers,
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<ExplorationItemApi>(config)
    : getResponse<ExplorationItemApi, ExplorationItem>(
        queryParams?.api ?? _client?.api,
        config,
      );
};

export const explorationItemDeleteOne = (
  id: number,
  queryParams?: QueryParams<ExplorationItem>,
): Promise<MessageResponse> => {
  const config: QueryParams<ExplorationItem> = {
    method: 'delete',
    url: `${queryParams?.url ?? ExplorationItemRoute()}/${id}`,
    params: queryParams?.params,
    headers: queryParams?.headers,
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<MessageResponse>(config)
    : getResponse<MessageResponse, ExplorationItem>(
        queryParams?.api ?? _client?.api,
        config,
      );
};

export const explorationItemDeleteMany = (
  data: (Partial<ExplorationItem> & { id: number })[],
  queryParams?: QueryParamsWithList<ExplorationItem>,
): Promise<{ count: number }[]> => {
  const chunks = chunkArray(data, 1000);
  return Promise.all(
    chunks.map((chunk) => {
      const config: QueryParamsWithList<ExplorationItem> = {
        method: 'post',
        url: queryParams?.url ?? ExplorationItemRoute() + '/delete',
        params: queryParams?.params,
        list: chunk,
        headers: queryParams?.headers,
      };

      return queryParams?.batch
        ? queryParams.batch.addBatch<{ count: number }>(config)
        : getResponse<{ count: number }, ExplorationItem>(
            queryParams?.api ?? _client?.api,
            config,
          );
    }),
  );
};

export const explorationItemUpdateOne = (
  id: number,
  data: Partial<ExplorationItem>,
  queryParams?: QueryParams<ExplorationItem>,
): Promise<ExplorationItem> => {
  const config: QueryParams<ExplorationItem> = {
    method: 'put',
    url: `${queryParams?.url ?? ExplorationItemRoute()}/${id}`,
    params: queryParams?.params,
    data,
    headers: queryParams?.headers,
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<ExplorationItem>(config)
    : getResponse<ExplorationItem>(queryParams?.api ?? _client?.api, config);
};

export const explorationItemUpdateMany = (
  data: (Partial<ExplorationItem> & { id: number })[],
  queryParams?: QueryParamsWithList<ExplorationItem>,
): Promise<ExplorationItem[][]> => {
  const chunks = chunkArray(data, 1000);
  return Promise.all(
    chunks.map((chunk) => {
      const config: QueryParamsWithList<ExplorationItem> = {
        method: 'post',
        url: queryParams?.url ?? ExplorationItemRoute(),
        params: queryParams?.params,
        list: chunk,
        headers: queryParams?.headers,
      };

      return queryParams?.batch
        ? queryParams.batch.addBatch<ExplorationItem[]>(config)
        : getResponse<ExplorationItem[], ExplorationItem>(
            queryParams?.api ?? _client?.api,
            config,
          );
    }),
  );
};

export const explorationItemCreateOne = (
  data: Partial<ExplorationItem>,
  queryParams?: QueryParams<ExplorationItem>,
): Promise<ExplorationItem> => {
  const config: QueryParams<ExplorationItem> = {
    method: 'post',
    url: queryParams?.url ?? ExplorationItemRoute(),
    params: queryParams?.params,
    data,
    headers: queryParams?.headers,
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<ExplorationItem>(config)
    : getResponse<ExplorationItem>(queryParams?.api ?? _client?.api, config);
};

export const explorationItemCreateMany = (
  data: Partial<ExplorationItem>[],
  queryParams?: QueryParamsWithList<ExplorationItem>,
): Promise<ExplorationItem[][]> => {
  const chunks = chunkArray(data, 1000);
  return Promise.all(
    chunks.map((chunk) => {
      const config: QueryParamsWithList<ExplorationItem> = {
        method: 'post',
        url: queryParams?.url ?? ExplorationItemRoute(),
        params: queryParams?.params,
        list: chunk,
        headers: queryParams?.headers,
      };

      return queryParams?.batch
        ? queryParams.batch.addBatch<ExplorationItem[]>(config)
        : getResponse<ExplorationItem[], ExplorationItem>(
            queryParams?.api ?? _client?.api,
            config,
          );
    }),
  );
};
