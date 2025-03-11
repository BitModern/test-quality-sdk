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
import { IntegrationRoute } from '../../routes/Routes';
import type { Integration } from './Integration';
import type { IntegrationApi } from './IntegrationApi';

export const integrationGetMany = (
  queryParams?: QueryParams<Partial<Integration>>,
): Promise<ResourceList<IntegrationApi>> => {
  const config: QueryParams<Partial<Integration>> = {
    method: 'get',
    url: queryParams?.url ?? IntegrationRoute(),
    params: queryParams?.params,
    cancelToken: queryParams?.cancelToken,
    headers: queryParams?.headers,
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<ResourceList<IntegrationApi>>(config)
    : getResponse<ResourceList<IntegrationApi>, Partial<Integration>>(
        queryParams?.api ?? _client?.api,
        config,
      );
};

export const integrationGetOne = (
  id: number,
  queryParams?: QueryParams<Partial<Integration>>,
): Promise<IntegrationApi> => {
  const config: QueryParams<Partial<Integration>> = {
    method: 'get',
    url: `${queryParams?.url ?? IntegrationRoute()}/${id}`,
    params: queryParams?.params,
    cancelToken: queryParams?.cancelToken,
    headers: queryParams?.headers,
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<IntegrationApi>(config)
    : getResponse<IntegrationApi, Partial<Integration>>(
        queryParams?.api ?? _client?.api,
        config,
      );
};

export const integrationDeleteOne = (
  id: number,
  queryParams?: QueryParams<Partial<Integration>>,
): Promise<MessageResponse> => {
  const config: QueryParams<Partial<Integration>> = {
    method: 'delete',
    url: `${queryParams?.url ?? IntegrationRoute()}/${id}`,
    params: queryParams?.params,
    headers: queryParams?.headers,
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<MessageResponse>(config)
    : getResponse<MessageResponse, Partial<Integration>>(
        queryParams?.api ?? _client?.api,
        config,
      );
};

export const integrationDeleteMany = (
  data: (Partial<Integration> & { id: number })[],
  queryParams?: QueryParamsWithList<Partial<Integration> & { id: number }>,
): Promise<{ count: number }[]> => {
  const chunks = chunkArray(data, 1000);
  return Promise.all(
    chunks.map((chunk) => {
      const config: QueryParamsWithList<Partial<Integration> & { id: number }> =
        {
          method: 'post',
          url: queryParams?.url ?? IntegrationRoute() + '/delete',
          params: queryParams?.params,
          list: chunk,
          headers: queryParams?.headers,
        };

      return queryParams?.batch
        ? queryParams.batch.addBatch<{ count: number }>(config)
        : getResponse<{ count: number }, Partial<Integration> & { id: number }>(
            queryParams?.api ?? _client?.api,
            config,
          );
    }),
  );
};

export const integrationUpdateOne = (
  id: number,
  data: Partial<Integration>,
  queryParams?: QueryParams<Partial<Integration>>,
): Promise<Integration> => {
  const config: QueryParams<Partial<Integration>> = {
    method: 'put',
    url: `${queryParams?.url ?? IntegrationRoute()}/${id}`,
    params: queryParams?.params,
    data,
    headers: queryParams?.headers,
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<Integration>(config)
    : getResponse<Integration, Partial<Integration>>(
        queryParams?.api ?? _client?.api,
        config,
      );
};

export const integrationUpdateMany = (
  data: (Partial<Integration> & { id: number })[],
  queryParams?: QueryParamsWithList<Partial<Integration> & { id: number }>,
): Promise<Integration[][]> => {
  const chunks = chunkArray(data, 1000);
  return Promise.all(
    chunks.map((chunk) => {
      const config: QueryParamsWithList<Partial<Integration> & { id: number }> =
        {
          method: 'post',
          url: queryParams?.url ?? IntegrationRoute(),
          params: queryParams?.params,
          list: chunk,
          headers: queryParams?.headers,
        };

      return queryParams?.batch
        ? queryParams.batch.addBatch<Integration[]>(config)
        : getResponse<Integration[], Partial<Integration> & { id: number }>(
            queryParams?.api ?? _client?.api,
            config,
          );
    }),
  );
};

export const integrationCreateOne = (
  data: Partial<Integration>,
  queryParams?: QueryParams<Partial<Integration>>,
): Promise<Integration> => {
  const config: QueryParams<Partial<Integration>> = {
    method: 'post',
    url: queryParams?.url ?? IntegrationRoute(),
    params: queryParams?.params,
    data,
    headers: queryParams?.headers,
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<Integration>(config)
    : getResponse<Integration, Partial<Integration>>(
        queryParams?.api ?? _client?.api,
        config,
      );
};

export const integrationCreateMany = (
  data: Partial<Integration>[],
  queryParams?: QueryParamsWithList<Partial<Integration>>,
): Promise<Integration[][]> => {
  const chunks = chunkArray(data, 1000);
  return Promise.all(
    chunks.map((chunk) => {
      const config: QueryParamsWithList<Partial<Integration>> = {
        method: 'post',
        url: queryParams?.url ?? IntegrationRoute(),
        params: queryParams?.params,
        list: chunk,
        headers: queryParams?.headers,
      };

      return queryParams?.batch
        ? queryParams.batch.addBatch<Integration[]>(config)
        : getResponse<Integration[], Partial<Integration>>(
            queryParams?.api ?? _client?.api,
            config,
          );
    }),
  );
};
