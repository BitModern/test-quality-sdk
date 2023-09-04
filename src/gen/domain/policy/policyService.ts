/**
 * Copyright (C) 2021 BitModern, Inc - All Rights Reserved
 */

import { _client } from '../../../ClientSdk';
import { getResponse } from '../../actions/getResponse';
import { QueryParams } from '../../actions/QueryParams';
import { MessageResponse } from '../../actions/MessageResponse';
import { ResourceList } from '../../models/ResourceList';
import { PolicyRoute } from '../../routes/Routes';
import { Policy } from './Policy';
import { PolicyApi } from './PolicyApi';

export const policyGetMany = (
  queryParams?: QueryParams<Policy>
): Promise<ResourceList<PolicyApi>> => {
  const config: QueryParams<Policy> = {
    method: 'get',
    url: queryParams?.url || PolicyRoute(),
    params: queryParams?.params,
    cancelToken: queryParams?.cancelToken,
    headers: queryParams?.headers,
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<ResourceList<PolicyApi>>(config)
    : getResponse<ResourceList<PolicyApi>, Policy>(
        queryParams?.api || _client?.api,
        config
      );
};

export const policyGetOne = (
  id: number,
  queryParams?: QueryParams<Policy>
): Promise<PolicyApi> => {
  const config: QueryParams<Policy> = {
    method: 'get',
    url: `${queryParams?.url || PolicyRoute()}/${id}`,
    params: queryParams?.params,
    cancelToken: queryParams?.cancelToken,
    headers: queryParams?.headers,
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<PolicyApi>(config)
    : getResponse<PolicyApi, Policy>(queryParams?.api || _client?.api, config);
};

export const policyDeleteOne = (
  id: number,
  queryParams?: QueryParams<Policy>
): Promise<MessageResponse> => {
  const config: QueryParams<Policy> = {
    method: 'delete',
    url: `${queryParams?.url || PolicyRoute()}/${id}`,
    params: queryParams?.params,
    headers: queryParams?.headers,
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<MessageResponse>(config)
    : getResponse<MessageResponse, Policy>(
        queryParams?.api || _client?.api,
        config
      );
};

export const policyUpdateOne = (
  id: number,
  data: Partial<Policy>,
  queryParams?: QueryParams<Policy>
): Promise<Policy> => {
  const config: QueryParams<Policy> = {
    method: 'put',
    url: `${queryParams?.url || PolicyRoute()}/${id}`,
    params: queryParams?.params,
    data,
    headers: queryParams?.headers,
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<Policy>(config)
    : getResponse<Policy>(queryParams?.api || _client?.api, config);
};

export const policyCreateOne = (
  data: Partial<Policy>,
  queryParams?: QueryParams<Policy>
): Promise<Policy> => {
  const config: QueryParams<Policy> = {
    method: 'post',
    url: queryParams?.url || PolicyRoute(),
    params: queryParams?.params,
    data,
    headers: queryParams?.headers,
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<Policy>(config)
    : getResponse<Policy>(queryParams?.api || _client?.api, config);
};
