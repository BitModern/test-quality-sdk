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
import { ClientRoute } from '../../routes/Routes';
import type { Client } from './Client';
import type { ClientApi } from './ClientApi';

export const clientGetMany = (
  queryParams?: QueryParams<Client>,
): Promise<ResourceList<ClientApi>> => {
  const config: QueryParams<Client> = {
    method: 'get',
    url: queryParams?.url ?? ClientRoute(),
    params: queryParams?.params,
    cancelToken: queryParams?.cancelToken,
    headers: queryParams?.headers,
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<ResourceList<ClientApi>>(config)
    : getResponse<ResourceList<ClientApi>, Client>(
        queryParams?.api ?? _client?.api,
        config,
      );
};

export const clientGetOne = (
  id: number,
  queryParams?: QueryParams<Client>,
): Promise<ClientApi> => {
  const config: QueryParams<Client> = {
    method: 'get',
    url: `${queryParams?.url ?? ClientRoute()}/${id}`,
    params: queryParams?.params,
    cancelToken: queryParams?.cancelToken,
    headers: queryParams?.headers,
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<ClientApi>(config)
    : getResponse<ClientApi, Client>(queryParams?.api ?? _client?.api, config);
};

export const clientDeleteOne = (
  id: number,
  queryParams?: QueryParams<Client>,
): Promise<MessageResponse> => {
  const config: QueryParams<Client> = {
    method: 'delete',
    url: `${queryParams?.url ?? ClientRoute()}/${id}`,
    params: queryParams?.params,
    headers: queryParams?.headers,
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<MessageResponse>(config)
    : getResponse<MessageResponse, Client>(
        queryParams?.api ?? _client?.api,
        config,
      );
};

export const clientDeleteMany = (
  data: Partial<Client>[],
  queryParams?: QueryParamsWithList<Client>,
): Promise<{ count: number }[]> => {
  const chunks = chunkArray(data, 1000);
  return Promise.all(
    chunks.map((chunk) => {
      const config: QueryParamsWithList<Client> = {
        method: 'post',
        url: queryParams?.url ?? ClientRoute() + '/delete',
        params: queryParams?.params,
        list: chunk,
        headers: queryParams?.headers,
      };

      return queryParams?.batch
        ? queryParams.batch.addBatch<{ count: number }>(config)
        : getResponse<{ count: number }, Client>(
            queryParams?.api ?? _client?.api,
            config,
          );
    }),
  );
};

export const clientUpdateOne = (
  id: number,
  data: Partial<Client>,
  queryParams?: QueryParams<Client>,
): Promise<Client> => {
  const config: QueryParams<Client> = {
    method: 'put',
    url: `${queryParams?.url ?? ClientRoute()}/${id}`,
    params: queryParams?.params,
    data,
    headers: queryParams?.headers,
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<Client>(config)
    : getResponse<Client>(queryParams?.api ?? _client?.api, config);
};

export const clientCreateOne = (
  data: Partial<Client>,
  queryParams?: QueryParams<Client>,
): Promise<Client> => {
  const config: QueryParams<Client> = {
    method: 'post',
    url: queryParams?.url ?? ClientRoute(),
    params: queryParams?.params,
    data,
    headers: queryParams?.headers,
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<Client>(config)
    : getResponse<Client>(queryParams?.api ?? _client?.api, config);
};

export const clientCreateMany = (
  data: Partial<Client>[],
  queryParams?: QueryParamsWithList<Client>,
): Promise<Client[][]> => {
  const chunks = chunkArray(data, 1000);
  return Promise.all(
    chunks.map((chunk) => {
      const config: QueryParamsWithList<Client> = {
        method: 'post',
        url: queryParams?.url ?? ClientRoute(),
        params: queryParams?.params,
        list: chunk,
        headers: queryParams?.headers,
      };

      return queryParams?.batch
        ? queryParams.batch.addBatch<Client[]>(config)
        : getResponse<Client[], Client>(
            queryParams?.api ?? _client?.api,
            config,
          );
    }),
  );
};
