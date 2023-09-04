/**
 * Copyright (C) 2021 BitModern, Inc - All Rights Reserved
 */

import { _client } from '../../../ClientSdk';
import { getResponse } from '../../actions/getResponse';
import { QueryParams } from '../../actions/QueryParams';
import { MessageResponse } from '../../actions/MessageResponse';
import { ResourceList } from '../../models/ResourceList';
import { BaseCapabilityRoute } from '../../routes/Routes';
import { BaseCapability } from './BaseCapability';
import { BaseCapabilityApi } from './BaseCapabilityApi';

export const baseCapabilityGetMany = (
  queryParams?: QueryParams<BaseCapability>
): Promise<ResourceList<BaseCapabilityApi>> => {
  const config: QueryParams<BaseCapability> = {
    method: 'get',
    url: queryParams?.url || BaseCapabilityRoute(),
    params: queryParams?.params,
    cancelToken: queryParams?.cancelToken,
    headers: queryParams?.headers,
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<ResourceList<BaseCapabilityApi>>(config)
    : getResponse<ResourceList<BaseCapabilityApi>, BaseCapability>(
        queryParams?.api || _client?.api,
        config
      );
};

export const baseCapabilityGetOne = (
  id: number,
  queryParams?: QueryParams<BaseCapability>
): Promise<BaseCapabilityApi> => {
  const config: QueryParams<BaseCapability> = {
    method: 'get',
    url: `${queryParams?.url || BaseCapabilityRoute()}/${id}`,
    params: queryParams?.params,
    cancelToken: queryParams?.cancelToken,
    headers: queryParams?.headers,
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<BaseCapabilityApi>(config)
    : getResponse<BaseCapabilityApi, BaseCapability>(
        queryParams?.api || _client?.api,
        config
      );
};

export const baseCapabilityDeleteOne = (
  id: number,
  queryParams?: QueryParams<BaseCapability>
): Promise<MessageResponse> => {
  const config: QueryParams<BaseCapability> = {
    method: 'delete',
    url: `${queryParams?.url || BaseCapabilityRoute()}/${id}`,
    params: queryParams?.params,
    headers: queryParams?.headers,
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<MessageResponse>(config)
    : getResponse<MessageResponse, BaseCapability>(
        queryParams?.api || _client?.api,
        config
      );
};

export const baseCapabilityUpdateOne = (
  id: number,
  data: Partial<BaseCapability>,
  queryParams?: QueryParams<BaseCapability>
): Promise<BaseCapability> => {
  const config: QueryParams<BaseCapability> = {
    method: 'put',
    url: `${queryParams?.url || BaseCapabilityRoute()}/${id}`,
    params: queryParams?.params,
    data,
    headers: queryParams?.headers,
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<BaseCapability>(config)
    : getResponse<BaseCapability>(queryParams?.api || _client?.api, config);
};

export const baseCapabilityCreateOne = (
  data: Partial<BaseCapability>,
  queryParams?: QueryParams<BaseCapability>
): Promise<BaseCapability> => {
  const config: QueryParams<BaseCapability> = {
    method: 'post',
    url: queryParams?.url || BaseCapabilityRoute(),
    params: queryParams?.params,
    data,
    headers: queryParams?.headers,
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<BaseCapability>(config)
    : getResponse<BaseCapability>(queryParams?.api || _client?.api, config);
};
