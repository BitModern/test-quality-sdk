/**
 * Copyright (C) 2021 BitModern, Inc - All Rights Reserved
 */

import { _client } from '../../../ClientSdk';
import { getResponse } from '../../actions/getResponse';
import { QueryParams, QueryParamsWithList } from '../../actions/QueryParams';
import { MessageResponse } from '../../actions/MessageResponse';
import { ResourceList } from '../../models/ResourceList';
import { IntegrationProject } from './IntegrationProject';
import { IntegrationProjectApi } from './IntegrationProjectApi';

export const integrationProjectDetach = (
  data: Partial<IntegrationProject>,
  queryParams?: QueryParams<IntegrationProject>
): Promise<MessageResponse> => {
  if (data.id === undefined) {
    return Promise.reject(new Error('Must supply id'));
  }
  const config: QueryParams<IntegrationProject> = {
    method: 'delete',
    url: `/integration_project/${data.id}`,
    params: queryParams?.params,
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<MessageResponse>(config)
    : getResponse<MessageResponse, IntegrationProject>(
        queryParams?.api || _client?.api,
        config
      );
};

export const integrationProjectUpdateOne = (
  id: number,
  data: Partial<IntegrationProject>,
  queryParams?: QueryParams<IntegrationProject>
): Promise<IntegrationProject> => {
  const config: QueryParams<IntegrationProject> = {
    method: 'put',
    url: `/integration_project/${id}`,
    params: queryParams?.params,
    data,
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<IntegrationProject>(config)
    : getResponse<IntegrationProject>(queryParams?.api || _client?.api, config);
};

export const integrationProjectCreateOne = (
  data: Partial<IntegrationProject>,
  queryParams?: QueryParams<IntegrationProject>
): Promise<IntegrationProject> => {
  const config: QueryParams<IntegrationProject> = {
    method: 'post',
    url: queryParams?.url || `/integration_project`,
    params: queryParams?.params,
    data,
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<IntegrationProject>(config)
    : getResponse<IntegrationProject>(queryParams?.api || _client?.api, config);
};

export const integrationProjectCreateMany = (
  data: Partial<IntegrationProject>[],
  queryParams?: QueryParamsWithList<IntegrationProject>
): Promise<IntegrationProject[]> => {
  const config: QueryParamsWithList<IntegrationProject> = {
    method: 'post',
    url: queryParams?.url || `/integration_project`,
    params: queryParams?.params,
    list: data,
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<IntegrationProject[]>(config)
    : getResponse<IntegrationProject[], IntegrationProject>(
        queryParams?.api || _client?.api,
        config
      );
};

export const integrationProjectGetMany = (
  queryParams?: QueryParams<IntegrationProject>
): Promise<ResourceList<IntegrationProjectApi>> => {
  const config: QueryParams<IntegrationProject> = {
    method: 'get',
    url: queryParams?.url || `/integration_project`,
    params: queryParams?.params,
    cancelToken: queryParams?.cancelToken,
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<ResourceList<IntegrationProjectApi>>(config)
    : getResponse<ResourceList<IntegrationProjectApi>, IntegrationProject>(
        queryParams?.api || _client?.api,
        config
      );
};

export const integrationProjectGetOne = (
  id: number,
  queryParams?: QueryParams<IntegrationProject>
): Promise<IntegrationProjectApi> => {
  const config: QueryParams<IntegrationProject> = {
    method: 'get',
    url: `${queryParams?.url || `/integration_project/${id}`}`,
    params: queryParams?.params,
    cancelToken: queryParams?.cancelToken,
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<IntegrationProjectApi>(config)
    : getResponse<IntegrationProjectApi, IntegrationProject>(
        queryParams?.api || _client?.api,
        config
      );
};
