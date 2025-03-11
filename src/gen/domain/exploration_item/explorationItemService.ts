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
  queryParams?: QueryParams<Partial<ExplorationItem>>,
): Promise<ResourceList<ExplorationItemApi>> => {
  const config: QueryParams<Partial<ExplorationItem>> = {
    method: 'get',
    url: queryParams?.url ?? ExplorationItemRoute(),
    params: queryParams?.params,
    cancelToken: queryParams?.cancelToken,
    headers: queryParams?.headers,
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<ResourceList<ExplorationItemApi>>(config)
    : getResponse<ResourceList<ExplorationItemApi>, Partial<ExplorationItem>>(
        queryParams?.api ?? _client?.api,
        config,
      );
};

export const explorationItemGetOne = (
  id: number,
  queryParams?: QueryParams<Partial<ExplorationItem>>,
): Promise<ExplorationItemApi> => {
  const config: QueryParams<Partial<ExplorationItem>> = {
    method: 'get',
    url: `${queryParams?.url ?? ExplorationItemRoute()}/${id}`,
    params: queryParams?.params,
    cancelToken: queryParams?.cancelToken,
    headers: queryParams?.headers,
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<ExplorationItemApi>(config)
    : getResponse<ExplorationItemApi, Partial<ExplorationItem>>(
        queryParams?.api ?? _client?.api,
        config,
      );
};

export const explorationItemDeleteOne = (
  id: number,
  queryParams?: QueryParams<Partial<ExplorationItem>>,
): Promise<MessageResponse> => {
  const config: QueryParams<Partial<ExplorationItem>> = {
    method: 'delete',
    url: `${queryParams?.url ?? ExplorationItemRoute()}/${id}`,
    params: queryParams?.params,
    headers: queryParams?.headers,
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<MessageResponse>(config)
    : getResponse<MessageResponse, Partial<ExplorationItem>>(
        queryParams?.api ?? _client?.api,
        config,
      );
};

export const explorationItemDeleteMany = (
  data: (Partial<ExplorationItem> & { id: number })[],
  queryParams?: QueryParamsWithList<Partial<ExplorationItem> & { id: number }>,
): Promise<{ count: number }[]> => {
  const chunks = chunkArray(data, 1000);
  return Promise.all(
    chunks.map((chunk) => {
      const config: QueryParamsWithList<
        Partial<ExplorationItem> & { id: number }
      > = {
        method: 'post',
        url: queryParams?.url ?? ExplorationItemRoute() + '/delete',
        params: queryParams?.params,
        list: chunk,
        headers: queryParams?.headers,
      };

      return queryParams?.batch
        ? queryParams.batch.addBatch<{ count: number }>(config)
        : getResponse<
            { count: number },
            Partial<ExplorationItem> & { id: number }
          >(queryParams?.api ?? _client?.api, config);
    }),
  );
};

export const explorationItemUpdateOne = (
  id: number,
  data: Partial<ExplorationItem>,
  queryParams?: QueryParams<Partial<ExplorationItem>>,
): Promise<ExplorationItem> => {
  const config: QueryParams<Partial<ExplorationItem>> = {
    method: 'put',
    url: `${queryParams?.url ?? ExplorationItemRoute()}/${id}`,
    params: queryParams?.params,
    data,
    headers: queryParams?.headers,
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<ExplorationItem>(config)
    : getResponse<ExplorationItem, Partial<ExplorationItem>>(
        queryParams?.api ?? _client?.api,
        config,
      );
};

export const explorationItemUpdateMany = (
  data: (Partial<ExplorationItem> & { id: number })[],
  queryParams?: QueryParamsWithList<Partial<ExplorationItem> & { id: number }>,
): Promise<ExplorationItem[][]> => {
  const chunks = chunkArray(data, 1000);
  return Promise.all(
    chunks.map((chunk) => {
      const config: QueryParamsWithList<
        Partial<ExplorationItem> & { id: number }
      > = {
        method: 'post',
        url: queryParams?.url ?? ExplorationItemRoute(),
        params: queryParams?.params,
        list: chunk,
        headers: queryParams?.headers,
      };

      return queryParams?.batch
        ? queryParams.batch.addBatch<ExplorationItem[]>(config)
        : getResponse<
            ExplorationItem[],
            Partial<ExplorationItem> & { id: number }
          >(queryParams?.api ?? _client?.api, config);
    }),
  );
};

export const explorationItemCreateOne = (
  data: Partial<ExplorationItem>,
  queryParams?: QueryParams<Partial<ExplorationItem>>,
): Promise<ExplorationItem> => {
  const config: QueryParams<Partial<ExplorationItem>> = {
    method: 'post',
    url: queryParams?.url ?? ExplorationItemRoute(),
    params: queryParams?.params,
    data,
    headers: queryParams?.headers,
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<ExplorationItem>(config)
    : getResponse<ExplorationItem, Partial<ExplorationItem>>(
        queryParams?.api ?? _client?.api,
        config,
      );
};

export const explorationItemCreateMany = (
  data: Partial<ExplorationItem>[],
  queryParams?: QueryParamsWithList<Partial<ExplorationItem>>,
): Promise<ExplorationItem[][]> => {
  const chunks = chunkArray(data, 1000);
  return Promise.all(
    chunks.map((chunk) => {
      const config: QueryParamsWithList<Partial<ExplorationItem>> = {
        method: 'post',
        url: queryParams?.url ?? ExplorationItemRoute(),
        params: queryParams?.params,
        list: chunk,
        headers: queryParams?.headers,
      };

      return queryParams?.batch
        ? queryParams.batch.addBatch<ExplorationItem[]>(config)
        : getResponse<ExplorationItem[], Partial<ExplorationItem>>(
            queryParams?.api ?? _client?.api,
            config,
          );
    }),
  );
};
