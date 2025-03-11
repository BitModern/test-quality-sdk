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
import { LabelAssignedRoute } from '../../routes/Routes';
import type { LabelAssigned } from './LabelAssigned';
import type { LabelAssignedApi } from './LabelAssignedApi';

export const labelAssignedGetMany = (
  queryParams?: QueryParams<Partial<LabelAssigned>>,
): Promise<ResourceList<LabelAssignedApi>> => {
  const config: QueryParams<Partial<LabelAssigned>> = {
    method: 'get',
    url: queryParams?.url ?? LabelAssignedRoute(),
    params: queryParams?.params,
    cancelToken: queryParams?.cancelToken,
    headers: queryParams?.headers,
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<ResourceList<LabelAssignedApi>>(config)
    : getResponse<ResourceList<LabelAssignedApi>, Partial<LabelAssigned>>(
        queryParams?.api ?? _client?.api,
        config,
      );
};

export const labelAssignedGetOne = (
  id: number,
  queryParams?: QueryParams<Partial<LabelAssigned>>,
): Promise<LabelAssignedApi> => {
  const config: QueryParams<Partial<LabelAssigned>> = {
    method: 'get',
    url: `${queryParams?.url ?? LabelAssignedRoute()}/${id}`,
    params: queryParams?.params,
    cancelToken: queryParams?.cancelToken,
    headers: queryParams?.headers,
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<LabelAssignedApi>(config)
    : getResponse<LabelAssignedApi, Partial<LabelAssigned>>(
        queryParams?.api ?? _client?.api,
        config,
      );
};

export const labelAssignedDeleteOne = (
  id: number,
  queryParams?: QueryParams<Partial<LabelAssigned>>,
): Promise<MessageResponse> => {
  const config: QueryParams<Partial<LabelAssigned>> = {
    method: 'delete',
    url: `${queryParams?.url ?? LabelAssignedRoute()}/${id}`,
    params: queryParams?.params,
    headers: queryParams?.headers,
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<MessageResponse>(config)
    : getResponse<MessageResponse, Partial<LabelAssigned>>(
        queryParams?.api ?? _client?.api,
        config,
      );
};

export const labelAssignedDeleteMany = (
  data: (Partial<LabelAssigned> & { id: number })[],
  queryParams?: QueryParamsWithList<Partial<LabelAssigned> & { id: number }>,
): Promise<{ count: number }[]> => {
  const chunks = chunkArray(data, 1000);
  return Promise.all(
    chunks.map((chunk) => {
      const config: QueryParamsWithList<
        Partial<LabelAssigned> & { id: number }
      > = {
        method: 'post',
        url: queryParams?.url ?? LabelAssignedRoute() + '/delete',
        params: queryParams?.params,
        list: chunk,
        headers: queryParams?.headers,
      };

      return queryParams?.batch
        ? queryParams.batch.addBatch<{ count: number }>(config)
        : getResponse<
            { count: number },
            Partial<LabelAssigned> & { id: number }
          >(queryParams?.api ?? _client?.api, config);
    }),
  );
};

export const labelAssignedUpdateOne = (
  id: number,
  data: Partial<LabelAssigned>,
  queryParams?: QueryParams<Partial<LabelAssigned>>,
): Promise<LabelAssigned> => {
  const config: QueryParams<Partial<LabelAssigned>> = {
    method: 'put',
    url: `${queryParams?.url ?? LabelAssignedRoute()}/${id}`,
    params: queryParams?.params,
    data,
    headers: queryParams?.headers,
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<LabelAssigned>(config)
    : getResponse<LabelAssigned, Partial<LabelAssigned>>(
        queryParams?.api ?? _client?.api,
        config,
      );
};

export const labelAssignedUpdateMany = (
  data: (Partial<LabelAssigned> & { id: number })[],
  queryParams?: QueryParamsWithList<Partial<LabelAssigned> & { id: number }>,
): Promise<LabelAssigned[][]> => {
  const chunks = chunkArray(data, 1000);
  return Promise.all(
    chunks.map((chunk) => {
      const config: QueryParamsWithList<
        Partial<LabelAssigned> & { id: number }
      > = {
        method: 'post',
        url: queryParams?.url ?? LabelAssignedRoute(),
        params: queryParams?.params,
        list: chunk,
        headers: queryParams?.headers,
      };

      return queryParams?.batch
        ? queryParams.batch.addBatch<LabelAssigned[]>(config)
        : getResponse<LabelAssigned[], Partial<LabelAssigned> & { id: number }>(
            queryParams?.api ?? _client?.api,
            config,
          );
    }),
  );
};

export const labelAssignedCreateOne = (
  data: Partial<LabelAssigned>,
  queryParams?: QueryParams<Partial<LabelAssigned>>,
): Promise<LabelAssigned> => {
  const config: QueryParams<Partial<LabelAssigned>> = {
    method: 'post',
    url: queryParams?.url ?? LabelAssignedRoute(),
    params: queryParams?.params,
    data,
    headers: queryParams?.headers,
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<LabelAssigned>(config)
    : getResponse<LabelAssigned, Partial<LabelAssigned>>(
        queryParams?.api ?? _client?.api,
        config,
      );
};

export const labelAssignedCreateMany = (
  data: Partial<LabelAssigned>[],
  queryParams?: QueryParamsWithList<Partial<LabelAssigned>>,
): Promise<LabelAssigned[][]> => {
  const chunks = chunkArray(data, 1000);
  return Promise.all(
    chunks.map((chunk) => {
      const config: QueryParamsWithList<Partial<LabelAssigned>> = {
        method: 'post',
        url: queryParams?.url ?? LabelAssignedRoute(),
        params: queryParams?.params,
        list: chunk,
        headers: queryParams?.headers,
      };

      return queryParams?.batch
        ? queryParams.batch.addBatch<LabelAssigned[]>(config)
        : getResponse<LabelAssigned[], Partial<LabelAssigned>>(
            queryParams?.api ?? _client?.api,
            config,
          );
    }),
  );
};
