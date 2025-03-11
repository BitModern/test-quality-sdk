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
import { BaseIntegrationRoute } from '../../routes/Routes';
import type { BaseIntegration } from './BaseIntegration';
import type { BaseIntegrationApi } from './BaseIntegrationApi';

export const baseIntegrationGetMany = (
  queryParams?: QueryParams<Partial<BaseIntegration>>,
): Promise<ResourceList<BaseIntegrationApi>> => {
  const config: QueryParams<Partial<BaseIntegration>> = {
    method: 'get',
    url: queryParams?.url ?? BaseIntegrationRoute(),
    params: queryParams?.params,
    cancelToken: queryParams?.cancelToken,
    headers: queryParams?.headers,
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<ResourceList<BaseIntegrationApi>>(config)
    : getResponse<ResourceList<BaseIntegrationApi>, Partial<BaseIntegration>>(
        queryParams?.api ?? _client?.api,
        config,
      );
};

export const baseIntegrationGetOne = (
  id: number,
  queryParams?: QueryParams<Partial<BaseIntegration>>,
): Promise<BaseIntegrationApi> => {
  const config: QueryParams<Partial<BaseIntegration>> = {
    method: 'get',
    url: `${queryParams?.url ?? BaseIntegrationRoute()}/${id}`,
    params: queryParams?.params,
    cancelToken: queryParams?.cancelToken,
    headers: queryParams?.headers,
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<BaseIntegrationApi>(config)
    : getResponse<BaseIntegrationApi, Partial<BaseIntegration>>(
        queryParams?.api ?? _client?.api,
        config,
      );
};

export const baseIntegrationDeleteOne = (
  id: number,
  queryParams?: QueryParams<Partial<BaseIntegration>>,
): Promise<MessageResponse> => {
  const config: QueryParams<Partial<BaseIntegration>> = {
    method: 'delete',
    url: `${queryParams?.url ?? BaseIntegrationRoute()}/${id}`,
    params: queryParams?.params,
    headers: queryParams?.headers,
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<MessageResponse>(config)
    : getResponse<MessageResponse, Partial<BaseIntegration>>(
        queryParams?.api ?? _client?.api,
        config,
      );
};

export const baseIntegrationDeleteMany = (
  data: (Partial<BaseIntegration> & { id: number })[],
  queryParams?: QueryParamsWithList<Partial<BaseIntegration> & { id: number }>,
): Promise<{ count: number }[]> => {
  const chunks = chunkArray(data, 1000);
  return Promise.all(
    chunks.map((chunk) => {
      const config: QueryParamsWithList<
        Partial<BaseIntegration> & { id: number }
      > = {
        method: 'post',
        url: queryParams?.url ?? BaseIntegrationRoute() + '/delete',
        params: queryParams?.params,
        list: chunk,
        headers: queryParams?.headers,
      };

      return queryParams?.batch
        ? queryParams.batch.addBatch<{ count: number }>(config)
        : getResponse<
            { count: number },
            Partial<BaseIntegration> & { id: number }
          >(queryParams?.api ?? _client?.api, config);
    }),
  );
};

export const baseIntegrationUpdateOne = (
  id: number,
  data: Partial<BaseIntegration>,
  queryParams?: QueryParams<Partial<BaseIntegration>>,
): Promise<BaseIntegration> => {
  const config: QueryParams<Partial<BaseIntegration>> = {
    method: 'put',
    url: `${queryParams?.url ?? BaseIntegrationRoute()}/${id}`,
    params: queryParams?.params,
    data,
    headers: queryParams?.headers,
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<BaseIntegration>(config)
    : getResponse<BaseIntegration, Partial<BaseIntegration>>(
        queryParams?.api ?? _client?.api,
        config,
      );
};

export const baseIntegrationUpdateMany = (
  data: (Partial<BaseIntegration> & { id: number })[],
  queryParams?: QueryParamsWithList<Partial<BaseIntegration> & { id: number }>,
): Promise<BaseIntegration[][]> => {
  const chunks = chunkArray(data, 1000);
  return Promise.all(
    chunks.map((chunk) => {
      const config: QueryParamsWithList<
        Partial<BaseIntegration> & { id: number }
      > = {
        method: 'post',
        url: queryParams?.url ?? BaseIntegrationRoute(),
        params: queryParams?.params,
        list: chunk,
        headers: queryParams?.headers,
      };

      return queryParams?.batch
        ? queryParams.batch.addBatch<BaseIntegration[]>(config)
        : getResponse<
            BaseIntegration[],
            Partial<BaseIntegration> & { id: number }
          >(queryParams?.api ?? _client?.api, config);
    }),
  );
};

export const baseIntegrationCreateOne = (
  data: Partial<BaseIntegration>,
  queryParams?: QueryParams<Partial<BaseIntegration>>,
): Promise<BaseIntegration> => {
  const config: QueryParams<Partial<BaseIntegration>> = {
    method: 'post',
    url: queryParams?.url ?? BaseIntegrationRoute(),
    params: queryParams?.params,
    data,
    headers: queryParams?.headers,
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<BaseIntegration>(config)
    : getResponse<BaseIntegration, Partial<BaseIntegration>>(
        queryParams?.api ?? _client?.api,
        config,
      );
};

export const baseIntegrationCreateMany = (
  data: Partial<BaseIntegration>[],
  queryParams?: QueryParamsWithList<Partial<BaseIntegration>>,
): Promise<BaseIntegration[][]> => {
  const chunks = chunkArray(data, 1000);
  return Promise.all(
    chunks.map((chunk) => {
      const config: QueryParamsWithList<Partial<BaseIntegration>> = {
        method: 'post',
        url: queryParams?.url ?? BaseIntegrationRoute(),
        params: queryParams?.params,
        list: chunk,
        headers: queryParams?.headers,
      };

      return queryParams?.batch
        ? queryParams.batch.addBatch<BaseIntegration[]>(config)
        : getResponse<BaseIntegration[], Partial<BaseIntegration>>(
            queryParams?.api ?? _client?.api,
            config,
          );
    }),
  );
};
