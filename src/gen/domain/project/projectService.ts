/**
 * Copyright (C) 2021 BitModern, Inc - All Rights Reserved
 */

import { _client } from '../../../ClientSdk';
import { getResponse } from '../../actions/getResponse';
import { QueryParams } from '../../actions/QueryParams';
import { MessageResponse } from '../../actions/MessageResponse';
import { ResourceList } from '../../models/ResourceList';
import { ProjectRoute } from '../../routes/Routes';
import { Project } from './Project';
import { ProjectApi } from './ProjectApi';

export const projectGetMany = (
  queryParams?: QueryParams<Project>
): Promise<ResourceList<ProjectApi>> => {
  const config: QueryParams<Project> = {
    method: 'get',
    url: queryParams?.url || ProjectRoute(),
    params: queryParams?.params,
    cancelToken: queryParams?.cancelToken,
    headers: queryParams?.headers,
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<ResourceList<ProjectApi>>(config)
    : getResponse<ResourceList<ProjectApi>, Project>(
        queryParams?.api || _client?.api,
        config
      );
};

export const projectGetOne = (
  id: number,
  queryParams?: QueryParams<Project>
): Promise<ProjectApi> => {
  const config: QueryParams<Project> = {
    method: 'get',
    url: `${queryParams?.url || ProjectRoute()}/${id}`,
    params: queryParams?.params,
    cancelToken: queryParams?.cancelToken,
    headers: queryParams?.headers,
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<ProjectApi>(config)
    : getResponse<ProjectApi, Project>(
        queryParams?.api || _client?.api,
        config
      );
};

export const projectDeleteOne = (
  id: number,
  queryParams?: QueryParams<Project>
): Promise<MessageResponse> => {
  const config: QueryParams<Project> = {
    method: 'delete',
    url: `${queryParams?.url || ProjectRoute()}/${id}`,
    params: queryParams?.params,
    headers: queryParams?.headers,
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<MessageResponse>(config)
    : getResponse<MessageResponse, Project>(
        queryParams?.api || _client?.api,
        config
      );
};

export const projectUpdateOne = (
  id: number,
  data: Partial<Project>,
  queryParams?: QueryParams<Project>
): Promise<Project> => {
  const config: QueryParams<Project> = {
    method: 'put',
    url: `${queryParams?.url || ProjectRoute()}/${id}`,
    params: queryParams?.params,
    data,
    headers: queryParams?.headers,
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<Project>(config)
    : getResponse<Project>(queryParams?.api || _client?.api, config);
};

export const projectCreateOne = (
  data: Partial<Project>,
  queryParams?: QueryParams<Project>
): Promise<Project> => {
  const config: QueryParams<Project> = {
    method: 'post',
    url: queryParams?.url || ProjectRoute(),
    params: queryParams?.params,
    data,
    headers: queryParams?.headers,
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<Project>(config)
    : getResponse<Project>(queryParams?.api || _client?.api, config);
};
