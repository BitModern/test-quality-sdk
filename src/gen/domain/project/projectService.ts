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
  queryParams?: QueryParams<Partial<Project>>,
): Promise<ResourceList<ProjectApi>> => {
  const config: QueryParams<Partial<Project>> = {
    method: 'get',
    url: queryParams?.url ?? ProjectRoute(),
    params: queryParams?.params,
    cancelToken: queryParams?.cancelToken,
    headers: queryParams?.headers,
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<ResourceList<ProjectApi>>(config)
    : getResponse<ResourceList<ProjectApi>, Partial<Project>>(
        queryParams?.api ?? _client?.api,
        config,
      );
};

export const projectGetOne = (
  id: number,
  queryParams?: QueryParams<Partial<Project>>,
): Promise<ProjectApi> => {
  const config: QueryParams<Partial<Project>> = {
    method: 'get',
    url: `${queryParams?.url ?? ProjectRoute()}/${id}`,
    params: queryParams?.params,
    cancelToken: queryParams?.cancelToken,
    headers: queryParams?.headers,
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<ProjectApi>(config)
    : getResponse<ProjectApi, Partial<Project>>(
        queryParams?.api ?? _client?.api,
        config,
      );
};

export const projectDeleteOne = (
  id: number,
  queryParams?: QueryParams<Partial<Project>>,
): Promise<MessageResponse> => {
  const config: QueryParams<Partial<Project>> = {
    method: 'delete',
    url: `${queryParams?.url ?? ProjectRoute()}/${id}`,
    params: queryParams?.params,
    headers: queryParams?.headers,
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<MessageResponse>(config)
    : getResponse<MessageResponse, Partial<Project>>(
        queryParams?.api ?? _client?.api,
        config,
      );
};

export const projectDeleteMany = (
  data: (Partial<Project> & { id: number })[],
  queryParams?: QueryParamsWithList<Partial<Project> & { id: number }>,
): Promise<{ count: number }[]> => {
  const chunks = chunkArray(data, 1000);
  return Promise.all(
    chunks.map((chunk) => {
      const config: QueryParamsWithList<Partial<Project> & { id: number }> = {
        method: 'post',
        url: queryParams?.url ?? ProjectRoute() + '/delete',
        params: queryParams?.params,
        list: chunk,
        headers: queryParams?.headers,
      };

      return queryParams?.batch
        ? queryParams.batch.addBatch<{ count: number }>(config)
        : getResponse<{ count: number }, Partial<Project> & { id: number }>(
            queryParams?.api ?? _client?.api,
            config,
          );
    }),
  );
};

export const projectUpdateOne = (
  id: number,
  data: Partial<Project>,
  queryParams?: QueryParams<Partial<Project>>,
): Promise<Project> => {
  const config: QueryParams<Partial<Project>> = {
    method: 'put',
    url: `${queryParams?.url ?? ProjectRoute()}/${id}`,
    params: queryParams?.params,
    data,
    headers: queryParams?.headers,
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<Project>(config)
    : getResponse<Project, Partial<Project>>(
        queryParams?.api ?? _client?.api,
        config,
      );
};

export const projectUpdateMany = (
  data: (Partial<Project> & { id: number })[],
  queryParams?: QueryParamsWithList<Partial<Project> & { id: number }>,
): Promise<Project[][]> => {
  const chunks = chunkArray(data, 1000);
  return Promise.all(
    chunks.map((chunk) => {
      const config: QueryParamsWithList<Partial<Project> & { id: number }> = {
        method: 'post',
        url: queryParams?.url ?? ProjectRoute(),
        params: queryParams?.params,
        list: chunk,
        headers: queryParams?.headers,
      };

      return queryParams?.batch
        ? queryParams.batch.addBatch<Project[]>(config)
        : getResponse<Project[], Partial<Project> & { id: number }>(
            queryParams?.api ?? _client?.api,
            config,
          );
    }),
  );
};

export const projectCreateOne = (
  data: Partial<Project>,
  queryParams?: QueryParams<Partial<Project>>,
): Promise<Project> => {
  const config: QueryParams<Partial<Project>> = {
    method: 'post',
    url: queryParams?.url ?? ProjectRoute(),
    params: queryParams?.params,
    data,
    headers: queryParams?.headers,
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<Project>(config)
    : getResponse<Project, Partial<Project>>(
        queryParams?.api ?? _client?.api,
        config,
      );
};

export const projectCreateMany = (
  data: Partial<Project>[],
  queryParams?: QueryParamsWithList<Partial<Project>>,
): Promise<Project[][]> => {
  const chunks = chunkArray(data, 1000);
  return Promise.all(
    chunks.map((chunk) => {
      const config: QueryParamsWithList<Partial<Project>> = {
        method: 'post',
        url: queryParams?.url ?? ProjectRoute(),
        params: queryParams?.params,
        list: chunk,
        headers: queryParams?.headers,
      };

      return queryParams?.batch
        ? queryParams.batch.addBatch<Project[]>(config)
        : getResponse<Project[], Partial<Project>>(
            queryParams?.api ?? _client?.api,
            config,
          );
    }),
  );
};
