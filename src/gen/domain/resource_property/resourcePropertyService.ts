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
import { ResourcePropertyRoute } from '../../routes/Routes';
import type { ResourceProperty } from './ResourceProperty';
import type { ResourcePropertyApi } from './ResourcePropertyApi';

export const resourcePropertyGetMany = (
  queryParams?: QueryParams<ResourceProperty>,
): Promise<ResourceList<ResourcePropertyApi>> => {
  const config: QueryParams<ResourceProperty> = {
    method: 'get',
    url: queryParams?.url ?? ResourcePropertyRoute(),
    params: queryParams?.params,
    cancelToken: queryParams?.cancelToken,
    headers: queryParams?.headers,
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<ResourceList<ResourcePropertyApi>>(config)
    : getResponse<ResourceList<ResourcePropertyApi>, ResourceProperty>(
        queryParams?.api ?? _client?.api,
        config,
      );
};

export const resourcePropertyGetOne = (
  id: number,
  queryParams?: QueryParams<ResourceProperty>,
): Promise<ResourcePropertyApi> => {
  const config: QueryParams<ResourceProperty> = {
    method: 'get',
    url: `${queryParams?.url ?? ResourcePropertyRoute()}/${id}`,
    params: queryParams?.params,
    cancelToken: queryParams?.cancelToken,
    headers: queryParams?.headers,
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<ResourcePropertyApi>(config)
    : getResponse<ResourcePropertyApi, ResourceProperty>(
        queryParams?.api ?? _client?.api,
        config,
      );
};

export const resourcePropertyDeleteOne = (
  id: number,
  queryParams?: QueryParams<ResourceProperty>,
): Promise<MessageResponse> => {
  const config: QueryParams<ResourceProperty> = {
    method: 'delete',
    url: `${queryParams?.url ?? ResourcePropertyRoute()}/${id}`,
    params: queryParams?.params,
    headers: queryParams?.headers,
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<MessageResponse>(config)
    : getResponse<MessageResponse, ResourceProperty>(
        queryParams?.api ?? _client?.api,
        config,
      );
};

export const resourcePropertyUpdateOne = (
  id: number,
  data: Partial<ResourceProperty>,
  queryParams?: QueryParams<ResourceProperty>,
): Promise<ResourceProperty> => {
  const config: QueryParams<ResourceProperty> = {
    method: 'put',
    url: `${queryParams?.url ?? ResourcePropertyRoute()}/${id}`,
    params: queryParams?.params,
    data,
    headers: queryParams?.headers,
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<ResourceProperty>(config)
    : getResponse<ResourceProperty>(queryParams?.api ?? _client?.api, config);
};

export const resourcePropertyCreateOne = (
  data: Partial<ResourceProperty>,
  queryParams?: QueryParams<ResourceProperty>,
): Promise<ResourceProperty> => {
  const config: QueryParams<ResourceProperty> = {
    method: 'post',
    url: queryParams?.url ?? ResourcePropertyRoute(),
    params: queryParams?.params,
    data,
    headers: queryParams?.headers,
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<ResourceProperty>(config)
    : getResponse<ResourceProperty>(queryParams?.api ?? _client?.api, config);
};

export const resourcePropertyCreateMany = (
  data: Partial<ResourceProperty>[],
  queryParams?: QueryParamsWithList<ResourceProperty>,
): Promise<ResourceProperty[]> => {
  const config: QueryParamsWithList<ResourceProperty> = {
    method: 'post',
    url: queryParams?.url ?? ResourcePropertyRoute(),
    params: queryParams?.params,
    list: data,
    headers: queryParams?.headers,
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<ResourceProperty[]>(config)
    : getResponse<ResourceProperty[], ResourceProperty>(
        queryParams?.api ?? _client?.api,
        config,
      );
};
