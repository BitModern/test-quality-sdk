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
  queryParams?: QueryParams<Partial<Milestone>>,
): Promise<ResourceList<MilestoneApi>> => {
  const config: QueryParams<Partial<Milestone>> = {
    method: 'get',
    url: queryParams?.url ?? MilestoneRoute(),
    params: queryParams?.params,
    cancelToken: queryParams?.cancelToken,
    headers: queryParams?.headers,
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<ResourceList<MilestoneApi>>(config)
    : getResponse<ResourceList<MilestoneApi>, Partial<Milestone>>(
        queryParams?.api ?? _client?.api,
        config,
      );
};

export const milestoneGetOne = (
  id: number,
  queryParams?: QueryParams<Partial<Milestone>>,
): Promise<MilestoneApi> => {
  const config: QueryParams<Partial<Milestone>> = {
    method: 'get',
    url: `${queryParams?.url ?? MilestoneRoute()}/${id}`,
    params: queryParams?.params,
    cancelToken: queryParams?.cancelToken,
    headers: queryParams?.headers,
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<MilestoneApi>(config)
    : getResponse<MilestoneApi, Partial<Milestone>>(
        queryParams?.api ?? _client?.api,
        config,
      );
};

export const milestoneDeleteOne = (
  id: number,
  queryParams?: QueryParams<Partial<Milestone>>,
): Promise<MessageResponse> => {
  const config: QueryParams<Partial<Milestone>> = {
    method: 'delete',
    url: `${queryParams?.url ?? MilestoneRoute()}/${id}`,
    params: queryParams?.params,
    headers: queryParams?.headers,
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<MessageResponse>(config)
    : getResponse<MessageResponse, Partial<Milestone>>(
        queryParams?.api ?? _client?.api,
        config,
      );
};

export const milestoneDeleteMany = (
  data: (Partial<Milestone> & { id: number })[],
  queryParams?: QueryParamsWithList<Partial<Milestone> & { id: number }>,
): Promise<{ count: number }[]> => {
  const chunks = chunkArray(data, 1000);
  return Promise.all(
    chunks.map((chunk) => {
      const config: QueryParamsWithList<Partial<Milestone> & { id: number }> = {
        method: 'post',
        url: queryParams?.url ?? MilestoneRoute() + '/delete',
        params: queryParams?.params,
        list: chunk,
        headers: queryParams?.headers,
      };

      return queryParams?.batch
        ? queryParams.batch.addBatch<{ count: number }>(config)
        : getResponse<{ count: number }, Partial<Milestone> & { id: number }>(
            queryParams?.api ?? _client?.api,
            config,
          );
    }),
  );
};

export const milestoneUpdateOne = (
  id: number,
  data: Partial<Milestone>,
  queryParams?: QueryParams<Partial<Milestone>>,
): Promise<Milestone> => {
  const config: QueryParams<Partial<Milestone>> = {
    method: 'put',
    url: `${queryParams?.url ?? MilestoneRoute()}/${id}`,
    params: queryParams?.params,
    data,
    headers: queryParams?.headers,
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<Milestone>(config)
    : getResponse<Milestone, Partial<Milestone>>(
        queryParams?.api ?? _client?.api,
        config,
      );
};

export const milestoneUpdateMany = (
  data: (Partial<Milestone> & { id: number })[],
  queryParams?: QueryParamsWithList<Partial<Milestone> & { id: number }>,
): Promise<Milestone[][]> => {
  const chunks = chunkArray(data, 1000);
  return Promise.all(
    chunks.map((chunk) => {
      const config: QueryParamsWithList<Partial<Milestone> & { id: number }> = {
        method: 'post',
        url: queryParams?.url ?? MilestoneRoute(),
        params: queryParams?.params,
        list: chunk,
        headers: queryParams?.headers,
      };

      return queryParams?.batch
        ? queryParams.batch.addBatch<Milestone[]>(config)
        : getResponse<Milestone[], Partial<Milestone> & { id: number }>(
            queryParams?.api ?? _client?.api,
            config,
          );
    }),
  );
};

export const milestoneCreateOne = (
  data: Partial<Milestone>,
  queryParams?: QueryParams<Partial<Milestone>>,
): Promise<Milestone> => {
  const config: QueryParams<Partial<Milestone>> = {
    method: 'post',
    url: queryParams?.url ?? MilestoneRoute(),
    params: queryParams?.params,
    data,
    headers: queryParams?.headers,
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<Milestone>(config)
    : getResponse<Milestone, Partial<Milestone>>(
        queryParams?.api ?? _client?.api,
        config,
      );
};

export const milestoneCreateMany = (
  data: Partial<Milestone>[],
  queryParams?: QueryParamsWithList<Partial<Milestone>>,
): Promise<Milestone[][]> => {
  const chunks = chunkArray(data, 1000);
  return Promise.all(
    chunks.map((chunk) => {
      const config: QueryParamsWithList<Partial<Milestone>> = {
        method: 'post',
        url: queryParams?.url ?? MilestoneRoute(),
        params: queryParams?.params,
        list: chunk,
        headers: queryParams?.headers,
      };

      return queryParams?.batch
        ? queryParams.batch.addBatch<Milestone[]>(config)
        : getResponse<Milestone[], Partial<Milestone>>(
            queryParams?.api ?? _client?.api,
            config,
          );
    }),
  );
};
