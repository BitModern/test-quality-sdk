/**
 * Copyright (C) 2021 BitModern, Inc - All Rights Reserved
 */

import { _client } from '../../../ClientSdk';
import { getResponse } from '../../actions/getResponse';
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
): Promise<Component[]> => {
  const config: QueryParamsWithList<Component> = {
    method: 'post',
    url: queryParams?.url ?? ComponentRoute(),
    params: queryParams?.params,
    list: data,
    headers: queryParams?.headers,
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<Component[]>(config)
    : getResponse<Component[], Component>(
        queryParams?.api ?? _client?.api,
        config,
      );
};
