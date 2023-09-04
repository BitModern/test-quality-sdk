/**
 * Copyright (C) 2021 BitModern, Inc - All Rights Reserved
 */

import { _client } from '../../../ClientSdk';
import { getResponse } from '../../actions/getResponse';
import { QueryParams } from '../../actions/QueryParams';
import { MessageResponse } from '../../actions/MessageResponse';
import { ResourceList } from '../../models/ResourceList';
import { RequirementRoute } from '../../routes/Routes';
import { Requirement } from './Requirement';
import { RequirementApi } from './RequirementApi';

export const requirementGetMany = (
  queryParams?: QueryParams<Requirement>
): Promise<ResourceList<RequirementApi>> => {
  const config: QueryParams<Requirement> = {
    method: 'get',
    url: queryParams?.url || RequirementRoute(),
    params: queryParams?.params,
    cancelToken: queryParams?.cancelToken,
    headers: queryParams?.headers,
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<ResourceList<RequirementApi>>(config)
    : getResponse<ResourceList<RequirementApi>, Requirement>(
        queryParams?.api || _client?.api,
        config
      );
};

export const requirementGetOne = (
  id: number,
  queryParams?: QueryParams<Requirement>
): Promise<RequirementApi> => {
  const config: QueryParams<Requirement> = {
    method: 'get',
    url: `${queryParams?.url || RequirementRoute()}/${id}`,
    params: queryParams?.params,
    cancelToken: queryParams?.cancelToken,
    headers: queryParams?.headers,
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<RequirementApi>(config)
    : getResponse<RequirementApi, Requirement>(
        queryParams?.api || _client?.api,
        config
      );
};

export const requirementDeleteOne = (
  id: number,
  queryParams?: QueryParams<Requirement>
): Promise<MessageResponse> => {
  const config: QueryParams<Requirement> = {
    method: 'delete',
    url: `${queryParams?.url || RequirementRoute()}/${id}`,
    params: queryParams?.params,
    headers: queryParams?.headers,
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<MessageResponse>(config)
    : getResponse<MessageResponse, Requirement>(
        queryParams?.api || _client?.api,
        config
      );
};

export const requirementUpdateOne = (
  id: number,
  data: Partial<Requirement>,
  queryParams?: QueryParams<Requirement>
): Promise<Requirement> => {
  const config: QueryParams<Requirement> = {
    method: 'put',
    url: `${queryParams?.url || RequirementRoute()}/${id}`,
    params: queryParams?.params,
    data,
    headers: queryParams?.headers,
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<Requirement>(config)
    : getResponse<Requirement>(queryParams?.api || _client?.api, config);
};

export const requirementCreateOne = (
  data: Partial<Requirement>,
  queryParams?: QueryParams<Requirement>
): Promise<Requirement> => {
  const config: QueryParams<Requirement> = {
    method: 'post',
    url: queryParams?.url || RequirementRoute(),
    params: queryParams?.params,
    data,
    headers: queryParams?.headers,
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<Requirement>(config)
    : getResponse<Requirement>(queryParams?.api || _client?.api, config);
};
