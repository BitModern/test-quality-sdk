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
import type { EnvironmentExploration } from './EnvironmentExploration';
import type { EnvironmentExplorationApi } from './EnvironmentExplorationApi';

export const environmentExplorationDetach = (
  data: Partial<EnvironmentExploration>,
  queryParams?: QueryParams<EnvironmentExploration>,
): Promise<MessageResponse> => {
  if (data.id === undefined) {
    return Promise.reject(new Error('Must supply id'));
  }
  const config: QueryParams<EnvironmentExploration> = {
    method: 'delete',
    url: `/environment_exploration/${data.id}`,
    params: queryParams?.params,
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<MessageResponse>(config)
    : getResponse<MessageResponse, EnvironmentExploration>(
        queryParams?.api ?? _client?.api,
        config,
      );
};

export const environmentExplorationDeleteMany = (
  data: Partial<EnvironmentExploration>[],
  queryParams?: QueryParamsWithList<EnvironmentExploration>,
): Promise<{ count: number }[]> => {
  const chunks = chunkArray(data, 1000);
  return Promise.all(
    chunks.map((chunk) => {
      const config: QueryParamsWithList<EnvironmentExploration> = {
        method: 'post',
        url: `/environment_exploration/delete`,
        params: queryParams?.params,
        list: chunk,
        headers: queryParams?.headers,
      };

      return queryParams?.batch
        ? queryParams.batch.addBatch<{ count: number }>(config)
        : getResponse<{ count: number }, EnvironmentExploration>(
            queryParams?.api ?? _client?.api,
            config,
          );
    }),
  );
};

export const environmentExplorationUpdateOne = (
  id: number,
  data: Partial<EnvironmentExploration>,
  queryParams?: QueryParams<EnvironmentExploration>,
): Promise<EnvironmentExploration> => {
  const config: QueryParams<EnvironmentExploration> = {
    method: 'put',
    url: `/environment_exploration/${id}`,
    params: queryParams?.params,
    data,
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<EnvironmentExploration>(config)
    : getResponse<EnvironmentExploration>(
        queryParams?.api ?? _client?.api,
        config,
      );
};

export const environmentExplorationCreateOne = (
  data: Partial<EnvironmentExploration>,
  queryParams?: QueryParams<EnvironmentExploration>,
): Promise<EnvironmentExploration> => {
  const config: QueryParams<EnvironmentExploration> = {
    method: 'post',
    url: queryParams?.url ?? `/environment_exploration`,
    params: queryParams?.params,
    data,
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<EnvironmentExploration>(config)
    : getResponse<EnvironmentExploration>(
        queryParams?.api ?? _client?.api,
        config,
      );
};

export const environmentExplorationCreateMany = (
  data: Partial<EnvironmentExploration>[],
  queryParams?: QueryParamsWithList<EnvironmentExploration>,
): Promise<EnvironmentExploration[][]> => {
  const chunks = chunkArray(data, 1000);
  return Promise.all(
    chunks.map((chunk) => {
      const config: QueryParamsWithList<EnvironmentExploration> = {
        method: 'post',
        url: queryParams?.url ?? `/environment_exploration`,
        params: queryParams?.params,
        list: chunk,
      };

      return queryParams?.batch
        ? queryParams.batch.addBatch<EnvironmentExploration[]>(config)
        : getResponse<EnvironmentExploration[], EnvironmentExploration>(
            queryParams?.api ?? _client?.api,
            config,
          );
    }),
  );
};

export const environmentExplorationGetMany = (
  queryParams?: QueryParams<EnvironmentExploration>,
): Promise<ResourceList<EnvironmentExplorationApi>> => {
  const config: QueryParams<EnvironmentExploration> = {
    method: 'get',
    url: queryParams?.url ?? `/environment_exploration`,
    params: queryParams?.params,
    cancelToken: queryParams?.cancelToken,
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<ResourceList<EnvironmentExplorationApi>>(
        config,
      )
    : getResponse<
        ResourceList<EnvironmentExplorationApi>,
        EnvironmentExploration
      >(queryParams?.api ?? _client?.api, config);
};

export const environmentExplorationGetOne = (
  id: number,
  queryParams?: QueryParams<EnvironmentExploration>,
): Promise<EnvironmentExplorationApi> => {
  const config: QueryParams<EnvironmentExploration> = {
    method: 'get',
    url: `${queryParams?.url ?? `/environment_exploration/${id}`}`,
    params: queryParams?.params,
    cancelToken: queryParams?.cancelToken,
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<EnvironmentExplorationApi>(config)
    : getResponse<EnvironmentExplorationApi, EnvironmentExploration>(
        queryParams?.api ?? _client?.api,
        config,
      );
};
