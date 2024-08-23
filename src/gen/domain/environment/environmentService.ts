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
import { EnvironmentRoute } from '../../routes/Routes';
import type { Environment } from './Environment';
import type { EnvironmentApi } from './EnvironmentApi';

export const environmentGetMany = (
  queryParams?: QueryParams<Environment>,
): Promise<ResourceList<EnvironmentApi>> => {
  const config: QueryParams<Environment> = {
    method: 'get',
    url: queryParams?.url ?? EnvironmentRoute(),
    params: queryParams?.params,
    cancelToken: queryParams?.cancelToken,
    headers: queryParams?.headers,
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<ResourceList<EnvironmentApi>>(config)
    : getResponse<ResourceList<EnvironmentApi>, Environment>(
        queryParams?.api ?? _client?.api,
        config,
      );
};

export const environmentGetOne = (
  id: number,
  queryParams?: QueryParams<Environment>,
): Promise<EnvironmentApi> => {
  const config: QueryParams<Environment> = {
    method: 'get',
    url: `${queryParams?.url ?? EnvironmentRoute()}/${id}`,
    params: queryParams?.params,
    cancelToken: queryParams?.cancelToken,
    headers: queryParams?.headers,
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<EnvironmentApi>(config)
    : getResponse<EnvironmentApi, Environment>(
        queryParams?.api ?? _client?.api,
        config,
      );
};

export const environmentDeleteOne = (
  id: number,
  queryParams?: QueryParams<Environment>,
): Promise<MessageResponse> => {
  const config: QueryParams<Environment> = {
    method: 'delete',
    url: `${queryParams?.url ?? EnvironmentRoute()}/${id}`,
    params: queryParams?.params,
    headers: queryParams?.headers,
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<MessageResponse>(config)
    : getResponse<MessageResponse, Environment>(
        queryParams?.api ?? _client?.api,
        config,
      );
};

export const environmentUpdateOne = (
  id: number,
  data: Partial<Environment>,
  queryParams?: QueryParams<Environment>,
): Promise<Environment> => {
  const config: QueryParams<Environment> = {
    method: 'put',
    url: `${queryParams?.url ?? EnvironmentRoute()}/${id}`,
    params: queryParams?.params,
    data,
    headers: queryParams?.headers,
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<Environment>(config)
    : getResponse<Environment>(queryParams?.api ?? _client?.api, config);
};

export const environmentCreateOne = (
  data: Partial<Environment>,
  queryParams?: QueryParams<Environment>,
): Promise<Environment> => {
  const config: QueryParams<Environment> = {
    method: 'post',
    url: queryParams?.url ?? EnvironmentRoute(),
    params: queryParams?.params,
    data,
    headers: queryParams?.headers,
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<Environment>(config)
    : getResponse<Environment>(queryParams?.api ?? _client?.api, config);
};

export const environmentCreateMany = (
  data: Partial<Environment>[],
  queryParams?: QueryParamsWithList<Environment>,
): Promise<Environment[]> => {
  const config: QueryParamsWithList<Environment> = {
    method: 'post',
    url: queryParams?.url ?? EnvironmentRoute(),
    params: queryParams?.params,
    list: data,
    headers: queryParams?.headers,
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<Environment[]>(config)
    : getResponse<Environment[], Environment>(
        queryParams?.api ?? _client?.api,
        config,
      );
};
