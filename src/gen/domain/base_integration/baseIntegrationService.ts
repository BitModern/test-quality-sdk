/**
 * Copyright (C) 2021 BitModern, Inc - All Rights Reserved
 */

import { _client } from '../../../ClientSdk';
import { getResponse } from '../../actions/getResponse';
import { QueryParams, QueryParamsWithList } from '../../actions/QueryParams';
import { MessageResponse } from '../../actions/MessageResponse';
import { ResourceList } from '../../models/ResourceList';
import { BaseIntegrationRoute } from '../../routes/Routes';
import { BaseIntegration } from './BaseIntegration';
import { BaseIntegrationApi } from './BaseIntegrationApi';

export const baseIntegrationGetMany = (
  queryParams?: QueryParams<BaseIntegration>,
): Promise<ResourceList<BaseIntegrationApi>> => {
  const config: QueryParams<BaseIntegration> = {
    method: 'get',
    url: queryParams?.url || BaseIntegrationRoute(),
    params: queryParams?.params,
    cancelToken: queryParams?.cancelToken,
    headers: queryParams?.headers,
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<ResourceList<BaseIntegrationApi>>(config)
    : getResponse<ResourceList<BaseIntegrationApi>, BaseIntegration>(
        queryParams?.api || _client?.api,
        config,
      );
};

export const baseIntegrationGetOne = (
  id: number,
  queryParams?: QueryParams<BaseIntegration>,
): Promise<BaseIntegrationApi> => {
  const config: QueryParams<BaseIntegration> = {
    method: 'get',
    url: `${queryParams?.url || BaseIntegrationRoute()}/${id}`,
    params: queryParams?.params,
    cancelToken: queryParams?.cancelToken,
    headers: queryParams?.headers,
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<BaseIntegrationApi>(config)
    : getResponse<BaseIntegrationApi, BaseIntegration>(
        queryParams?.api || _client?.api,
        config,
      );
};

export const baseIntegrationDeleteOne = (
  id: number,
  queryParams?: QueryParams<BaseIntegration>,
): Promise<MessageResponse> => {
  const config: QueryParams<BaseIntegration> = {
    method: 'delete',
    url: `${queryParams?.url || BaseIntegrationRoute()}/${id}`,
    params: queryParams?.params,
    headers: queryParams?.headers,
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<MessageResponse>(config)
    : getResponse<MessageResponse, BaseIntegration>(
        queryParams?.api || _client?.api,
        config,
      );
};

export const baseIntegrationUpdateOne = (
  id: number,
  data: Partial<BaseIntegration>,
  queryParams?: QueryParams<BaseIntegration>,
): Promise<BaseIntegration> => {
  const config: QueryParams<BaseIntegration> = {
    method: 'put',
    url: `${queryParams?.url || BaseIntegrationRoute()}/${id}`,
    params: queryParams?.params,
    data,
    headers: queryParams?.headers,
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<BaseIntegration>(config)
    : getResponse<BaseIntegration>(queryParams?.api || _client?.api, config);
};

export const baseIntegrationCreateOne = (
  data: Partial<BaseIntegration>,
  queryParams?: QueryParams<BaseIntegration>,
): Promise<BaseIntegration> => {
  const config: QueryParams<BaseIntegration> = {
    method: 'post',
    url: queryParams?.url || BaseIntegrationRoute(),
    params: queryParams?.params,
    data,
    headers: queryParams?.headers,
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<BaseIntegration>(config)
    : getResponse<BaseIntegration>(queryParams?.api || _client?.api, config);
};

export const baseIntegrationCreateMany = (
  data: Partial<BaseIntegration>[],
  queryParams?: QueryParamsWithList<BaseIntegration>,
): Promise<BaseIntegration[]> => {
  const config: QueryParamsWithList<BaseIntegration> = {
    method: 'post',
    url: queryParams?.url || BaseIntegrationRoute(),
    params: queryParams?.params,
    list: data,
    headers: queryParams?.headers,
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<BaseIntegration[]>(config)
    : getResponse<BaseIntegration[], BaseIntegration>(
        queryParams?.api || _client?.api,
        config,
      );
};
