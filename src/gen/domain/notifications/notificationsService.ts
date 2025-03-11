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
import { NotificationsRoute } from '../../routes/Routes';
import type { Notifications } from './Notifications';
import type { NotificationsApi } from './NotificationsApi';

export const notificationsGetMany = (
  queryParams?: QueryParams<Partial<Notifications>>,
): Promise<ResourceList<NotificationsApi>> => {
  const config: QueryParams<Partial<Notifications>> = {
    method: 'get',
    url: queryParams?.url ?? NotificationsRoute(),
    params: queryParams?.params,
    cancelToken: queryParams?.cancelToken,
    headers: queryParams?.headers,
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<ResourceList<NotificationsApi>>(config)
    : getResponse<ResourceList<NotificationsApi>, Partial<Notifications>>(
        queryParams?.api ?? _client?.api,
        config,
      );
};

export const notificationsGetOne = (
  id: string,
  queryParams?: QueryParams<Partial<Notifications>>,
): Promise<NotificationsApi> => {
  const config: QueryParams<Partial<Notifications>> = {
    method: 'get',
    url: `${queryParams?.url ?? NotificationsRoute()}/${id}`,
    params: queryParams?.params,
    cancelToken: queryParams?.cancelToken,
    headers: queryParams?.headers,
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<NotificationsApi>(config)
    : getResponse<NotificationsApi, Partial<Notifications>>(
        queryParams?.api ?? _client?.api,
        config,
      );
};

export const notificationsDeleteOne = (
  id: string,
  queryParams?: QueryParams<Partial<Notifications>>,
): Promise<MessageResponse> => {
  const config: QueryParams<Partial<Notifications>> = {
    method: 'delete',
    url: `${queryParams?.url ?? NotificationsRoute()}/${id}`,
    params: queryParams?.params,
    headers: queryParams?.headers,
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<MessageResponse>(config)
    : getResponse<MessageResponse, Partial<Notifications>>(
        queryParams?.api ?? _client?.api,
        config,
      );
};

export const notificationsDeleteMany = (
  data: (Partial<Notifications> & { id: string })[],
  queryParams?: QueryParamsWithList<Partial<Notifications> & { id: string }>,
): Promise<{ count: number }[]> => {
  const chunks = chunkArray(data, 1000);
  return Promise.all(
    chunks.map((chunk) => {
      const config: QueryParamsWithList<
        Partial<Notifications> & { id: string }
      > = {
        method: 'post',
        url: queryParams?.url ?? NotificationsRoute() + '/delete',
        params: queryParams?.params,
        list: chunk,
        headers: queryParams?.headers,
      };

      return queryParams?.batch
        ? queryParams.batch.addBatch<{ count: number }>(config)
        : getResponse<
            { count: number },
            Partial<Notifications> & { id: string }
          >(queryParams?.api ?? _client?.api, config);
    }),
  );
};

export const notificationsUpdateOne = (
  id: string,
  data: Partial<Notifications>,
  queryParams?: QueryParams<Partial<Notifications>>,
): Promise<Notifications> => {
  const config: QueryParams<Partial<Notifications>> = {
    method: 'put',
    url: `${queryParams?.url ?? NotificationsRoute()}/${id}`,
    params: queryParams?.params,
    data,
    headers: queryParams?.headers,
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<Notifications>(config)
    : getResponse<Notifications, Partial<Notifications>>(
        queryParams?.api ?? _client?.api,
        config,
      );
};

export const notificationsUpdateMany = (
  data: (Partial<Notifications> & { id: string })[],
  queryParams?: QueryParamsWithList<Partial<Notifications> & { id: string }>,
): Promise<Notifications[][]> => {
  const chunks = chunkArray(data, 1000);
  return Promise.all(
    chunks.map((chunk) => {
      const config: QueryParamsWithList<
        Partial<Notifications> & { id: string }
      > = {
        method: 'post',
        url: queryParams?.url ?? NotificationsRoute(),
        params: queryParams?.params,
        list: chunk,
        headers: queryParams?.headers,
      };

      return queryParams?.batch
        ? queryParams.batch.addBatch<Notifications[]>(config)
        : getResponse<Notifications[], Partial<Notifications> & { id: string }>(
            queryParams?.api ?? _client?.api,
            config,
          );
    }),
  );
};

export const notificationsCreateOne = (
  data: Partial<Notifications>,
  queryParams?: QueryParams<Partial<Notifications>>,
): Promise<Notifications> => {
  const config: QueryParams<Partial<Notifications>> = {
    method: 'post',
    url: queryParams?.url ?? NotificationsRoute(),
    params: queryParams?.params,
    data,
    headers: queryParams?.headers,
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<Notifications>(config)
    : getResponse<Notifications, Partial<Notifications>>(
        queryParams?.api ?? _client?.api,
        config,
      );
};

export const notificationsCreateMany = (
  data: Partial<Notifications>[],
  queryParams?: QueryParamsWithList<Partial<Notifications>>,
): Promise<Notifications[][]> => {
  const chunks = chunkArray(data, 1000);
  return Promise.all(
    chunks.map((chunk) => {
      const config: QueryParamsWithList<Partial<Notifications>> = {
        method: 'post',
        url: queryParams?.url ?? NotificationsRoute(),
        params: queryParams?.params,
        list: chunk,
        headers: queryParams?.headers,
      };

      return queryParams?.batch
        ? queryParams.batch.addBatch<Notifications[]>(config)
        : getResponse<Notifications[], Partial<Notifications>>(
            queryParams?.api ?? _client?.api,
            config,
          );
    }),
  );
};
