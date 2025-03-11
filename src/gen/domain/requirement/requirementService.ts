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
import { RequirementRoute } from '../../routes/Routes';
import type { Requirement } from './Requirement';
import type { RequirementApi } from './RequirementApi';

export const requirementGetMany = (
  queryParams?: QueryParams<Partial<Requirement>>,
): Promise<ResourceList<RequirementApi>> => {
  const config: QueryParams<Partial<Requirement>> = {
    method: 'get',
    url: queryParams?.url ?? RequirementRoute(),
    params: queryParams?.params,
    cancelToken: queryParams?.cancelToken,
    headers: queryParams?.headers,
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<ResourceList<RequirementApi>>(config)
    : getResponse<ResourceList<RequirementApi>, Partial<Requirement>>(
        queryParams?.api ?? _client?.api,
        config,
      );
};

export const requirementGetOne = (
  id: number,
  queryParams?: QueryParams<Partial<Requirement>>,
): Promise<RequirementApi> => {
  const config: QueryParams<Partial<Requirement>> = {
    method: 'get',
    url: `${queryParams?.url ?? RequirementRoute()}/${id}`,
    params: queryParams?.params,
    cancelToken: queryParams?.cancelToken,
    headers: queryParams?.headers,
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<RequirementApi>(config)
    : getResponse<RequirementApi, Partial<Requirement>>(
        queryParams?.api ?? _client?.api,
        config,
      );
};

export const requirementDeleteOne = (
  id: number,
  queryParams?: QueryParams<Partial<Requirement>>,
): Promise<MessageResponse> => {
  const config: QueryParams<Partial<Requirement>> = {
    method: 'delete',
    url: `${queryParams?.url ?? RequirementRoute()}/${id}`,
    params: queryParams?.params,
    headers: queryParams?.headers,
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<MessageResponse>(config)
    : getResponse<MessageResponse, Partial<Requirement>>(
        queryParams?.api ?? _client?.api,
        config,
      );
};

export const requirementDeleteMany = (
  data: (Partial<Requirement> & { id: number })[],
  queryParams?: QueryParamsWithList<Partial<Requirement> & { id: number }>,
): Promise<{ count: number }[]> => {
  const chunks = chunkArray(data, 1000);
  return Promise.all(
    chunks.map((chunk) => {
      const config: QueryParamsWithList<Partial<Requirement> & { id: number }> =
        {
          method: 'post',
          url: queryParams?.url ?? RequirementRoute() + '/delete',
          params: queryParams?.params,
          list: chunk,
          headers: queryParams?.headers,
        };

      return queryParams?.batch
        ? queryParams.batch.addBatch<{ count: number }>(config)
        : getResponse<{ count: number }, Partial<Requirement> & { id: number }>(
            queryParams?.api ?? _client?.api,
            config,
          );
    }),
  );
};

export const requirementUpdateOne = (
  id: number,
  data: Partial<Requirement>,
  queryParams?: QueryParams<Partial<Requirement>>,
): Promise<Requirement> => {
  const config: QueryParams<Partial<Requirement>> = {
    method: 'put',
    url: `${queryParams?.url ?? RequirementRoute()}/${id}`,
    params: queryParams?.params,
    data,
    headers: queryParams?.headers,
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<Requirement>(config)
    : getResponse<Requirement, Partial<Requirement>>(
        queryParams?.api ?? _client?.api,
        config,
      );
};

export const requirementUpdateMany = (
  data: (Partial<Requirement> & { id: number })[],
  queryParams?: QueryParamsWithList<Partial<Requirement> & { id: number }>,
): Promise<Requirement[][]> => {
  const chunks = chunkArray(data, 1000);
  return Promise.all(
    chunks.map((chunk) => {
      const config: QueryParamsWithList<Partial<Requirement> & { id: number }> =
        {
          method: 'post',
          url: queryParams?.url ?? RequirementRoute(),
          params: queryParams?.params,
          list: chunk,
          headers: queryParams?.headers,
        };

      return queryParams?.batch
        ? queryParams.batch.addBatch<Requirement[]>(config)
        : getResponse<Requirement[], Partial<Requirement> & { id: number }>(
            queryParams?.api ?? _client?.api,
            config,
          );
    }),
  );
};

export const requirementCreateOne = (
  data: Partial<Requirement>,
  queryParams?: QueryParams<Partial<Requirement>>,
): Promise<Requirement> => {
  const config: QueryParams<Partial<Requirement>> = {
    method: 'post',
    url: queryParams?.url ?? RequirementRoute(),
    params: queryParams?.params,
    data,
    headers: queryParams?.headers,
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<Requirement>(config)
    : getResponse<Requirement, Partial<Requirement>>(
        queryParams?.api ?? _client?.api,
        config,
      );
};

export const requirementCreateMany = (
  data: Partial<Requirement>[],
  queryParams?: QueryParamsWithList<Partial<Requirement>>,
): Promise<Requirement[][]> => {
  const chunks = chunkArray(data, 1000);
  return Promise.all(
    chunks.map((chunk) => {
      const config: QueryParamsWithList<Partial<Requirement>> = {
        method: 'post',
        url: queryParams?.url ?? RequirementRoute(),
        params: queryParams?.params,
        list: chunk,
        headers: queryParams?.headers,
      };

      return queryParams?.batch
        ? queryParams.batch.addBatch<Requirement[]>(config)
        : getResponse<Requirement[], Partial<Requirement>>(
            queryParams?.api ?? _client?.api,
            config,
          );
    }),
  );
};
