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
import { SubscriptionsRoute } from '../../routes/Routes';
import type { Subscriptions } from './Subscriptions';
import type { SubscriptionsApi } from './SubscriptionsApi';

export const subscriptionsGetMany = (
  queryParams?: QueryParams<Subscriptions>,
): Promise<ResourceList<SubscriptionsApi>> => {
  const config: QueryParams<Subscriptions> = {
    method: 'get',
    url: queryParams?.url ?? SubscriptionsRoute(),
    params: queryParams?.params,
    cancelToken: queryParams?.cancelToken,
    headers: queryParams?.headers,
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<ResourceList<SubscriptionsApi>>(config)
    : getResponse<ResourceList<SubscriptionsApi>, Subscriptions>(
        queryParams?.api ?? _client?.api,
        config,
      );
};

export const subscriptionsGetOne = (
  id: number,
  queryParams?: QueryParams<Subscriptions>,
): Promise<SubscriptionsApi> => {
  const config: QueryParams<Subscriptions> = {
    method: 'get',
    url: `${queryParams?.url ?? SubscriptionsRoute()}/${id}`,
    params: queryParams?.params,
    cancelToken: queryParams?.cancelToken,
    headers: queryParams?.headers,
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<SubscriptionsApi>(config)
    : getResponse<SubscriptionsApi, Subscriptions>(
        queryParams?.api ?? _client?.api,
        config,
      );
};

export const subscriptionsDeleteOne = (
  id: number,
  queryParams?: QueryParams<Subscriptions>,
): Promise<MessageResponse> => {
  const config: QueryParams<Subscriptions> = {
    method: 'delete',
    url: `${queryParams?.url ?? SubscriptionsRoute()}/${id}`,
    params: queryParams?.params,
    headers: queryParams?.headers,
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<MessageResponse>(config)
    : getResponse<MessageResponse, Subscriptions>(
        queryParams?.api ?? _client?.api,
        config,
      );
};

export const subscriptionsDeleteMany = (
  data: (Partial<Subscriptions> & { id: number })[],
  queryParams?: QueryParamsWithList<Subscriptions>,
): Promise<{ count: number }[]> => {
  const chunks = chunkArray(data, 1000);
  return Promise.all(
    chunks.map((chunk) => {
      const config: QueryParamsWithList<Subscriptions> = {
        method: 'post',
        url: queryParams?.url ?? SubscriptionsRoute() + '/delete',
        params: queryParams?.params,
        list: chunk,
        headers: queryParams?.headers,
      };

      return queryParams?.batch
        ? queryParams.batch.addBatch<{ count: number }>(config)
        : getResponse<{ count: number }, Subscriptions>(
            queryParams?.api ?? _client?.api,
            config,
          );
    }),
  );
};

export const subscriptionsUpdateOne = (
  id: number,
  data: Partial<Subscriptions>,
  queryParams?: QueryParams<Subscriptions>,
): Promise<Subscriptions> => {
  const config: QueryParams<Subscriptions> = {
    method: 'put',
    url: `${queryParams?.url ?? SubscriptionsRoute()}/${id}`,
    params: queryParams?.params,
    data,
    headers: queryParams?.headers,
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<Subscriptions>(config)
    : getResponse<Subscriptions>(queryParams?.api ?? _client?.api, config);
};

export const subscriptionsUpdateMany = (
  data: (Partial<Subscriptions> & { id: number })[],
  queryParams?: QueryParamsWithList<Subscriptions>,
): Promise<Subscriptions[][]> => {
  const chunks = chunkArray(data, 1000);
  return Promise.all(
    chunks.map((chunk) => {
      const config: QueryParamsWithList<Subscriptions> = {
        method: 'post',
        url: queryParams?.url ?? SubscriptionsRoute(),
        params: queryParams?.params,
        list: chunk,
        headers: queryParams?.headers,
      };

      return queryParams?.batch
        ? queryParams.batch.addBatch<Subscriptions[]>(config)
        : getResponse<Subscriptions[], Subscriptions>(
            queryParams?.api ?? _client?.api,
            config,
          );
    }),
  );
};

export const subscriptionsCreateOne = (
  data: Partial<Subscriptions>,
  queryParams?: QueryParams<Subscriptions>,
): Promise<Subscriptions> => {
  const config: QueryParams<Subscriptions> = {
    method: 'post',
    url: queryParams?.url ?? SubscriptionsRoute(),
    params: queryParams?.params,
    data,
    headers: queryParams?.headers,
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<Subscriptions>(config)
    : getResponse<Subscriptions>(queryParams?.api ?? _client?.api, config);
};

export const subscriptionsCreateMany = (
  data: Partial<Subscriptions>[],
  queryParams?: QueryParamsWithList<Subscriptions>,
): Promise<Subscriptions[][]> => {
  const chunks = chunkArray(data, 1000);
  return Promise.all(
    chunks.map((chunk) => {
      const config: QueryParamsWithList<Subscriptions> = {
        method: 'post',
        url: queryParams?.url ?? SubscriptionsRoute(),
        params: queryParams?.params,
        list: chunk,
        headers: queryParams?.headers,
      };

      return queryParams?.batch
        ? queryParams.batch.addBatch<Subscriptions[]>(config)
        : getResponse<Subscriptions[], Subscriptions>(
            queryParams?.api ?? _client?.api,
            config,
          );
    }),
  );
};
