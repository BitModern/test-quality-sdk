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
import { ResourceRoute } from '../../routes/Routes';
import type { Resource } from './Resource';
import type { ResourceApi } from './ResourceApi';

export const resourceGetMany = (
  queryParams?: QueryParams<Resource>,
): Promise<ResourceList<ResourceApi>> => {
  const config: QueryParams<Resource> = {
    method: 'get',
    url: queryParams?.url ?? ResourceRoute(),
    params: queryParams?.params,
    cancelToken: queryParams?.cancelToken,
    headers: queryParams?.headers,
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<ResourceList<ResourceApi>>(config)
    : getResponse<ResourceList<ResourceApi>, Resource>(
        queryParams?.api ?? _client?.api,
        config,
      );
};

export const resourceGetOne = (
  id: number,
  queryParams?: QueryParams<Resource>,
): Promise<ResourceApi> => {
  const config: QueryParams<Resource> = {
    method: 'get',
    url: `${queryParams?.url ?? ResourceRoute()}/${id}`,
    params: queryParams?.params,
    cancelToken: queryParams?.cancelToken,
    headers: queryParams?.headers,
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<ResourceApi>(config)
    : getResponse<ResourceApi, Resource>(
        queryParams?.api ?? _client?.api,
        config,
      );
};

export const resourceDeleteOne = (
  id: number,
  queryParams?: QueryParams<Resource>,
): Promise<MessageResponse> => {
  const config: QueryParams<Resource> = {
    method: 'delete',
    url: `${queryParams?.url ?? ResourceRoute()}/${id}`,
    params: queryParams?.params,
    headers: queryParams?.headers,
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<MessageResponse>(config)
    : getResponse<MessageResponse, Resource>(
        queryParams?.api ?? _client?.api,
        config,
      );
};

export const resourceDeleteMany = (
  data: (Partial<Resource> & { id: number })[],
  queryParams?: QueryParamsWithList<Resource>,
): Promise<{ count: number }[]> => {
  const chunks = chunkArray(data, 1000);
  return Promise.all(
    chunks.map((chunk) => {
      const config: QueryParamsWithList<Resource> = {
        method: 'post',
        url: queryParams?.url ?? ResourceRoute() + '/delete',
        params: queryParams?.params,
        list: chunk,
        headers: queryParams?.headers,
      };

      return queryParams?.batch
        ? queryParams.batch.addBatch<{ count: number }>(config)
        : getResponse<{ count: number }, Resource>(
            queryParams?.api ?? _client?.api,
            config,
          );
    }),
  );
};

export const resourceUpdateOne = (
  id: number,
  data: Partial<Resource>,
  queryParams?: QueryParams<Resource>,
): Promise<Resource> => {
  const config: QueryParams<Resource> = {
    method: 'put',
    url: `${queryParams?.url ?? ResourceRoute()}/${id}`,
    params: queryParams?.params,
    data,
    headers: queryParams?.headers,
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<Resource>(config)
    : getResponse<Resource>(queryParams?.api ?? _client?.api, config);
};

export const resourceUpdateMany = (
  data: (Partial<Resource> & { id: number })[],
  queryParams?: QueryParamsWithList<Resource>,
): Promise<Resource[][]> => {
  const chunks = chunkArray(data, 1000);
  return Promise.all(
    chunks.map((chunk) => {
      const config: QueryParamsWithList<Resource> = {
        method: 'post',
        url: queryParams?.url ?? ResourceRoute(),
        params: queryParams?.params,
        list: chunk,
        headers: queryParams?.headers,
      };

      return queryParams?.batch
        ? queryParams.batch.addBatch<Resource[]>(config)
        : getResponse<Resource[], Resource>(
            queryParams?.api ?? _client?.api,
            config,
          );
    }),
  );
};

export const resourceCreateOne = (
  data: Partial<Resource>,
  queryParams?: QueryParams<Resource>,
): Promise<Resource> => {
  const config: QueryParams<Resource> = {
    method: 'post',
    url: queryParams?.url ?? ResourceRoute(),
    params: queryParams?.params,
    data,
    headers: queryParams?.headers,
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<Resource>(config)
    : getResponse<Resource>(queryParams?.api ?? _client?.api, config);
};

export const resourceCreateMany = (
  data: Partial<Resource>[],
  queryParams?: QueryParamsWithList<Resource>,
): Promise<Resource[][]> => {
  const chunks = chunkArray(data, 1000);
  return Promise.all(
    chunks.map((chunk) => {
      const config: QueryParamsWithList<Resource> = {
        method: 'post',
        url: queryParams?.url ?? ResourceRoute(),
        params: queryParams?.params,
        list: chunk,
        headers: queryParams?.headers,
      };

      return queryParams?.batch
        ? queryParams.batch.addBatch<Resource[]>(config)
        : getResponse<Resource[], Resource>(
            queryParams?.api ?? _client?.api,
            config,
          );
    }),
  );
};
