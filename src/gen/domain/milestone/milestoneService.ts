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
import { MilestoneRoute } from '../../routes/Routes';
import type { Milestone } from './Milestone';
import type { MilestoneApi } from './MilestoneApi';

export const milestoneGetMany = (
  queryParams?: QueryParams<Milestone>,
): Promise<ResourceList<MilestoneApi>> => {
  const config: QueryParams<Milestone> = {
    method: 'get',
    url: queryParams?.url ?? MilestoneRoute(),
    params: queryParams?.params,
    cancelToken: queryParams?.cancelToken,
    headers: queryParams?.headers,
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<ResourceList<MilestoneApi>>(config)
    : getResponse<ResourceList<MilestoneApi>, Milestone>(
        queryParams?.api ?? _client?.api,
        config,
      );
};

export const milestoneGetOne = (
  id: number,
  queryParams?: QueryParams<Milestone>,
): Promise<MilestoneApi> => {
  const config: QueryParams<Milestone> = {
    method: 'get',
    url: `${queryParams?.url ?? MilestoneRoute()}/${id}`,
    params: queryParams?.params,
    cancelToken: queryParams?.cancelToken,
    headers: queryParams?.headers,
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<MilestoneApi>(config)
    : getResponse<MilestoneApi, Milestone>(
        queryParams?.api ?? _client?.api,
        config,
      );
};

export const milestoneDeleteOne = (
  id: number,
  queryParams?: QueryParams<Milestone>,
): Promise<MessageResponse> => {
  const config: QueryParams<Milestone> = {
    method: 'delete',
    url: `${queryParams?.url ?? MilestoneRoute()}/${id}`,
    params: queryParams?.params,
    headers: queryParams?.headers,
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<MessageResponse>(config)
    : getResponse<MessageResponse, Milestone>(
        queryParams?.api ?? _client?.api,
        config,
      );
};

export const milestoneDeleteMany = (
  data: Partial<Milestone>[],
  queryParams?: QueryParamsWithList<Milestone>,
): Promise<{ count: number }[]> => {
  const chunks = chunkArray(data, 1000);
  return Promise.all(
    chunks.map((chunk) => {
      const config: QueryParamsWithList<Milestone> = {
        method: 'post',
        url: queryParams?.url ?? MilestoneRoute() + '/delete',
        params: queryParams?.params,
        list: chunk,
        headers: queryParams?.headers,
      };

      return queryParams?.batch
        ? queryParams.batch.addBatch<{ count: number }>(config)
        : getResponse<{ count: number }, Milestone>(
            queryParams?.api ?? _client?.api,
            config,
          );
    }),
  );
};

export const milestoneUpdateOne = (
  id: number,
  data: Partial<Milestone>,
  queryParams?: QueryParams<Milestone>,
): Promise<Milestone> => {
  const config: QueryParams<Milestone> = {
    method: 'put',
    url: `${queryParams?.url ?? MilestoneRoute()}/${id}`,
    params: queryParams?.params,
    data,
    headers: queryParams?.headers,
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<Milestone>(config)
    : getResponse<Milestone>(queryParams?.api ?? _client?.api, config);
};

export const milestoneCreateOne = (
  data: Partial<Milestone>,
  queryParams?: QueryParams<Milestone>,
): Promise<Milestone> => {
  const config: QueryParams<Milestone> = {
    method: 'post',
    url: queryParams?.url ?? MilestoneRoute(),
    params: queryParams?.params,
    data,
    headers: queryParams?.headers,
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<Milestone>(config)
    : getResponse<Milestone>(queryParams?.api ?? _client?.api, config);
};

export const milestoneCreateMany = (
  data: Partial<Milestone>[],
  queryParams?: QueryParamsWithList<Milestone>,
): Promise<Milestone[][]> => {
  const chunks = chunkArray(data, 1000);
  return Promise.all(
    chunks.map((chunk) => {
      const config: QueryParamsWithList<Milestone> = {
        method: 'post',
        url: queryParams?.url ?? MilestoneRoute(),
        params: queryParams?.params,
        list: chunk,
        headers: queryParams?.headers,
      };

      return queryParams?.batch
        ? queryParams.batch.addBatch<Milestone[]>(config)
        : getResponse<Milestone[], Milestone>(
            queryParams?.api ?? _client?.api,
            config,
          );
    }),
  );
};
