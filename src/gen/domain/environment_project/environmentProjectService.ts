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
import type { EnvironmentProject } from './EnvironmentProject';
import type { EnvironmentProjectApi } from './EnvironmentProjectApi';

export const environmentProjectDetach = (
  data: Partial<EnvironmentProject>,
  queryParams?: QueryParams<EnvironmentProject>,
): Promise<MessageResponse> => {
  if (data.id === undefined) {
    return Promise.reject(new Error('Must supply id'));
  }
  const config: QueryParams<EnvironmentProject> = {
    method: 'delete',
    url: `/environment_project/${data.id}`,
    params: queryParams?.params,
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<MessageResponse>(config)
    : getResponse<MessageResponse, EnvironmentProject>(
        queryParams?.api ?? _client?.api,
        config,
      );
};

export const environmentProjectUpdateOne = (
  id: number,
  data: Partial<EnvironmentProject>,
  queryParams?: QueryParams<EnvironmentProject>,
): Promise<EnvironmentProject> => {
  const config: QueryParams<EnvironmentProject> = {
    method: 'put',
    url: `/environment_project/${id}`,
    params: queryParams?.params,
    data,
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<EnvironmentProject>(config)
    : getResponse<EnvironmentProject>(queryParams?.api ?? _client?.api, config);
};

export const environmentProjectCreateOne = (
  data: Partial<EnvironmentProject>,
  queryParams?: QueryParams<EnvironmentProject>,
): Promise<EnvironmentProject> => {
  const config: QueryParams<EnvironmentProject> = {
    method: 'post',
    url: queryParams?.url ?? `/environment_project`,
    params: queryParams?.params,
    data,
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<EnvironmentProject>(config)
    : getResponse<EnvironmentProject>(queryParams?.api ?? _client?.api, config);
};

export const environmentProjectCreateMany = (
  data: Partial<EnvironmentProject>[],
  queryParams?: QueryParamsWithList<EnvironmentProject>,
): Promise<EnvironmentProject[]> => {
  const config: QueryParamsWithList<EnvironmentProject> = {
    method: 'post',
    url: queryParams?.url ?? `/environment_project`,
    params: queryParams?.params,
    list: data,
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<EnvironmentProject[]>(config)
    : getResponse<EnvironmentProject[], EnvironmentProject>(
        queryParams?.api ?? _client?.api,
        config,
      );
};

export const environmentProjectGetMany = (
  queryParams?: QueryParams<EnvironmentProject>,
): Promise<ResourceList<EnvironmentProjectApi>> => {
  const config: QueryParams<EnvironmentProject> = {
    method: 'get',
    url: queryParams?.url ?? `/environment_project`,
    params: queryParams?.params,
    cancelToken: queryParams?.cancelToken,
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<ResourceList<EnvironmentProjectApi>>(config)
    : getResponse<ResourceList<EnvironmentProjectApi>, EnvironmentProject>(
        queryParams?.api ?? _client?.api,
        config,
      );
};

export const environmentProjectGetOne = (
  id: number,
  queryParams?: QueryParams<EnvironmentProject>,
): Promise<EnvironmentProjectApi> => {
  const config: QueryParams<EnvironmentProject> = {
    method: 'get',
    url: `${queryParams?.url ?? `/environment_project/${id}`}`,
    params: queryParams?.params,
    cancelToken: queryParams?.cancelToken,
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<EnvironmentProjectApi>(config)
    : getResponse<EnvironmentProjectApi, EnvironmentProject>(
        queryParams?.api ?? _client?.api,
        config,
      );
};
