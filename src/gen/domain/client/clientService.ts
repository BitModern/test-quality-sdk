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
  queryParams?: QueryParams<Partial<Client>>,
): Promise<ResourceList<ClientApi>> => {
  const config: QueryParams<Partial<Client>> = {
    method: 'get',
    url: queryParams?.url ?? ClientRoute(),
    params: queryParams?.params,
    cancelToken: queryParams?.cancelToken,
    headers: queryParams?.headers,
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<ResourceList<ClientApi>>(config)
    : getResponse<ResourceList<ClientApi>, Partial<Client>>(
        queryParams?.api ?? _client?.api,
        config,
      );
};

export const clientGetOne = (
  id: number,
  queryParams?: QueryParams<Partial<Client>>,
): Promise<ClientApi> => {
  const config: QueryParams<Partial<Client>> = {
    method: 'get',
    url: `${queryParams?.url ?? ClientRoute()}/${id}`,
    params: queryParams?.params,
    cancelToken: queryParams?.cancelToken,
    headers: queryParams?.headers,
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<ClientApi>(config)
    : getResponse<ClientApi, Partial<Client>>(
        queryParams?.api ?? _client?.api,
        config,
      );
};

export const clientDeleteOne = (
  id: number,
  queryParams?: QueryParams<Partial<Client>>,
): Promise<MessageResponse> => {
  const config: QueryParams<Partial<Client>> = {
    method: 'delete',
    url: `${queryParams?.url ?? ClientRoute()}/${id}`,
    params: queryParams?.params,
    headers: queryParams?.headers,
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<MessageResponse>(config)
    : getResponse<MessageResponse, Partial<Client>>(
        queryParams?.api ?? _client?.api,
        config,
      );
};

export const clientDeleteMany = (
  data: (Partial<Client> & { id: number })[],
  queryParams?: QueryParamsWithList<Partial<Client> & { id: number }>,
): Promise<{ count: number }[]> => {
  const chunks = chunkArray(data, 1000);
  return Promise.all(
    chunks.map((chunk) => {
      const config: QueryParamsWithList<Partial<Client> & { id: number }> = {
        method: 'post',
        url: queryParams?.url ?? ClientRoute() + '/delete',
        params: queryParams?.params,
        list: chunk,
        headers: queryParams?.headers,
      };

      return queryParams?.batch
        ? queryParams.batch.addBatch<{ count: number }>(config)
        : getResponse<{ count: number }, Partial<Client> & { id: number }>(
            queryParams?.api ?? _client?.api,
            config,
          );
    }),
  );
};

export const clientUpdateOne = (
  id: number,
  data: Partial<Client>,
  queryParams?: QueryParams<Partial<Client>>,
): Promise<Client> => {
  const config: QueryParams<Partial<Client>> = {
    method: 'put',
    url: `${queryParams?.url ?? ClientRoute()}/${id}`,
    params: queryParams?.params,
    data,
    headers: queryParams?.headers,
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<Client>(config)
    : getResponse<Client, Partial<Client>>(
        queryParams?.api ?? _client?.api,
        config,
      );
};

export const clientUpdateMany = (
  data: (Partial<Client> & { id: number })[],
  queryParams?: QueryParamsWithList<Partial<Client> & { id: number }>,
): Promise<Client[][]> => {
  const chunks = chunkArray(data, 1000);
  return Promise.all(
    chunks.map((chunk) => {
      const config: QueryParamsWithList<Partial<Client> & { id: number }> = {
        method: 'post',
        url: queryParams?.url ?? ClientRoute(),
        params: queryParams?.params,
        list: chunk,
        headers: queryParams?.headers,
      };

      return queryParams?.batch
        ? queryParams.batch.addBatch<Client[]>(config)
        : getResponse<Client[], Partial<Client> & { id: number }>(
            queryParams?.api ?? _client?.api,
            config,
          );
    }),
  );
};

export const clientCreateOne = (
  data: Partial<Client>,
  queryParams?: QueryParams<Partial<Client>>,
): Promise<Client> => {
  const config: QueryParams<Partial<Client>> = {
    method: 'post',
    url: queryParams?.url ?? ClientRoute(),
    params: queryParams?.params,
    data,
    headers: queryParams?.headers,
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<Client>(config)
    : getResponse<Client, Partial<Client>>(
        queryParams?.api ?? _client?.api,
        config,
      );
};

export const clientCreateMany = (
  data: Partial<Client>[],
  queryParams?: QueryParamsWithList<Partial<Client>>,
): Promise<Client[][]> => {
  const chunks = chunkArray(data, 1000);
  return Promise.all(
    chunks.map((chunk) => {
      const config: QueryParamsWithList<Partial<Client>> = {
        method: 'post',
        url: queryParams?.url ?? ClientRoute(),
        params: queryParams?.params,
        list: chunk,
        headers: queryParams?.headers,
      };

      return queryParams?.batch
        ? queryParams.batch.addBatch<Client[]>(config)
        : getResponse<Client[], Partial<Client>>(
            queryParams?.api ?? _client?.api,
            config,
          );
    }),
  );
};
