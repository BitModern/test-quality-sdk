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
import { ComponentRoute } from '../../routes/Routes';
import type { Component } from './Component';
import type { ComponentApi } from './ComponentApi';

export const componentGetMany = (
  queryParams?: QueryParams<Component>,
): Promise<ResourceList<ComponentApi>> => {
  const config: QueryParams<Component> = {
    method: 'get',
    url: queryParams?.url ?? ComponentRoute(),
    params: queryParams?.params,
    cancelToken: queryParams?.cancelToken,
    headers: queryParams?.headers,
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<ResourceList<ComponentApi>>(config)
    : getResponse<ResourceList<ComponentApi>, Component>(
        queryParams?.api ?? _client?.api,
        config,
      );
};

export const componentGetOne = (
  id: number,
  queryParams?: QueryParams<Component>,
): Promise<ComponentApi> => {
  const config: QueryParams<Component> = {
    method: 'get',
    url: `${queryParams?.url ?? ComponentRoute()}/${id}`,
    params: queryParams?.params,
    cancelToken: queryParams?.cancelToken,
    headers: queryParams?.headers,
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<ComponentApi>(config)
    : getResponse<ComponentApi, Component>(
        queryParams?.api ?? _client?.api,
        config,
      );
};

export const componentDeleteOne = (
  id: number,
  queryParams?: QueryParams<Component>,
): Promise<MessageResponse> => {
  const config: QueryParams<Component> = {
    method: 'delete',
    url: `${queryParams?.url ?? ComponentRoute()}/${id}`,
    params: queryParams?.params,
    headers: queryParams?.headers,
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<MessageResponse>(config)
    : getResponse<MessageResponse, Component>(
        queryParams?.api ?? _client?.api,
        config,
      );
};

export const componentDeleteMany = (
  data: Partial<Component>[],
  queryParams?: QueryParamsWithList<Component>,
): Promise<{ count: number }[]> => {
  const chunks = chunkArray(data, 1000);
  return Promise.all(
    chunks.map((chunk) => {
      const config: QueryParamsWithList<Component> = {
        method: 'post',
        url: queryParams?.url ?? ComponentRoute() + '/delete',
        params: queryParams?.params,
        list: chunk,
        headers: queryParams?.headers,
      };

      return queryParams?.batch
        ? queryParams.batch.addBatch<{ count: number }>(config)
        : getResponse<{ count: number }, Component>(
            queryParams?.api ?? _client?.api,
            config,
          );
    }),
  );
};

export const componentUpdateOne = (
  id: number,
  data: Partial<Component>,
  queryParams?: QueryParams<Component>,
): Promise<Component> => {
  const config: QueryParams<Component> = {
    method: 'put',
    url: `${queryParams?.url ?? ComponentRoute()}/${id}`,
    params: queryParams?.params,
    data,
    headers: queryParams?.headers,
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<Component>(config)
    : getResponse<Component>(queryParams?.api ?? _client?.api, config);
};

export const componentCreateOne = (
  data: Partial<Component>,
  queryParams?: QueryParams<Component>,
): Promise<Component> => {
  const config: QueryParams<Component> = {
    method: 'post',
    url: queryParams?.url ?? ComponentRoute(),
    params: queryParams?.params,
    data,
    headers: queryParams?.headers,
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<Component>(config)
    : getResponse<Component>(queryParams?.api ?? _client?.api, config);
};

export const componentCreateMany = (
  data: Partial<Component>[],
  queryParams?: QueryParamsWithList<Component>,
): Promise<Component[][]> => {
  const chunks = chunkArray(data, 1000);
  return Promise.all(
    chunks.map((chunk) => {
      const config: QueryParamsWithList<Component> = {
        method: 'post',
        url: queryParams?.url ?? ComponentRoute(),
        params: queryParams?.params,
        list: chunk,
        headers: queryParams?.headers,
      };

      return queryParams?.batch
        ? queryParams.batch.addBatch<Component[]>(config)
        : getResponse<Component[], Component>(
            queryParams?.api ?? _client?.api,
            config,
          );
    }),
  );
};
