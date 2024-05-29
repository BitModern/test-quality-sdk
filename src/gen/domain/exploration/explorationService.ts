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
import { ExplorationRoute } from '../../routes/Routes';
import type { Exploration } from './Exploration';
import type { ExplorationApi } from './ExplorationApi';

export const explorationGetMany = (
  queryParams?: QueryParams<Exploration>,
): Promise<ResourceList<ExplorationApi>> => {
  const config: QueryParams<Exploration> = {
    method: 'get',
    url: queryParams?.url ?? ExplorationRoute(),
    params: queryParams?.params,
    cancelToken: queryParams?.cancelToken,
    headers: queryParams?.headers,
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<ResourceList<ExplorationApi>>(config)
    : getResponse<ResourceList<ExplorationApi>, Exploration>(
        queryParams?.api ?? _client?.api,
        config,
      );
};

export const explorationGetOne = (
  id: number,
  queryParams?: QueryParams<Exploration>,
): Promise<ExplorationApi> => {
  const config: QueryParams<Exploration> = {
    method: 'get',
    url: `${queryParams?.url ?? ExplorationRoute()}/${id}`,
    params: queryParams?.params,
    cancelToken: queryParams?.cancelToken,
    headers: queryParams?.headers,
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<ExplorationApi>(config)
    : getResponse<ExplorationApi, Exploration>(
        queryParams?.api ?? _client?.api,
        config,
      );
};

export const explorationDeleteOne = (
  id: number,
  queryParams?: QueryParams<Exploration>,
): Promise<MessageResponse> => {
  const config: QueryParams<Exploration> = {
    method: 'delete',
    url: `${queryParams?.url ?? ExplorationRoute()}/${id}`,
    params: queryParams?.params,
    headers: queryParams?.headers,
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<MessageResponse>(config)
    : getResponse<MessageResponse, Exploration>(
        queryParams?.api ?? _client?.api,
        config,
      );
};

export const explorationUpdateOne = (
  id: number,
  data: Partial<Exploration>,
  queryParams?: QueryParams<Exploration>,
): Promise<Exploration> => {
  const config: QueryParams<Exploration> = {
    method: 'put',
    url: `${queryParams?.url ?? ExplorationRoute()}/${id}`,
    params: queryParams?.params,
    data,
    headers: queryParams?.headers,
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<Exploration>(config)
    : getResponse<Exploration>(queryParams?.api ?? _client?.api, config);
};

export const explorationCreateOne = (
  data: Partial<Exploration>,
  queryParams?: QueryParams<Exploration>,
): Promise<Exploration> => {
  const config: QueryParams<Exploration> = {
    method: 'post',
    url: queryParams?.url ?? ExplorationRoute(),
    params: queryParams?.params,
    data,
    headers: queryParams?.headers,
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<Exploration>(config)
    : getResponse<Exploration>(queryParams?.api ?? _client?.api, config);
};

export const explorationCreateMany = (
  data: Partial<Exploration>[],
  queryParams?: QueryParamsWithList<Exploration>,
): Promise<Exploration[]> => {
  const config: QueryParamsWithList<Exploration> = {
    method: 'post',
    url: queryParams?.url ?? ExplorationRoute(),
    params: queryParams?.params,
    list: data,
    headers: queryParams?.headers,
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<Exploration[]>(config)
    : getResponse<Exploration[], Exploration>(
        queryParams?.api ?? _client?.api,
        config,
      );
};
