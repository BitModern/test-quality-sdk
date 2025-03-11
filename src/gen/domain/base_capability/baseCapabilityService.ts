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
import { BaseCapabilityRoute } from '../../routes/Routes';
import type { BaseCapability } from './BaseCapability';
import type { BaseCapabilityApi } from './BaseCapabilityApi';

export const baseCapabilityGetMany = (
  queryParams?: QueryParams<Partial<BaseCapability>>,
): Promise<ResourceList<BaseCapabilityApi>> => {
  const config: QueryParams<Partial<BaseCapability>> = {
    method: 'get',
    url: queryParams?.url ?? BaseCapabilityRoute(),
    params: queryParams?.params,
    cancelToken: queryParams?.cancelToken,
    headers: queryParams?.headers,
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<ResourceList<BaseCapabilityApi>>(config)
    : getResponse<ResourceList<BaseCapabilityApi>, Partial<BaseCapability>>(
        queryParams?.api ?? _client?.api,
        config,
      );
};

export const baseCapabilityGetOne = (
  id: number,
  queryParams?: QueryParams<Partial<BaseCapability>>,
): Promise<BaseCapabilityApi> => {
  const config: QueryParams<Partial<BaseCapability>> = {
    method: 'get',
    url: `${queryParams?.url ?? BaseCapabilityRoute()}/${id}`,
    params: queryParams?.params,
    cancelToken: queryParams?.cancelToken,
    headers: queryParams?.headers,
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<BaseCapabilityApi>(config)
    : getResponse<BaseCapabilityApi, Partial<BaseCapability>>(
        queryParams?.api ?? _client?.api,
        config,
      );
};

export const baseCapabilityDeleteOne = (
  id: number,
  queryParams?: QueryParams<Partial<BaseCapability>>,
): Promise<MessageResponse> => {
  const config: QueryParams<Partial<BaseCapability>> = {
    method: 'delete',
    url: `${queryParams?.url ?? BaseCapabilityRoute()}/${id}`,
    params: queryParams?.params,
    headers: queryParams?.headers,
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<MessageResponse>(config)
    : getResponse<MessageResponse, Partial<BaseCapability>>(
        queryParams?.api ?? _client?.api,
        config,
      );
};

export const baseCapabilityDeleteMany = (
  data: (Partial<BaseCapability> & { id: number })[],
  queryParams?: QueryParamsWithList<Partial<BaseCapability> & { id: number }>,
): Promise<{ count: number }[]> => {
  const chunks = chunkArray(data, 1000);
  return Promise.all(
    chunks.map((chunk) => {
      const config: QueryParamsWithList<
        Partial<BaseCapability> & { id: number }
      > = {
        method: 'post',
        url: queryParams?.url ?? BaseCapabilityRoute() + '/delete',
        params: queryParams?.params,
        list: chunk,
        headers: queryParams?.headers,
      };

      return queryParams?.batch
        ? queryParams.batch.addBatch<{ count: number }>(config)
        : getResponse<
            { count: number },
            Partial<BaseCapability> & { id: number }
          >(queryParams?.api ?? _client?.api, config);
    }),
  );
};

export const baseCapabilityUpdateOne = (
  id: number,
  data: Partial<BaseCapability>,
  queryParams?: QueryParams<Partial<BaseCapability>>,
): Promise<BaseCapability> => {
  const config: QueryParams<Partial<BaseCapability>> = {
    method: 'put',
    url: `${queryParams?.url ?? BaseCapabilityRoute()}/${id}`,
    params: queryParams?.params,
    data,
    headers: queryParams?.headers,
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<BaseCapability>(config)
    : getResponse<BaseCapability, Partial<BaseCapability>>(
        queryParams?.api ?? _client?.api,
        config,
      );
};

export const baseCapabilityUpdateMany = (
  data: (Partial<BaseCapability> & { id: number })[],
  queryParams?: QueryParamsWithList<Partial<BaseCapability> & { id: number }>,
): Promise<BaseCapability[][]> => {
  const chunks = chunkArray(data, 1000);
  return Promise.all(
    chunks.map((chunk) => {
      const config: QueryParamsWithList<
        Partial<BaseCapability> & { id: number }
      > = {
        method: 'post',
        url: queryParams?.url ?? BaseCapabilityRoute(),
        params: queryParams?.params,
        list: chunk,
        headers: queryParams?.headers,
      };

      return queryParams?.batch
        ? queryParams.batch.addBatch<BaseCapability[]>(config)
        : getResponse<
            BaseCapability[],
            Partial<BaseCapability> & { id: number }
          >(queryParams?.api ?? _client?.api, config);
    }),
  );
};

export const baseCapabilityCreateOne = (
  data: Partial<BaseCapability>,
  queryParams?: QueryParams<Partial<BaseCapability>>,
): Promise<BaseCapability> => {
  const config: QueryParams<Partial<BaseCapability>> = {
    method: 'post',
    url: queryParams?.url ?? BaseCapabilityRoute(),
    params: queryParams?.params,
    data,
    headers: queryParams?.headers,
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<BaseCapability>(config)
    : getResponse<BaseCapability, Partial<BaseCapability>>(
        queryParams?.api ?? _client?.api,
        config,
      );
};

export const baseCapabilityCreateMany = (
  data: Partial<BaseCapability>[],
  queryParams?: QueryParamsWithList<Partial<BaseCapability>>,
): Promise<BaseCapability[][]> => {
  const chunks = chunkArray(data, 1000);
  return Promise.all(
    chunks.map((chunk) => {
      const config: QueryParamsWithList<Partial<BaseCapability>> = {
        method: 'post',
        url: queryParams?.url ?? BaseCapabilityRoute(),
        params: queryParams?.params,
        list: chunk,
        headers: queryParams?.headers,
      };

      return queryParams?.batch
        ? queryParams.batch.addBatch<BaseCapability[]>(config)
        : getResponse<BaseCapability[], Partial<BaseCapability>>(
            queryParams?.api ?? _client?.api,
            config,
          );
    }),
  );
};
