/**
 * Copyright (C) 2021 BitModern, Inc - All Rights Reserved
 */

import { _client } from '../../../ClientSdk';
import { getResponse } from '../../actions/getResponse';
import { chunkArray } from '../../actions/chunkArray';
import type {
  QueryParams,
  QueryParamsWithList,
} from '../../actions/QueryParams';
import type { MessageResponse } from '../../actions/MessageResponse';
import type { ResourceList } from '../../models/ResourceList';
import type { ProjectStatus } from './ProjectStatus';
import type { ProjectStatusApi } from './ProjectStatusApi';

export const projectStatusDetach = (
  data: Partial<ProjectStatus>,
  queryParams?: QueryParams<ProjectStatus>,
): Promise<MessageResponse> => {
  if (data.id === undefined) {
    return Promise.reject(new Error('Must supply id'));
  }
  const config: QueryParams<ProjectStatus> = {
    method: 'delete',
    url: `/project_status/${data.id}`,
    params: queryParams?.params,
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<MessageResponse>(config)
    : getResponse<MessageResponse, ProjectStatus>(
        queryParams?.api ?? _client?.api,
        config,
      );
};

export const projectStatusDeleteMany = (
  data: Partial<ProjectStatus>[],
  queryParams?: QueryParamsWithList<ProjectStatus>,
): Promise<{ count: number }[]> => {
  const chunks = chunkArray(data, 1000);
  return Promise.all(
    chunks.map((chunk) => {
      const config: QueryParamsWithList<ProjectStatus> = {
        method: 'post',
        url: `/project_status/delete`,
        params: queryParams?.params,
        list: chunk,
        headers: queryParams?.headers,
      };

      return queryParams?.batch
        ? queryParams.batch.addBatch<{ count: number }>(config)
        : getResponse<{ count: number }, ProjectStatus>(
            queryParams?.api ?? _client?.api,
            config,
          );
    }),
  );
};

export const projectStatusUpdateOne = (
  id: number,
  data: Partial<ProjectStatus>,
  queryParams?: QueryParams<ProjectStatus>,
): Promise<ProjectStatus> => {
  const config: QueryParams<ProjectStatus> = {
    method: 'put',
    url: `/project_status/${id}`,
    params: queryParams?.params,
    data,
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<ProjectStatus>(config)
    : getResponse<ProjectStatus>(queryParams?.api ?? _client?.api, config);
};

export const projectStatusCreateOne = (
  data: Partial<ProjectStatus>,
  queryParams?: QueryParams<ProjectStatus>,
): Promise<ProjectStatus> => {
  const config: QueryParams<ProjectStatus> = {
    method: 'post',
    url: queryParams?.url ?? `/project_status`,
    params: queryParams?.params,
    data,
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<ProjectStatus>(config)
    : getResponse<ProjectStatus>(queryParams?.api ?? _client?.api, config);
};

export const projectStatusCreateMany = (
  data: Partial<ProjectStatus>[],
  queryParams?: QueryParamsWithList<ProjectStatus>,
): Promise<ProjectStatus[][]> => {
  const chunks = chunkArray(data, 1000);
  return Promise.all(
    chunks.map((chunk) => {
      const config: QueryParamsWithList<ProjectStatus> = {
        method: 'post',
        url: queryParams?.url ?? `/project_status`,
        params: queryParams?.params,
        list: chunk,
      };

      return queryParams?.batch
        ? queryParams.batch.addBatch<ProjectStatus[]>(config)
        : getResponse<ProjectStatus[], ProjectStatus>(
            queryParams?.api ?? _client?.api,
            config,
          );
    }),
  );
};

export const projectStatusGetMany = (
  queryParams?: QueryParams<ProjectStatus>,
): Promise<ResourceList<ProjectStatusApi>> => {
  const config: QueryParams<ProjectStatus> = {
    method: 'get',
    url: queryParams?.url ?? `/project_status`,
    params: queryParams?.params,
    cancelToken: queryParams?.cancelToken,
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<ResourceList<ProjectStatusApi>>(config)
    : getResponse<ResourceList<ProjectStatusApi>, ProjectStatus>(
        queryParams?.api ?? _client?.api,
        config,
      );
};

export const projectStatusGetOne = (
  id: number,
  queryParams?: QueryParams<ProjectStatus>,
): Promise<ProjectStatusApi> => {
  const config: QueryParams<ProjectStatus> = {
    method: 'get',
    url: `${queryParams?.url ?? `/project_status/${id}`}`,
    params: queryParams?.params,
    cancelToken: queryParams?.cancelToken,
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<ProjectStatusApi>(config)
    : getResponse<ProjectStatusApi, ProjectStatus>(
        queryParams?.api ?? _client?.api,
        config,
      );
};
