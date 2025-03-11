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
  queryParams?: QueryParams<Notifications>,
): Promise<ResourceList<NotificationsApi>> => {
  const config: QueryParams<Notifications> = {
    method: 'get',
    url: queryParams?.url ?? NotificationsRoute(),
    params: queryParams?.params,
    cancelToken: queryParams?.cancelToken,
    headers: queryParams?.headers,
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<ResourceList<NotificationsApi>>(config)
    : getResponse<ResourceList<NotificationsApi>, Notifications>(
        queryParams?.api ?? _client?.api,
        config,
      );
};

export const notificationsGetOne = (
  id: string,
  queryParams?: QueryParams<Notifications>,
): Promise<NotificationsApi> => {
  const config: QueryParams<Notifications> = {
    method: 'get',
    url: `${queryParams?.url ?? NotificationsRoute()}/${id}`,
    params: queryParams?.params,
    cancelToken: queryParams?.cancelToken,
    headers: queryParams?.headers,
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<NotificationsApi>(config)
    : getResponse<NotificationsApi, Notifications>(
        queryParams?.api ?? _client?.api,
        config,
      );
};

export const notificationsDeleteOne = (
  id: string,
  queryParams?: QueryParams<Notifications>,
): Promise<MessageResponse> => {
  const config: QueryParams<Notifications> = {
    method: 'delete',
    url: `${queryParams?.url ?? NotificationsRoute()}/${id}`,
    params: queryParams?.params,
    headers: queryParams?.headers,
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<MessageResponse>(config)
    : getResponse<MessageResponse, Notifications>(
        queryParams?.api ?? _client?.api,
        config,
      );
};

export const notificationsDeleteMany = (
  data: (Partial<Notifications> & { id: string })[],
  queryParams?: QueryParamsWithList<Notifications>,
): Promise<{ count: number }[]> => {
  const chunks = chunkArray(data, 1000);
  return Promise.all(
    chunks.map((chunk) => {
      const config: QueryParamsWithList<Notifications> = {
        method: 'post',
        url: queryParams?.url ?? NotificationsRoute() + '/delete',
        params: queryParams?.params,
        list: chunk,
        headers: queryParams?.headers,
      };

      return queryParams?.batch
        ? queryParams.batch.addBatch<{ count: number }>(config)
        : getResponse<{ count: number }, Notifications>(
            queryParams?.api ?? _client?.api,
            config,
          );
    }),
  );
};

export const notificationsUpdateOne = (
  id: string,
  data: Partial<Notifications>,
  queryParams?: QueryParams<Notifications>,
): Promise<Notifications> => {
  const config: QueryParams<Notifications> = {
    method: 'put',
    url: `${queryParams?.url ?? NotificationsRoute()}/${id}`,
    params: queryParams?.params,
    data,
    headers: queryParams?.headers,
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<Notifications>(config)
    : getResponse<Notifications>(queryParams?.api ?? _client?.api, config);
};

export const notificationsUpdateMany = (
  data: (Partial<Notifications> & { id: string })[],
  queryParams?: QueryParamsWithList<Notifications>,
): Promise<Notifications[][]> => {
  const chunks = chunkArray(data, 1000);
  return Promise.all(
    chunks.map((chunk) => {
      const config: QueryParamsWithList<Notifications> = {
        method: 'post',
        url: queryParams?.url ?? NotificationsRoute(),
        params: queryParams?.params,
        list: chunk,
        headers: queryParams?.headers,
      };

      return queryParams?.batch
        ? queryParams.batch.addBatch<Notifications[]>(config)
        : getResponse<Notifications[], Notifications>(
            queryParams?.api ?? _client?.api,
            config,
          );
    }),
  );
};

export const notificationsCreateOne = (
  data: Partial<Notifications>,
  queryParams?: QueryParams<Notifications>,
): Promise<Notifications> => {
  const config: QueryParams<Notifications> = {
    method: 'post',
    url: queryParams?.url ?? NotificationsRoute(),
    params: queryParams?.params,
    data,
    headers: queryParams?.headers,
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<Notifications>(config)
    : getResponse<Notifications>(queryParams?.api ?? _client?.api, config);
};

export const notificationsCreateMany = (
  data: Partial<Notifications>[],
  queryParams?: QueryParamsWithList<Notifications>,
): Promise<Notifications[][]> => {
  const chunks = chunkArray(data, 1000);
  return Promise.all(
    chunks.map((chunk) => {
      const config: QueryParamsWithList<Notifications> = {
        method: 'post',
        url: queryParams?.url ?? NotificationsRoute(),
        params: queryParams?.params,
        list: chunk,
        headers: queryParams?.headers,
      };

      return queryParams?.batch
        ? queryParams.batch.addBatch<Notifications[]>(config)
        : getResponse<Notifications[], Notifications>(
            queryParams?.api ?? _client?.api,
            config,
          );
    }),
  );
};
