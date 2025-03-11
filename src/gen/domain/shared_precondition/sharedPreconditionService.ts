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
  queryParams?: QueryParams<Partial<SharedPrecondition>>,
): Promise<ResourceList<SharedPreconditionApi>> => {
  const config: QueryParams<Partial<SharedPrecondition>> = {
    method: 'get',
    url: queryParams?.url ?? SharedPreconditionRoute(),
    params: queryParams?.params,
    cancelToken: queryParams?.cancelToken,
    headers: queryParams?.headers,
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<ResourceList<SharedPreconditionApi>>(config)
    : getResponse<
        ResourceList<SharedPreconditionApi>,
        Partial<SharedPrecondition>
      >(queryParams?.api ?? _client?.api, config);
};

export const sharedPreconditionGetOne = (
  id: number,
  queryParams?: QueryParams<Partial<SharedPrecondition>>,
): Promise<SharedPreconditionApi> => {
  const config: QueryParams<Partial<SharedPrecondition>> = {
    method: 'get',
    url: `${queryParams?.url ?? SharedPreconditionRoute()}/${id}`,
    params: queryParams?.params,
    cancelToken: queryParams?.cancelToken,
    headers: queryParams?.headers,
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<SharedPreconditionApi>(config)
    : getResponse<SharedPreconditionApi, Partial<SharedPrecondition>>(
        queryParams?.api ?? _client?.api,
        config,
      );
};

export const sharedPreconditionDeleteOne = (
  id: number,
  queryParams?: QueryParams<Partial<SharedPrecondition>>,
): Promise<MessageResponse> => {
  const config: QueryParams<Partial<SharedPrecondition>> = {
    method: 'delete',
    url: `${queryParams?.url ?? SharedPreconditionRoute()}/${id}`,
    params: queryParams?.params,
    headers: queryParams?.headers,
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<MessageResponse>(config)
    : getResponse<MessageResponse, Partial<SharedPrecondition>>(
        queryParams?.api ?? _client?.api,
        config,
      );
};

export const sharedPreconditionDeleteMany = (
  data: (Partial<SharedPrecondition> & { id: number })[],
  queryParams?: QueryParamsWithList<
    Partial<SharedPrecondition> & { id: number }
  >,
): Promise<{ count: number }[]> => {
  const chunks = chunkArray(data, 1000);
  return Promise.all(
    chunks.map((chunk) => {
      const config: QueryParamsWithList<
        Partial<SharedPrecondition> & { id: number }
      > = {
        method: 'post',
        url: queryParams?.url ?? SharedPreconditionRoute() + '/delete',
        params: queryParams?.params,
        list: chunk,
        headers: queryParams?.headers,
      };

      return queryParams?.batch
        ? queryParams.batch.addBatch<{ count: number }>(config)
        : getResponse<
            { count: number },
            Partial<SharedPrecondition> & { id: number }
          >(queryParams?.api ?? _client?.api, config);
    }),
  );
};

export const sharedPreconditionUpdateOne = (
  id: number,
  data: Partial<SharedPrecondition>,
  queryParams?: QueryParams<Partial<SharedPrecondition>>,
): Promise<SharedPrecondition> => {
  const config: QueryParams<Partial<SharedPrecondition>> = {
    method: 'put',
    url: `${queryParams?.url ?? SharedPreconditionRoute()}/${id}`,
    params: queryParams?.params,
    data,
    headers: queryParams?.headers,
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<SharedPrecondition>(config)
    : getResponse<SharedPrecondition, Partial<SharedPrecondition>>(
        queryParams?.api ?? _client?.api,
        config,
      );
};

export const sharedPreconditionUpdateMany = (
  data: (Partial<SharedPrecondition> & { id: number })[],
  queryParams?: QueryParamsWithList<
    Partial<SharedPrecondition> & { id: number }
  >,
): Promise<SharedPrecondition[][]> => {
  const chunks = chunkArray(data, 1000);
  return Promise.all(
    chunks.map((chunk) => {
      const config: QueryParamsWithList<
        Partial<SharedPrecondition> & { id: number }
      > = {
        method: 'post',
        url: queryParams?.url ?? SharedPreconditionRoute(),
        params: queryParams?.params,
        list: chunk,
        headers: queryParams?.headers,
      };

      return queryParams?.batch
        ? queryParams.batch.addBatch<SharedPrecondition[]>(config)
        : getResponse<
            SharedPrecondition[],
            Partial<SharedPrecondition> & { id: number }
          >(queryParams?.api ?? _client?.api, config);
    }),
  );
};

export const sharedPreconditionCreateOne = (
  data: Partial<SharedPrecondition>,
  queryParams?: QueryParams<Partial<SharedPrecondition>>,
): Promise<SharedPrecondition> => {
  const config: QueryParams<Partial<SharedPrecondition>> = {
    method: 'post',
    url: queryParams?.url ?? SharedPreconditionRoute(),
    params: queryParams?.params,
    data,
    headers: queryParams?.headers,
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<SharedPrecondition>(config)
    : getResponse<SharedPrecondition, Partial<SharedPrecondition>>(
        queryParams?.api ?? _client?.api,
        config,
      );
};

export const sharedPreconditionCreateMany = (
  data: Partial<SharedPrecondition>[],
  queryParams?: QueryParamsWithList<Partial<SharedPrecondition>>,
): Promise<SharedPrecondition[][]> => {
  const chunks = chunkArray(data, 1000);
  return Promise.all(
    chunks.map((chunk) => {
      const config: QueryParamsWithList<Partial<SharedPrecondition>> = {
        method: 'post',
        url: queryParams?.url ?? SharedPreconditionRoute(),
        params: queryParams?.params,
        list: chunk,
        headers: queryParams?.headers,
      };

      return queryParams?.batch
        ? queryParams.batch.addBatch<SharedPrecondition[]>(config)
        : getResponse<SharedPrecondition[], Partial<SharedPrecondition>>(
            queryParams?.api ?? _client?.api,
            config,
          );
    }),
  );
};
