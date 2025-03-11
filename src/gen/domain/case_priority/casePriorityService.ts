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
import { CasePriorityRoute } from '../../routes/Routes';
import type { CasePriority } from './CasePriority';
import type { CasePriorityApi } from './CasePriorityApi';

export const casePriorityGetMany = (
  queryParams?: QueryParams<Partial<CasePriority>>,
): Promise<ResourceList<CasePriorityApi>> => {
  const config: QueryParams<Partial<CasePriority>> = {
    method: 'get',
    url: queryParams?.url ?? CasePriorityRoute(),
    params: queryParams?.params,
    cancelToken: queryParams?.cancelToken,
    headers: queryParams?.headers,
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<ResourceList<CasePriorityApi>>(config)
    : getResponse<ResourceList<CasePriorityApi>, Partial<CasePriority>>(
        queryParams?.api ?? _client?.api,
        config,
      );
};

export const casePriorityGetOne = (
  id: number,
  queryParams?: QueryParams<Partial<CasePriority>>,
): Promise<CasePriorityApi> => {
  const config: QueryParams<Partial<CasePriority>> = {
    method: 'get',
    url: `${queryParams?.url ?? CasePriorityRoute()}/${id}`,
    params: queryParams?.params,
    cancelToken: queryParams?.cancelToken,
    headers: queryParams?.headers,
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<CasePriorityApi>(config)
    : getResponse<CasePriorityApi, Partial<CasePriority>>(
        queryParams?.api ?? _client?.api,
        config,
      );
};

export const casePriorityDeleteOne = (
  id: number,
  queryParams?: QueryParams<Partial<CasePriority>>,
): Promise<MessageResponse> => {
  const config: QueryParams<Partial<CasePriority>> = {
    method: 'delete',
    url: `${queryParams?.url ?? CasePriorityRoute()}/${id}`,
    params: queryParams?.params,
    headers: queryParams?.headers,
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<MessageResponse>(config)
    : getResponse<MessageResponse, Partial<CasePriority>>(
        queryParams?.api ?? _client?.api,
        config,
      );
};

export const casePriorityDeleteMany = (
  data: (Partial<CasePriority> & { id: number })[],
  queryParams?: QueryParamsWithList<Partial<CasePriority> & { id: number }>,
): Promise<{ count: number }[]> => {
  const chunks = chunkArray(data, 1000);
  return Promise.all(
    chunks.map((chunk) => {
      const config: QueryParamsWithList<
        Partial<CasePriority> & { id: number }
      > = {
        method: 'post',
        url: queryParams?.url ?? CasePriorityRoute() + '/delete',
        params: queryParams?.params,
        list: chunk,
        headers: queryParams?.headers,
      };

      return queryParams?.batch
        ? queryParams.batch.addBatch<{ count: number }>(config)
        : getResponse<
            { count: number },
            Partial<CasePriority> & { id: number }
          >(queryParams?.api ?? _client?.api, config);
    }),
  );
};

export const casePriorityUpdateOne = (
  id: number,
  data: Partial<CasePriority>,
  queryParams?: QueryParams<Partial<CasePriority>>,
): Promise<CasePriority> => {
  const config: QueryParams<Partial<CasePriority>> = {
    method: 'put',
    url: `${queryParams?.url ?? CasePriorityRoute()}/${id}`,
    params: queryParams?.params,
    data,
    headers: queryParams?.headers,
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<CasePriority>(config)
    : getResponse<CasePriority, Partial<CasePriority>>(
        queryParams?.api ?? _client?.api,
        config,
      );
};

export const casePriorityUpdateMany = (
  data: (Partial<CasePriority> & { id: number })[],
  queryParams?: QueryParamsWithList<Partial<CasePriority> & { id: number }>,
): Promise<CasePriority[][]> => {
  const chunks = chunkArray(data, 1000);
  return Promise.all(
    chunks.map((chunk) => {
      const config: QueryParamsWithList<
        Partial<CasePriority> & { id: number }
      > = {
        method: 'post',
        url: queryParams?.url ?? CasePriorityRoute(),
        params: queryParams?.params,
        list: chunk,
        headers: queryParams?.headers,
      };

      return queryParams?.batch
        ? queryParams.batch.addBatch<CasePriority[]>(config)
        : getResponse<CasePriority[], Partial<CasePriority> & { id: number }>(
            queryParams?.api ?? _client?.api,
            config,
          );
    }),
  );
};

export const casePriorityCreateOne = (
  data: Partial<CasePriority>,
  queryParams?: QueryParams<Partial<CasePriority>>,
): Promise<CasePriority> => {
  const config: QueryParams<Partial<CasePriority>> = {
    method: 'post',
    url: queryParams?.url ?? CasePriorityRoute(),
    params: queryParams?.params,
    data,
    headers: queryParams?.headers,
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<CasePriority>(config)
    : getResponse<CasePriority, Partial<CasePriority>>(
        queryParams?.api ?? _client?.api,
        config,
      );
};

export const casePriorityCreateMany = (
  data: Partial<CasePriority>[],
  queryParams?: QueryParamsWithList<Partial<CasePriority>>,
): Promise<CasePriority[][]> => {
  const chunks = chunkArray(data, 1000);
  return Promise.all(
    chunks.map((chunk) => {
      const config: QueryParamsWithList<Partial<CasePriority>> = {
        method: 'post',
        url: queryParams?.url ?? CasePriorityRoute(),
        params: queryParams?.params,
        list: chunk,
        headers: queryParams?.headers,
      };

      return queryParams?.batch
        ? queryParams.batch.addBatch<CasePriority[]>(config)
        : getResponse<CasePriority[], Partial<CasePriority>>(
            queryParams?.api ?? _client?.api,
            config,
          );
    }),
  );
};
