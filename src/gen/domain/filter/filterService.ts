/**
 * Copyright (C) 2021 BitModern, Inc - All Rights Reserved
 */

import { _client } from '../../../ClientSdk';
import { getResponse } from '../../actions/getResponse';
import { QueryParams, QueryParamsWithList } from '../../actions/QueryParams';
import { MessageResponse } from '../../actions/MessageResponse';
import { ResourceList } from '../../models/ResourceList';
import { FilterRoute } from '../../routes/Routes';
import { Filter } from './Filter';
import { FilterApi } from './FilterApi';

export const filterGetMany = (
  queryParams?: QueryParams<Filter>,
): Promise<ResourceList<FilterApi>> => {
  const config: QueryParams<Filter> = {
    method: 'get',
    url: queryParams?.url || FilterRoute(),
    params: queryParams?.params,
    cancelToken: queryParams?.cancelToken,
    headers: queryParams?.headers,
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<ResourceList<FilterApi>>(config)
    : getResponse<ResourceList<FilterApi>, Filter>(
        queryParams?.api || _client?.api,
        config,
      );
};

export const filterGetOne = (
  id: number,
  queryParams?: QueryParams<Filter>,
): Promise<FilterApi> => {
  const config: QueryParams<Filter> = {
    method: 'get',
    url: `${queryParams?.url || FilterRoute()}/${id}`,
    params: queryParams?.params,
    cancelToken: queryParams?.cancelToken,
    headers: queryParams?.headers,
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<FilterApi>(config)
    : getResponse<FilterApi, Filter>(queryParams?.api || _client?.api, config);
};

export const filterDeleteOne = (
  id: number,
  queryParams?: QueryParams<Filter>,
): Promise<MessageResponse> => {
  const config: QueryParams<Filter> = {
    method: 'delete',
    url: `${queryParams?.url || FilterRoute()}/${id}`,
    params: queryParams?.params,
    headers: queryParams?.headers,
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<MessageResponse>(config)
    : getResponse<MessageResponse, Filter>(
        queryParams?.api || _client?.api,
        config,
      );
};

export const filterUpdateOne = (
  id: number,
  data: Partial<Filter>,
  queryParams?: QueryParams<Filter>,
): Promise<Filter> => {
  const config: QueryParams<Filter> = {
    method: 'put',
    url: `${queryParams?.url || FilterRoute()}/${id}`,
    params: queryParams?.params,
    data,
    headers: queryParams?.headers,
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<Filter>(config)
    : getResponse<Filter>(queryParams?.api || _client?.api, config);
};

export const filterCreateOne = (
  data: Partial<Filter>,
  queryParams?: QueryParams<Filter>,
): Promise<Filter> => {
  const config: QueryParams<Filter> = {
    method: 'post',
    url: queryParams?.url || FilterRoute(),
    params: queryParams?.params,
    data,
    headers: queryParams?.headers,
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<Filter>(config)
    : getResponse<Filter>(queryParams?.api || _client?.api, config);
};

export const filterCreateMany = (
  data: Partial<Filter>[],
  queryParams?: QueryParamsWithList<Filter>,
): Promise<Filter[]> => {
  const config: QueryParamsWithList<Filter> = {
    method: 'post',
    url: queryParams?.url || FilterRoute(),
    params: queryParams?.params,
    list: data,
    headers: queryParams?.headers,
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<Filter[]>(config)
    : getResponse<Filter[], Filter>(queryParams?.api || _client?.api, config);
};
