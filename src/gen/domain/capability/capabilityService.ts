/**
 * Copyright (C) 2021 BitModern, Inc - All Rights Reserved
 */

import { _client } from '../../../ClientSdk';
import { getResponse } from '../../actions/getResponse';
import { QueryParams, QueryParamsWithList } from '../../actions/QueryParams';
import { MessageResponse } from '../../actions/MessageResponse';
import { ResourceList } from '../../models/ResourceList';
import { CapabilityRoute } from '../../routes/Routes';
import { Capability } from './Capability';
import { CapabilityApi } from './CapabilityApi';

export const capabilityGetMany = (
  queryParams?: QueryParams<Capability>
): Promise<ResourceList<CapabilityApi>> => {
  const config: QueryParams<Capability> = {
    method: 'get',
    url: queryParams?.url || CapabilityRoute(),
    params: queryParams?.params,
    cancelToken: queryParams?.cancelToken,
    headers: queryParams?.headers,
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<ResourceList<CapabilityApi>>(config)
    : getResponse<ResourceList<CapabilityApi>, Capability>(
        queryParams?.api || _client?.api,
        config
      );
};

export const capabilityGetOne = (
  id: number,
  queryParams?: QueryParams<Capability>
): Promise<CapabilityApi> => {
  const config: QueryParams<Capability> = {
    method: 'get',
    url: `${queryParams?.url || CapabilityRoute()}/${id}`,
    params: queryParams?.params,
    cancelToken: queryParams?.cancelToken,
    headers: queryParams?.headers,
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<CapabilityApi>(config)
    : getResponse<CapabilityApi, Capability>(
        queryParams?.api || _client?.api,
        config
      );
};

export const capabilityDeleteOne = (
  id: number,
  queryParams?: QueryParams<Capability>
): Promise<MessageResponse> => {
  const config: QueryParams<Capability> = {
    method: 'delete',
    url: `${queryParams?.url || CapabilityRoute()}/${id}`,
    params: queryParams?.params,
    headers: queryParams?.headers,
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<MessageResponse>(config)
    : getResponse<MessageResponse, Capability>(
        queryParams?.api || _client?.api,
        config
      );
};

export const capabilityUpdateOne = (
  id: number,
  data: Partial<Capability>,
  queryParams?: QueryParams<Capability>
): Promise<Capability> => {
  const config: QueryParams<Capability> = {
    method: 'put',
    url: `${queryParams?.url || CapabilityRoute()}/${id}`,
    params: queryParams?.params,
    data,
    headers: queryParams?.headers,
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<Capability>(config)
    : getResponse<Capability>(queryParams?.api || _client?.api, config);
};

export const capabilityCreateOne = (
  data: Partial<Capability>,
  queryParams?: QueryParams<Capability>
): Promise<Capability> => {
  const config: QueryParams<Capability> = {
    method: 'post',
    url: queryParams?.url || CapabilityRoute(),
    params: queryParams?.params,
    data,
    headers: queryParams?.headers,
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<Capability>(config)
    : getResponse<Capability>(queryParams?.api || _client?.api, config);
};

export const capabilityCreateMany = (
  data: Partial<Capability>[],
  queryParams?: QueryParamsWithList<Capability>
): Promise<Capability[]> => {
  const config: QueryParamsWithList<Capability> = {
    method: 'post',
    url: queryParams?.url || CapabilityRoute(),
    params: queryParams?.params,
    list: data,
    headers: queryParams?.headers,
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<Capability[]>(config)
    : getResponse<Capability[], Capability>(
        queryParams?.api || _client?.api,
        config
      );
};
