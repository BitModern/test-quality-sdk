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
import { ProjectRoute } from '../../routes/Routes';
import type { Project } from './Project';
import type { ProjectApi } from './ProjectApi';

export const projectGetMany = (
  queryParams?: QueryParams<Project>,
): Promise<ResourceList<ProjectApi>> => {
  const config: QueryParams<Project> = {
    method: 'get',
    url: queryParams?.url ?? ProjectRoute(),
    params: queryParams?.params,
    cancelToken: queryParams?.cancelToken,
    headers: queryParams?.headers,
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<ResourceList<ProjectApi>>(config)
    : getResponse<ResourceList<ProjectApi>, Project>(
        queryParams?.api ?? _client?.api,
        config,
      );
};

export const projectGetOne = (
  id: number,
  queryParams?: QueryParams<Project>,
): Promise<ProjectApi> => {
  const config: QueryParams<Project> = {
    method: 'get',
    url: `${queryParams?.url ?? ProjectRoute()}/${id}`,
    params: queryParams?.params,
    cancelToken: queryParams?.cancelToken,
    headers: queryParams?.headers,
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<ProjectApi>(config)
    : getResponse<ProjectApi, Project>(
        queryParams?.api ?? _client?.api,
        config,
      );
};

export const projectDeleteOne = (
  id: number,
  queryParams?: QueryParams<Project>,
): Promise<MessageResponse> => {
  const config: QueryParams<Project> = {
    method: 'delete',
    url: `${queryParams?.url ?? ProjectRoute()}/${id}`,
    params: queryParams?.params,
    headers: queryParams?.headers,
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<MessageResponse>(config)
    : getResponse<MessageResponse, Project>(
        queryParams?.api ?? _client?.api,
        config,
      );
};

export const projectDeleteMany = (
  data: (Partial<Project> & { id: number })[],
  queryParams?: QueryParamsWithList<Project>,
): Promise<{ count: number }[]> => {
  const chunks = chunkArray(data, 1000);
  return Promise.all(
    chunks.map((chunk) => {
      const config: QueryParamsWithList<Project> = {
        method: 'post',
        url: queryParams?.url ?? ProjectRoute() + '/delete',
        params: queryParams?.params,
        list: chunk,
        headers: queryParams?.headers,
      };

      return queryParams?.batch
        ? queryParams.batch.addBatch<{ count: number }>(config)
        : getResponse<{ count: number }, Project>(
            queryParams?.api ?? _client?.api,
            config,
          );
    }),
  );
};

export const projectUpdateOne = (
  id: number,
  data: Partial<Project>,
  queryParams?: QueryParams<Project>,
): Promise<Project> => {
  const config: QueryParams<Project> = {
    method: 'put',
    url: `${queryParams?.url ?? ProjectRoute()}/${id}`,
    params: queryParams?.params,
    data,
    headers: queryParams?.headers,
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<Project>(config)
    : getResponse<Project>(queryParams?.api ?? _client?.api, config);
};

export const projectUpdateMany = (
  data: (Partial<Project> & { id: number })[],
  queryParams?: QueryParamsWithList<Project>,
): Promise<Project[][]> => {
  const chunks = chunkArray(data, 1000);
  return Promise.all(
    chunks.map((chunk) => {
      const config: QueryParamsWithList<Project> = {
        method: 'post',
        url: queryParams?.url ?? ProjectRoute(),
        params: queryParams?.params,
        list: chunk,
        headers: queryParams?.headers,
      };

      return queryParams?.batch
        ? queryParams.batch.addBatch<Project[]>(config)
        : getResponse<Project[], Project>(
            queryParams?.api ?? _client?.api,
            config,
          );
    }),
  );
};

export const projectCreateOne = (
  data: Partial<Project>,
  queryParams?: QueryParams<Project>,
): Promise<Project> => {
  const config: QueryParams<Project> = {
    method: 'post',
    url: queryParams?.url ?? ProjectRoute(),
    params: queryParams?.params,
    data,
    headers: queryParams?.headers,
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<Project>(config)
    : getResponse<Project>(queryParams?.api ?? _client?.api, config);
};

export const projectCreateMany = (
  data: Partial<Project>[],
  queryParams?: QueryParamsWithList<Project>,
): Promise<Project[][]> => {
  const chunks = chunkArray(data, 1000);
  return Promise.all(
    chunks.map((chunk) => {
      const config: QueryParamsWithList<Project> = {
        method: 'post',
        url: queryParams?.url ?? ProjectRoute(),
        params: queryParams?.params,
        list: chunk,
        headers: queryParams?.headers,
      };

      return queryParams?.batch
        ? queryParams.batch.addBatch<Project[]>(config)
        : getResponse<Project[], Project>(
            queryParams?.api ?? _client?.api,
            config,
          );
    }),
  );
};
