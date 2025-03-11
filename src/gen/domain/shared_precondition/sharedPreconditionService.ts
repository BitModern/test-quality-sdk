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
import { SharedPreconditionRoute } from '../../routes/Routes';
import type { SharedPrecondition } from './SharedPrecondition';
import type { SharedPreconditionApi } from './SharedPreconditionApi';

export const sharedPreconditionGetMany = (
  queryParams?: QueryParams<SharedPrecondition>,
): Promise<ResourceList<SharedPreconditionApi>> => {
  const config: QueryParams<SharedPrecondition> = {
    method: 'get',
    url: queryParams?.url ?? SharedPreconditionRoute(),
    params: queryParams?.params,
    cancelToken: queryParams?.cancelToken,
    headers: queryParams?.headers,
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<ResourceList<SharedPreconditionApi>>(config)
    : getResponse<ResourceList<SharedPreconditionApi>, SharedPrecondition>(
        queryParams?.api ?? _client?.api,
        config,
      );
};

export const sharedPreconditionGetOne = (
  id: number,
  queryParams?: QueryParams<SharedPrecondition>,
): Promise<SharedPreconditionApi> => {
  const config: QueryParams<SharedPrecondition> = {
    method: 'get',
    url: `${queryParams?.url ?? SharedPreconditionRoute()}/${id}`,
    params: queryParams?.params,
    cancelToken: queryParams?.cancelToken,
    headers: queryParams?.headers,
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<SharedPreconditionApi>(config)
    : getResponse<SharedPreconditionApi, SharedPrecondition>(
        queryParams?.api ?? _client?.api,
        config,
      );
};

export const sharedPreconditionDeleteOne = (
  id: number,
  queryParams?: QueryParams<SharedPrecondition>,
): Promise<MessageResponse> => {
  const config: QueryParams<SharedPrecondition> = {
    method: 'delete',
    url: `${queryParams?.url ?? SharedPreconditionRoute()}/${id}`,
    params: queryParams?.params,
    headers: queryParams?.headers,
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<MessageResponse>(config)
    : getResponse<MessageResponse, SharedPrecondition>(
        queryParams?.api ?? _client?.api,
        config,
      );
};

export const sharedPreconditionDeleteMany = (
  data: (Partial<SharedPrecondition> & { id: number })[],
  queryParams?: QueryParamsWithList<SharedPrecondition>,
): Promise<{ count: number }[]> => {
  const chunks = chunkArray(data, 1000);
  return Promise.all(
    chunks.map((chunk) => {
      const config: QueryParamsWithList<SharedPrecondition> = {
        method: 'post',
        url: queryParams?.url ?? SharedPreconditionRoute() + '/delete',
        params: queryParams?.params,
        list: chunk,
        headers: queryParams?.headers,
      };

      return queryParams?.batch
        ? queryParams.batch.addBatch<{ count: number }>(config)
        : getResponse<{ count: number }, SharedPrecondition>(
            queryParams?.api ?? _client?.api,
            config,
          );
    }),
  );
};

export const sharedPreconditionUpdateOne = (
  id: number,
  data: Partial<SharedPrecondition>,
  queryParams?: QueryParams<SharedPrecondition>,
): Promise<SharedPrecondition> => {
  const config: QueryParams<SharedPrecondition> = {
    method: 'put',
    url: `${queryParams?.url ?? SharedPreconditionRoute()}/${id}`,
    params: queryParams?.params,
    data,
    headers: queryParams?.headers,
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<SharedPrecondition>(config)
    : getResponse<SharedPrecondition>(queryParams?.api ?? _client?.api, config);
};

export const sharedPreconditionUpdateMany = (
  data: (Partial<SharedPrecondition> & { id: number })[],
  queryParams?: QueryParamsWithList<SharedPrecondition>,
): Promise<SharedPrecondition[][]> => {
  const chunks = chunkArray(data, 1000);
  return Promise.all(
    chunks.map((chunk) => {
      const config: QueryParamsWithList<SharedPrecondition> = {
        method: 'post',
        url: queryParams?.url ?? SharedPreconditionRoute(),
        params: queryParams?.params,
        list: chunk,
        headers: queryParams?.headers,
      };

      return queryParams?.batch
        ? queryParams.batch.addBatch<SharedPrecondition[]>(config)
        : getResponse<SharedPrecondition[], SharedPrecondition>(
            queryParams?.api ?? _client?.api,
            config,
          );
    }),
  );
};

export const sharedPreconditionCreateOne = (
  data: Partial<SharedPrecondition>,
  queryParams?: QueryParams<SharedPrecondition>,
): Promise<SharedPrecondition> => {
  const config: QueryParams<SharedPrecondition> = {
    method: 'post',
    url: queryParams?.url ?? SharedPreconditionRoute(),
    params: queryParams?.params,
    data,
    headers: queryParams?.headers,
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<SharedPrecondition>(config)
    : getResponse<SharedPrecondition>(queryParams?.api ?? _client?.api, config);
};

export const sharedPreconditionCreateMany = (
  data: Partial<SharedPrecondition>[],
  queryParams?: QueryParamsWithList<SharedPrecondition>,
): Promise<SharedPrecondition[][]> => {
  const chunks = chunkArray(data, 1000);
  return Promise.all(
    chunks.map((chunk) => {
      const config: QueryParamsWithList<SharedPrecondition> = {
        method: 'post',
        url: queryParams?.url ?? SharedPreconditionRoute(),
        params: queryParams?.params,
        list: chunk,
        headers: queryParams?.headers,
      };

      return queryParams?.batch
        ? queryParams.batch.addBatch<SharedPrecondition[]>(config)
        : getResponse<SharedPrecondition[], SharedPrecondition>(
            queryParams?.api ?? _client?.api,
            config,
          );
    }),
  );
};
