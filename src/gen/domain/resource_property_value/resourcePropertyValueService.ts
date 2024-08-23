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
import { ResourcePropertyValueRoute } from '../../routes/Routes';
import type { ResourcePropertyValue } from './ResourcePropertyValue';
import type { ResourcePropertyValueApi } from './ResourcePropertyValueApi';

export const resourcePropertyValueGetMany = (
  queryParams?: QueryParams<ResourcePropertyValue>,
): Promise<ResourceList<ResourcePropertyValueApi>> => {
  const config: QueryParams<ResourcePropertyValue> = {
    method: 'get',
    url: queryParams?.url ?? ResourcePropertyValueRoute(),
    params: queryParams?.params,
    cancelToken: queryParams?.cancelToken,
    headers: queryParams?.headers,
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<ResourceList<ResourcePropertyValueApi>>(config)
    : getResponse<
        ResourceList<ResourcePropertyValueApi>,
        ResourcePropertyValue
      >(queryParams?.api ?? _client?.api, config);
};

export const resourcePropertyValueGetOne = (
  id: number,
  queryParams?: QueryParams<ResourcePropertyValue>,
): Promise<ResourcePropertyValueApi> => {
  const config: QueryParams<ResourcePropertyValue> = {
    method: 'get',
    url: `${queryParams?.url ?? ResourcePropertyValueRoute()}/${id}`,
    params: queryParams?.params,
    cancelToken: queryParams?.cancelToken,
    headers: queryParams?.headers,
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<ResourcePropertyValueApi>(config)
    : getResponse<ResourcePropertyValueApi, ResourcePropertyValue>(
        queryParams?.api ?? _client?.api,
        config,
      );
};

export const resourcePropertyValueDeleteOne = (
  id: number,
  queryParams?: QueryParams<ResourcePropertyValue>,
): Promise<MessageResponse> => {
  const config: QueryParams<ResourcePropertyValue> = {
    method: 'delete',
    url: `${queryParams?.url ?? ResourcePropertyValueRoute()}/${id}`,
    params: queryParams?.params,
    headers: queryParams?.headers,
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<MessageResponse>(config)
    : getResponse<MessageResponse, ResourcePropertyValue>(
        queryParams?.api ?? _client?.api,
        config,
      );
};

export const resourcePropertyValueUpdateOne = (
  id: number,
  data: Partial<ResourcePropertyValue>,
  queryParams?: QueryParams<ResourcePropertyValue>,
): Promise<ResourcePropertyValue> => {
  const config: QueryParams<ResourcePropertyValue> = {
    method: 'put',
    url: `${queryParams?.url ?? ResourcePropertyValueRoute()}/${id}`,
    params: queryParams?.params,
    data,
    headers: queryParams?.headers,
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<ResourcePropertyValue>(config)
    : getResponse<ResourcePropertyValue>(
        queryParams?.api ?? _client?.api,
        config,
      );
};

export const resourcePropertyValueCreateOne = (
  data: Partial<ResourcePropertyValue>,
  queryParams?: QueryParams<ResourcePropertyValue>,
): Promise<ResourcePropertyValue> => {
  const config: QueryParams<ResourcePropertyValue> = {
    method: 'post',
    url: queryParams?.url ?? ResourcePropertyValueRoute(),
    params: queryParams?.params,
    data,
    headers: queryParams?.headers,
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<ResourcePropertyValue>(config)
    : getResponse<ResourcePropertyValue>(
        queryParams?.api ?? _client?.api,
        config,
      );
};

export const resourcePropertyValueCreateMany = (
  data: Partial<ResourcePropertyValue>[],
  queryParams?: QueryParamsWithList<ResourcePropertyValue>,
): Promise<ResourcePropertyValue[]> => {
  const config: QueryParamsWithList<ResourcePropertyValue> = {
    method: 'post',
    url: queryParams?.url ?? ResourcePropertyValueRoute(),
    params: queryParams?.params,
    list: data,
    headers: queryParams?.headers,
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<ResourcePropertyValue[]>(config)
    : getResponse<ResourcePropertyValue[], ResourcePropertyValue>(
        queryParams?.api ?? _client?.api,
        config,
      );
};
