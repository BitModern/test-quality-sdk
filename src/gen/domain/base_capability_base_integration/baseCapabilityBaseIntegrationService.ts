/**
 * Copyright (C) 2021 BitModern, Inc - All Rights Reserved
 */

import { _client } from '../../../ClientSdk';
import { getResponse } from '../../actions/getResponse';
import { QueryParams } from '../../actions/QueryParams';
import { MessageResponse } from '../../actions/MessageResponse';
import { ResourceList } from '../../models/ResourceList';
import { BaseCapabilityBaseIntegration } from './BaseCapabilityBaseIntegration';
import { BaseCapabilityBaseIntegrationApi } from './BaseCapabilityBaseIntegrationApi';

export const baseCapabilityBaseIntegrationDetach = (
  data: Partial<BaseCapabilityBaseIntegration>,
  queryParams?: QueryParams<BaseCapabilityBaseIntegration>
): Promise<MessageResponse> => {
  if (data.id === undefined) {
    return Promise.reject(new Error('Must supply id'));
  }
  const config: QueryParams<BaseCapabilityBaseIntegration> = {
    method: 'delete',
    url: `/base_capability_base_integration/${data.id}`,
    params: queryParams?.params,
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<MessageResponse>(config)
    : getResponse<MessageResponse, BaseCapabilityBaseIntegration>(
        queryParams?.api || _client?.api,
        config
      );
};

export const baseCapabilityBaseIntegrationUpdateOne = (
  id: number,
  data: Partial<BaseCapabilityBaseIntegration>,
  queryParams?: QueryParams<BaseCapabilityBaseIntegration>
): Promise<BaseCapabilityBaseIntegration> => {
  const config: QueryParams<BaseCapabilityBaseIntegration> = {
    method: 'put',
    url: `/base_capability_base_integration/${id}`,
    params: queryParams?.params,
    data,
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<BaseCapabilityBaseIntegration>(config)
    : getResponse<BaseCapabilityBaseIntegration>(
        queryParams?.api || _client?.api,
        config
      );
};

export const baseCapabilityBaseIntegrationCreateOne = (
  data: Partial<BaseCapabilityBaseIntegration>,
  queryParams?: QueryParams<BaseCapabilityBaseIntegration>
): Promise<BaseCapabilityBaseIntegration> => {
  const config: QueryParams<BaseCapabilityBaseIntegration> = {
    method: 'post',
    url: queryParams?.url || `/base_capability_base_integration`,
    params: queryParams?.params,
    data,
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<BaseCapabilityBaseIntegration>(config)
    : getResponse<BaseCapabilityBaseIntegration>(
        queryParams?.api || _client?.api,
        config
      );
};

export const baseCapabilityBaseIntegrationGetMany = (
  queryParams?: QueryParams<BaseCapabilityBaseIntegration>
): Promise<ResourceList<BaseCapabilityBaseIntegrationApi>> => {
  const config: QueryParams<BaseCapabilityBaseIntegration> = {
    method: 'get',
    url: queryParams?.url || `/base_capability_base_integration`,
    params: queryParams?.params,
    cancelToken: queryParams?.cancelToken,
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<
        ResourceList<BaseCapabilityBaseIntegrationApi>
      >(config)
    : getResponse<
        ResourceList<BaseCapabilityBaseIntegrationApi>,
        BaseCapabilityBaseIntegration
      >(queryParams?.api || _client?.api, config);
};

export const baseCapabilityBaseIntegrationGetOne = (
  id: number,
  queryParams?: QueryParams<BaseCapabilityBaseIntegration>
): Promise<BaseCapabilityBaseIntegrationApi> => {
  const config: QueryParams<BaseCapabilityBaseIntegration> = {
    method: 'get',
    url: `${queryParams?.url || `/base_capability_base_integration/${id}`}`,
    params: queryParams?.params,
    cancelToken: queryParams?.cancelToken,
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<BaseCapabilityBaseIntegrationApi>(config)
    : getResponse<
        BaseCapabilityBaseIntegrationApi,
        BaseCapabilityBaseIntegration
      >(queryParams?.api || _client?.api, config);
};
