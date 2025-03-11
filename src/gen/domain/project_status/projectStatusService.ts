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
  queryParams?: QueryParams<Partial<ProjectStatus>>,
): Promise<MessageResponse> => {
  if (data.id === undefined) {
    return Promise.reject(new Error('Must supply id'));
  }
  const config: QueryParams<Partial<ProjectStatus>> = {
    method: 'delete',
    url: `/project_status/${data.id}`,
    params: queryParams?.params,
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<MessageResponse>(config)
    : getResponse<MessageResponse, Partial<ProjectStatus>>(
        queryParams?.api ?? _client?.api,
        config,
      );
};

export const projectStatusDeleteMany = (
  data: (Partial<ProjectStatus> & { id: number })[],
  queryParams?: QueryParamsWithList<Partial<ProjectStatus & { id: number }>>,
): Promise<{ count: number }[]> => {
  const chunks = chunkArray(data, 1000);
  return Promise.all(
    chunks.map((chunk) => {
      const config: QueryParamsWithList<
        Partial<ProjectStatus> & { id: number }
      > = {
        method: 'post',
        url: `/project_status/delete`,
        params: queryParams?.params,
        list: chunk,
        headers: queryParams?.headers,
      };

      return queryParams?.batch
        ? queryParams.batch.addBatch<{ count: number }>(config)
        : getResponse<
            { count: number },
            Partial<ProjectStatus> & { id: number }
          >(queryParams?.api ?? _client?.api, config);
    }),
  );
};

export const projectStatusUpdateOne = (
  id: number,
  data: Partial<ProjectStatus>,
  queryParams?: QueryParams<Partial<ProjectStatus>>,
): Promise<ProjectStatus> => {
  const config: QueryParams<Partial<ProjectStatus>> = {
    method: 'put',
    url: `/project_status/${id}`,
    params: queryParams?.params,
    data,
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<ProjectStatus>(config)
    : getResponse<ProjectStatus, Partial<ProjectStatus>>(
        queryParams?.api ?? _client?.api,
        config,
      );
};

export const projectStatusUpdateMany = (
  data: (Partial<ProjectStatus> & { id: number })[],
  queryParams?: QueryParamsWithList<Partial<ProjectStatus> & { id: number }>,
): Promise<ProjectStatus[][]> => {
  const chunks = chunkArray(data, 1000);
  return Promise.all(
    chunks.map((chunk) => {
      const config: QueryParamsWithList<
        Partial<ProjectStatus> & { id: number }
      > = {
        method: 'post',
        url: queryParams?.url ?? `/project_status`,
        params: queryParams?.params,
        list: chunk,
      };

      return queryParams?.batch
        ? queryParams.batch.addBatch<ProjectStatus[]>(config)
        : getResponse<ProjectStatus[], Partial<ProjectStatus> & { id: number }>(
            queryParams?.api ?? _client?.api,
            config,
          );
    }),
  );
};

export const projectStatusCreateOne = (
  data: Partial<ProjectStatus>,
  queryParams?: QueryParams<Partial<ProjectStatus>>,
): Promise<ProjectStatus> => {
  const config: QueryParams<Partial<ProjectStatus>> = {
    method: 'post',
    url: queryParams?.url ?? `/project_status`,
    params: queryParams?.params,
    data,
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<ProjectStatus>(config)
    : getResponse<ProjectStatus, Partial<ProjectStatus>>(
        queryParams?.api ?? _client?.api,
        config,
      );
};

export const projectStatusCreateMany = (
  data: Partial<ProjectStatus>[],
  queryParams?: QueryParamsWithList<Partial<ProjectStatus>>,
): Promise<ProjectStatus[][]> => {
  const chunks = chunkArray(data, 1000);
  return Promise.all(
    chunks.map((chunk) => {
      const config: QueryParamsWithList<Partial<ProjectStatus>> = {
        method: 'post',
        url: queryParams?.url ?? `/project_status`,
        params: queryParams?.params,
        list: chunk,
      };

      return queryParams?.batch
        ? queryParams.batch.addBatch<ProjectStatus[]>(config)
        : getResponse<ProjectStatus[], Partial<ProjectStatus>>(
            queryParams?.api ?? _client?.api,
            config,
          );
    }),
  );
};

export const projectStatusGetMany = (
  queryParams?: QueryParams<Partial<ProjectStatus>>,
): Promise<ResourceList<ProjectStatusApi>> => {
  const config: QueryParams<Partial<ProjectStatus>> = {
    method: 'get',
    url: queryParams?.url ?? `/project_status`,
    params: queryParams?.params,
    cancelToken: queryParams?.cancelToken,
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<ResourceList<ProjectStatusApi>>(config)
    : getResponse<ResourceList<ProjectStatusApi>, Partial<ProjectStatus>>(
        queryParams?.api ?? _client?.api,
        config,
      );
};

export const projectStatusGetOne = (
  id: number,
  queryParams?: QueryParams<Partial<ProjectStatus>>,
): Promise<ProjectStatusApi> => {
  const config: QueryParams<Partial<ProjectStatus>> = {
    method: 'get',
    url: `${queryParams?.url ?? `/project_status/${id}`}`,
    params: queryParams?.params,
    cancelToken: queryParams?.cancelToken,
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<ProjectStatusApi>(config)
    : getResponse<ProjectStatusApi, Partial<ProjectStatus>>(
        queryParams?.api ?? _client?.api,
        config,
      );
};
