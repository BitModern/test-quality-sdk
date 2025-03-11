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
import type { EnvironmentProject } from './EnvironmentProject';
import type { EnvironmentProjectApi } from './EnvironmentProjectApi';

export const environmentProjectDetach = (
  data: Partial<EnvironmentProject>,
  queryParams?: QueryParams<Partial<EnvironmentProject>>,
): Promise<MessageResponse> => {
  if (data.id === undefined) {
    return Promise.reject(new Error('Must supply id'));
  }
  const config: QueryParams<Partial<EnvironmentProject>> = {
    method: 'delete',
    url: `/environment_project/${data.id}`,
    params: queryParams?.params,
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<MessageResponse>(config)
    : getResponse<MessageResponse, Partial<EnvironmentProject>>(
        queryParams?.api ?? _client?.api,
        config,
      );
};

export const environmentProjectDeleteMany = (
  data: (Partial<EnvironmentProject> & { id: number })[],
  queryParams?: QueryParamsWithList<
    Partial<EnvironmentProject & { id: number }>
  >,
): Promise<{ count: number }[]> => {
  const chunks = chunkArray(data, 1000);
  return Promise.all(
    chunks.map((chunk) => {
      const config: QueryParamsWithList<
        Partial<EnvironmentProject> & { id: number }
      > = {
        method: 'post',
        url: `/environment_project/delete`,
        params: queryParams?.params,
        list: chunk,
        headers: queryParams?.headers,
      };

      return queryParams?.batch
        ? queryParams.batch.addBatch<{ count: number }>(config)
        : getResponse<
            { count: number },
            Partial<EnvironmentProject> & { id: number }
          >(queryParams?.api ?? _client?.api, config);
    }),
  );
};

export const environmentProjectUpdateOne = (
  id: number,
  data: Partial<EnvironmentProject>,
  queryParams?: QueryParams<Partial<EnvironmentProject>>,
): Promise<EnvironmentProject> => {
  const config: QueryParams<Partial<EnvironmentProject>> = {
    method: 'put',
    url: `/environment_project/${id}`,
    params: queryParams?.params,
    data,
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<EnvironmentProject>(config)
    : getResponse<EnvironmentProject, Partial<EnvironmentProject>>(
        queryParams?.api ?? _client?.api,
        config,
      );
};

export const environmentProjectUpdateMany = (
  data: (Partial<EnvironmentProject> & { id: number })[],
  queryParams?: QueryParamsWithList<
    Partial<EnvironmentProject> & { id: number }
  >,
): Promise<EnvironmentProject[][]> => {
  const chunks = chunkArray(data, 1000);
  return Promise.all(
    chunks.map((chunk) => {
      const config: QueryParamsWithList<
        Partial<EnvironmentProject> & { id: number }
      > = {
        method: 'post',
        url: queryParams?.url ?? `/environment_project`,
        params: queryParams?.params,
        list: chunk,
      };

      return queryParams?.batch
        ? queryParams.batch.addBatch<EnvironmentProject[]>(config)
        : getResponse<
            EnvironmentProject[],
            Partial<EnvironmentProject> & { id: number }
          >(queryParams?.api ?? _client?.api, config);
    }),
  );
};

export const environmentProjectCreateOne = (
  data: Partial<EnvironmentProject>,
  queryParams?: QueryParams<Partial<EnvironmentProject>>,
): Promise<EnvironmentProject> => {
  const config: QueryParams<Partial<EnvironmentProject>> = {
    method: 'post',
    url: queryParams?.url ?? `/environment_project`,
    params: queryParams?.params,
    data,
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<EnvironmentProject>(config)
    : getResponse<EnvironmentProject, Partial<EnvironmentProject>>(
        queryParams?.api ?? _client?.api,
        config,
      );
};

export const environmentProjectCreateMany = (
  data: Partial<EnvironmentProject>[],
  queryParams?: QueryParamsWithList<Partial<EnvironmentProject>>,
): Promise<EnvironmentProject[][]> => {
  const chunks = chunkArray(data, 1000);
  return Promise.all(
    chunks.map((chunk) => {
      const config: QueryParamsWithList<Partial<EnvironmentProject>> = {
        method: 'post',
        url: queryParams?.url ?? `/environment_project`,
        params: queryParams?.params,
        list: chunk,
      };

      return queryParams?.batch
        ? queryParams.batch.addBatch<EnvironmentProject[]>(config)
        : getResponse<EnvironmentProject[], Partial<EnvironmentProject>>(
            queryParams?.api ?? _client?.api,
            config,
          );
    }),
  );
};

export const environmentProjectGetMany = (
  queryParams?: QueryParams<Partial<EnvironmentProject>>,
): Promise<ResourceList<EnvironmentProjectApi>> => {
  const config: QueryParams<Partial<EnvironmentProject>> = {
    method: 'get',
    url: queryParams?.url ?? `/environment_project`,
    params: queryParams?.params,
    cancelToken: queryParams?.cancelToken,
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<ResourceList<EnvironmentProjectApi>>(config)
    : getResponse<
        ResourceList<EnvironmentProjectApi>,
        Partial<EnvironmentProject>
      >(queryParams?.api ?? _client?.api, config);
};

export const environmentProjectGetOne = (
  id: number,
  queryParams?: QueryParams<Partial<EnvironmentProject>>,
): Promise<EnvironmentProjectApi> => {
  const config: QueryParams<Partial<EnvironmentProject>> = {
    method: 'get',
    url: `${queryParams?.url ?? `/environment_project/${id}`}`,
    params: queryParams?.params,
    cancelToken: queryParams?.cancelToken,
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<EnvironmentProjectApi>(config)
    : getResponse<EnvironmentProjectApi, Partial<EnvironmentProject>>(
        queryParams?.api ?? _client?.api,
        config,
      );
};
