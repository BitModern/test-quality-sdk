/**
 * Copyright (C) 2021 BitModern, Inc - All Rights Reserved
 */

import { _client } from '../../../ClientSdk';
import { getResponse } from '../../actions/getResponse';
import { QueryParams, QueryParamsWithList } from '../../actions/QueryParams';
import { MessageResponse } from '../../actions/MessageResponse';
import { ResourceList } from '../../models/ResourceList';
import { LabelAssignedRoute } from '../../routes/Routes';
import { LabelAssigned } from './LabelAssigned';
import { LabelAssignedApi } from './LabelAssignedApi';

export const labelAssignedGetMany = (
  queryParams?: QueryParams<LabelAssigned>,
): Promise<ResourceList<LabelAssignedApi>> => {
  const config: QueryParams<LabelAssigned> = {
    method: 'get',
    url: queryParams?.url || LabelAssignedRoute(),
    params: queryParams?.params,
    cancelToken: queryParams?.cancelToken,
    headers: queryParams?.headers,
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<ResourceList<LabelAssignedApi>>(config)
    : getResponse<ResourceList<LabelAssignedApi>, LabelAssigned>(
        queryParams?.api || _client?.api,
        config,
      );
};

export const labelAssignedGetOne = (
  id: number,
  queryParams?: QueryParams<LabelAssigned>,
): Promise<LabelAssignedApi> => {
  const config: QueryParams<LabelAssigned> = {
    method: 'get',
    url: `${queryParams?.url || LabelAssignedRoute()}/${id}`,
    params: queryParams?.params,
    cancelToken: queryParams?.cancelToken,
    headers: queryParams?.headers,
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<LabelAssignedApi>(config)
    : getResponse<LabelAssignedApi, LabelAssigned>(
        queryParams?.api || _client?.api,
        config,
      );
};

export const labelAssignedDeleteOne = (
  id: number,
  queryParams?: QueryParams<LabelAssigned>,
): Promise<MessageResponse> => {
  const config: QueryParams<LabelAssigned> = {
    method: 'delete',
    url: `${queryParams?.url || LabelAssignedRoute()}/${id}`,
    params: queryParams?.params,
    headers: queryParams?.headers,
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<MessageResponse>(config)
    : getResponse<MessageResponse, LabelAssigned>(
        queryParams?.api || _client?.api,
        config,
      );
};

export const labelAssignedUpdateOne = (
  id: number,
  data: Partial<LabelAssigned>,
  queryParams?: QueryParams<LabelAssigned>,
): Promise<LabelAssigned> => {
  const config: QueryParams<LabelAssigned> = {
    method: 'put',
    url: `${queryParams?.url || LabelAssignedRoute()}/${id}`,
    params: queryParams?.params,
    data,
    headers: queryParams?.headers,
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<LabelAssigned>(config)
    : getResponse<LabelAssigned>(queryParams?.api || _client?.api, config);
};

export const labelAssignedCreateOne = (
  data: Partial<LabelAssigned>,
  queryParams?: QueryParams<LabelAssigned>,
): Promise<LabelAssigned> => {
  const config: QueryParams<LabelAssigned> = {
    method: 'post',
    url: queryParams?.url || LabelAssignedRoute(),
    params: queryParams?.params,
    data,
    headers: queryParams?.headers,
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<LabelAssigned>(config)
    : getResponse<LabelAssigned>(queryParams?.api || _client?.api, config);
};

export const labelAssignedCreateMany = (
  data: Partial<LabelAssigned>[],
  queryParams?: QueryParamsWithList<LabelAssigned>,
): Promise<LabelAssigned[]> => {
  const config: QueryParamsWithList<LabelAssigned> = {
    method: 'post',
    url: queryParams?.url || LabelAssignedRoute(),
    params: queryParams?.params,
    list: data,
    headers: queryParams?.headers,
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<LabelAssigned[]>(config)
    : getResponse<LabelAssigned[], LabelAssigned>(
        queryParams?.api || _client?.api,
        config,
      );
};
