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
import type { ExplorationRequirement } from './ExplorationRequirement';
import type { ExplorationRequirementApi } from './ExplorationRequirementApi';

export const explorationRequirementDetach = (
  data: Partial<ExplorationRequirement>,
  queryParams?: QueryParams<Partial<ExplorationRequirement>>,
): Promise<MessageResponse> => {
  if (data.id === undefined) {
    return Promise.reject(new Error('Must supply id'));
  }
  const config: QueryParams<Partial<ExplorationRequirement>> = {
    method: 'delete',
    url: `/exploration_requirement/${data.id}`,
    params: queryParams?.params,
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<MessageResponse>(config)
    : getResponse<MessageResponse, Partial<ExplorationRequirement>>(
        queryParams?.api ?? _client?.api,
        config,
      );
};

export const explorationRequirementDeleteMany = (
  data: (Partial<ExplorationRequirement> & { id: number })[],
  queryParams?: QueryParamsWithList<
    Partial<ExplorationRequirement & { id: number }>
  >,
): Promise<{ count: number }[]> => {
  const chunks = chunkArray(data, 1000);
  return Promise.all(
    chunks.map((chunk) => {
      const config: QueryParamsWithList<
        Partial<ExplorationRequirement> & { id: number }
      > = {
        method: 'post',
        url: `/exploration_requirement/delete`,
        params: queryParams?.params,
        list: chunk,
        headers: queryParams?.headers,
      };

      return queryParams?.batch
        ? queryParams.batch.addBatch<{ count: number }>(config)
        : getResponse<
            { count: number },
            Partial<ExplorationRequirement> & { id: number }
          >(queryParams?.api ?? _client?.api, config);
    }),
  );
};

export const explorationRequirementUpdateOne = (
  id: number,
  data: Partial<ExplorationRequirement>,
  queryParams?: QueryParams<Partial<ExplorationRequirement>>,
): Promise<ExplorationRequirement> => {
  const config: QueryParams<Partial<ExplorationRequirement>> = {
    method: 'put',
    url: `/exploration_requirement/${id}`,
    params: queryParams?.params,
    data,
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<ExplorationRequirement>(config)
    : getResponse<ExplorationRequirement, Partial<ExplorationRequirement>>(
        queryParams?.api ?? _client?.api,
        config,
      );
};

export const explorationRequirementUpdateMany = (
  data: (Partial<ExplorationRequirement> & { id: number })[],
  queryParams?: QueryParamsWithList<
    Partial<ExplorationRequirement> & { id: number }
  >,
): Promise<ExplorationRequirement[][]> => {
  const chunks = chunkArray(data, 1000);
  return Promise.all(
    chunks.map((chunk) => {
      const config: QueryParamsWithList<
        Partial<ExplorationRequirement> & { id: number }
      > = {
        method: 'post',
        url: queryParams?.url ?? `/exploration_requirement`,
        params: queryParams?.params,
        list: chunk,
      };

      return queryParams?.batch
        ? queryParams.batch.addBatch<ExplorationRequirement[]>(config)
        : getResponse<
            ExplorationRequirement[],
            Partial<ExplorationRequirement> & { id: number }
          >(queryParams?.api ?? _client?.api, config);
    }),
  );
};

export const explorationRequirementCreateOne = (
  data: Partial<ExplorationRequirement>,
  queryParams?: QueryParams<Partial<ExplorationRequirement>>,
): Promise<ExplorationRequirement> => {
  const config: QueryParams<Partial<ExplorationRequirement>> = {
    method: 'post',
    url: queryParams?.url ?? `/exploration_requirement`,
    params: queryParams?.params,
    data,
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<ExplorationRequirement>(config)
    : getResponse<ExplorationRequirement, Partial<ExplorationRequirement>>(
        queryParams?.api ?? _client?.api,
        config,
      );
};

export const explorationRequirementCreateMany = (
  data: Partial<ExplorationRequirement>[],
  queryParams?: QueryParamsWithList<Partial<ExplorationRequirement>>,
): Promise<ExplorationRequirement[][]> => {
  const chunks = chunkArray(data, 1000);
  return Promise.all(
    chunks.map((chunk) => {
      const config: QueryParamsWithList<Partial<ExplorationRequirement>> = {
        method: 'post',
        url: queryParams?.url ?? `/exploration_requirement`,
        params: queryParams?.params,
        list: chunk,
      };

      return queryParams?.batch
        ? queryParams.batch.addBatch<ExplorationRequirement[]>(config)
        : getResponse<
            ExplorationRequirement[],
            Partial<ExplorationRequirement>
          >(queryParams?.api ?? _client?.api, config);
    }),
  );
};

export const explorationRequirementGetMany = (
  queryParams?: QueryParams<Partial<ExplorationRequirement>>,
): Promise<ResourceList<ExplorationRequirementApi>> => {
  const config: QueryParams<Partial<ExplorationRequirement>> = {
    method: 'get',
    url: queryParams?.url ?? `/exploration_requirement`,
    params: queryParams?.params,
    cancelToken: queryParams?.cancelToken,
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<ResourceList<ExplorationRequirementApi>>(
        config,
      )
    : getResponse<
        ResourceList<ExplorationRequirementApi>,
        Partial<ExplorationRequirement>
      >(queryParams?.api ?? _client?.api, config);
};

export const explorationRequirementGetOne = (
  id: number,
  queryParams?: QueryParams<Partial<ExplorationRequirement>>,
): Promise<ExplorationRequirementApi> => {
  const config: QueryParams<Partial<ExplorationRequirement>> = {
    method: 'get',
    url: `${queryParams?.url ?? `/exploration_requirement/${id}`}`,
    params: queryParams?.params,
    cancelToken: queryParams?.cancelToken,
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<ExplorationRequirementApi>(config)
    : getResponse<ExplorationRequirementApi, Partial<ExplorationRequirement>>(
        queryParams?.api ?? _client?.api,
        config,
      );
};
