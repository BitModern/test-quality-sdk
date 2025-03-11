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
import { SubscriptionUserRoute } from '../../routes/Routes';
import type { SubscriptionUser } from './SubscriptionUser';
import type { SubscriptionUserApi } from './SubscriptionUserApi';

export const subscriptionUserGetMany = (
  queryParams?: QueryParams<Partial<SubscriptionUser>>,
): Promise<ResourceList<SubscriptionUserApi>> => {
  const config: QueryParams<Partial<SubscriptionUser>> = {
    method: 'get',
    url: queryParams?.url ?? SubscriptionUserRoute(),
    params: queryParams?.params,
    cancelToken: queryParams?.cancelToken,
    headers: queryParams?.headers,
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<ResourceList<SubscriptionUserApi>>(config)
    : getResponse<ResourceList<SubscriptionUserApi>, Partial<SubscriptionUser>>(
        queryParams?.api ?? _client?.api,
        config,
      );
};

export const subscriptionUserGetOne = (
  id: number,
  queryParams?: QueryParams<Partial<SubscriptionUser>>,
): Promise<SubscriptionUserApi> => {
  const config: QueryParams<Partial<SubscriptionUser>> = {
    method: 'get',
    url: `${queryParams?.url ?? SubscriptionUserRoute()}/${id}`,
    params: queryParams?.params,
    cancelToken: queryParams?.cancelToken,
    headers: queryParams?.headers,
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<SubscriptionUserApi>(config)
    : getResponse<SubscriptionUserApi, Partial<SubscriptionUser>>(
        queryParams?.api ?? _client?.api,
        config,
      );
};

export const subscriptionUserDeleteOne = (
  id: number,
  queryParams?: QueryParams<Partial<SubscriptionUser>>,
): Promise<MessageResponse> => {
  const config: QueryParams<Partial<SubscriptionUser>> = {
    method: 'delete',
    url: `${queryParams?.url ?? SubscriptionUserRoute()}/${id}`,
    params: queryParams?.params,
    headers: queryParams?.headers,
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<MessageResponse>(config)
    : getResponse<MessageResponse, Partial<SubscriptionUser>>(
        queryParams?.api ?? _client?.api,
        config,
      );
};

export const subscriptionUserDeleteMany = (
  data: (Partial<SubscriptionUser> & { id: number })[],
  queryParams?: QueryParamsWithList<Partial<SubscriptionUser> & { id: number }>,
): Promise<{ count: number }[]> => {
  const chunks = chunkArray(data, 1000);
  return Promise.all(
    chunks.map((chunk) => {
      const config: QueryParamsWithList<
        Partial<SubscriptionUser> & { id: number }
      > = {
        method: 'post',
        url: queryParams?.url ?? SubscriptionUserRoute() + '/delete',
        params: queryParams?.params,
        list: chunk,
        headers: queryParams?.headers,
      };

      return queryParams?.batch
        ? queryParams.batch.addBatch<{ count: number }>(config)
        : getResponse<
            { count: number },
            Partial<SubscriptionUser> & { id: number }
          >(queryParams?.api ?? _client?.api, config);
    }),
  );
};

export const subscriptionUserUpdateOne = (
  id: number,
  data: Partial<SubscriptionUser>,
  queryParams?: QueryParams<Partial<SubscriptionUser>>,
): Promise<SubscriptionUser> => {
  const config: QueryParams<Partial<SubscriptionUser>> = {
    method: 'put',
    url: `${queryParams?.url ?? SubscriptionUserRoute()}/${id}`,
    params: queryParams?.params,
    data,
    headers: queryParams?.headers,
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<SubscriptionUser>(config)
    : getResponse<SubscriptionUser, Partial<SubscriptionUser>>(
        queryParams?.api ?? _client?.api,
        config,
      );
};

export const subscriptionUserUpdateMany = (
  data: (Partial<SubscriptionUser> & { id: number })[],
  queryParams?: QueryParamsWithList<Partial<SubscriptionUser> & { id: number }>,
): Promise<SubscriptionUser[][]> => {
  const chunks = chunkArray(data, 1000);
  return Promise.all(
    chunks.map((chunk) => {
      const config: QueryParamsWithList<
        Partial<SubscriptionUser> & { id: number }
      > = {
        method: 'post',
        url: queryParams?.url ?? SubscriptionUserRoute(),
        params: queryParams?.params,
        list: chunk,
        headers: queryParams?.headers,
      };

      return queryParams?.batch
        ? queryParams.batch.addBatch<SubscriptionUser[]>(config)
        : getResponse<
            SubscriptionUser[],
            Partial<SubscriptionUser> & { id: number }
          >(queryParams?.api ?? _client?.api, config);
    }),
  );
};

export const subscriptionUserCreateOne = (
  data: Partial<SubscriptionUser>,
  queryParams?: QueryParams<Partial<SubscriptionUser>>,
): Promise<SubscriptionUser> => {
  const config: QueryParams<Partial<SubscriptionUser>> = {
    method: 'post',
    url: queryParams?.url ?? SubscriptionUserRoute(),
    params: queryParams?.params,
    data,
    headers: queryParams?.headers,
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<SubscriptionUser>(config)
    : getResponse<SubscriptionUser, Partial<SubscriptionUser>>(
        queryParams?.api ?? _client?.api,
        config,
      );
};

export const subscriptionUserCreateMany = (
  data: Partial<SubscriptionUser>[],
  queryParams?: QueryParamsWithList<Partial<SubscriptionUser>>,
): Promise<SubscriptionUser[][]> => {
  const chunks = chunkArray(data, 1000);
  return Promise.all(
    chunks.map((chunk) => {
      const config: QueryParamsWithList<Partial<SubscriptionUser>> = {
        method: 'post',
        url: queryParams?.url ?? SubscriptionUserRoute(),
        params: queryParams?.params,
        list: chunk,
        headers: queryParams?.headers,
      };

      return queryParams?.batch
        ? queryParams.batch.addBatch<SubscriptionUser[]>(config)
        : getResponse<SubscriptionUser[], Partial<SubscriptionUser>>(
            queryParams?.api ?? _client?.api,
            config,
          );
    }),
  );
};
