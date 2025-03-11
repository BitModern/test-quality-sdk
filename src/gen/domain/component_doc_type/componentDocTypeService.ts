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
import { ComponentDocTypeRoute } from '../../routes/Routes';
import type { ComponentDocType } from './ComponentDocType';
import type { ComponentDocTypeApi } from './ComponentDocTypeApi';

export const componentDocTypeGetMany = (
  queryParams?: QueryParams<ComponentDocType>,
): Promise<ResourceList<ComponentDocTypeApi>> => {
  const config: QueryParams<ComponentDocType> = {
    method: 'get',
    url: queryParams?.url ?? ComponentDocTypeRoute(),
    params: queryParams?.params,
    cancelToken: queryParams?.cancelToken,
    headers: queryParams?.headers,
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<ResourceList<ComponentDocTypeApi>>(config)
    : getResponse<ResourceList<ComponentDocTypeApi>, ComponentDocType>(
        queryParams?.api ?? _client?.api,
        config,
      );
};

export const componentDocTypeGetOne = (
  id: number,
  queryParams?: QueryParams<ComponentDocType>,
): Promise<ComponentDocTypeApi> => {
  const config: QueryParams<ComponentDocType> = {
    method: 'get',
    url: `${queryParams?.url ?? ComponentDocTypeRoute()}/${id}`,
    params: queryParams?.params,
    cancelToken: queryParams?.cancelToken,
    headers: queryParams?.headers,
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<ComponentDocTypeApi>(config)
    : getResponse<ComponentDocTypeApi, ComponentDocType>(
        queryParams?.api ?? _client?.api,
        config,
      );
};

export const componentDocTypeDeleteOne = (
  id: number,
  queryParams?: QueryParams<ComponentDocType>,
): Promise<MessageResponse> => {
  const config: QueryParams<ComponentDocType> = {
    method: 'delete',
    url: `${queryParams?.url ?? ComponentDocTypeRoute()}/${id}`,
    params: queryParams?.params,
    headers: queryParams?.headers,
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<MessageResponse>(config)
    : getResponse<MessageResponse, ComponentDocType>(
        queryParams?.api ?? _client?.api,
        config,
      );
};

export const componentDocTypeDeleteMany = (
  data: (Partial<ComponentDocType> & { id: number })[],
  queryParams?: QueryParamsWithList<ComponentDocType>,
): Promise<{ count: number }[]> => {
  const chunks = chunkArray(data, 1000);
  return Promise.all(
    chunks.map((chunk) => {
      const config: QueryParamsWithList<ComponentDocType> = {
        method: 'post',
        url: queryParams?.url ?? ComponentDocTypeRoute() + '/delete',
        params: queryParams?.params,
        list: chunk,
        headers: queryParams?.headers,
      };

      return queryParams?.batch
        ? queryParams.batch.addBatch<{ count: number }>(config)
        : getResponse<{ count: number }, ComponentDocType>(
            queryParams?.api ?? _client?.api,
            config,
          );
    }),
  );
};

export const componentDocTypeUpdateOne = (
  id: number,
  data: Partial<ComponentDocType>,
  queryParams?: QueryParams<ComponentDocType>,
): Promise<ComponentDocType> => {
  const config: QueryParams<ComponentDocType> = {
    method: 'put',
    url: `${queryParams?.url ?? ComponentDocTypeRoute()}/${id}`,
    params: queryParams?.params,
    data,
    headers: queryParams?.headers,
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<ComponentDocType>(config)
    : getResponse<ComponentDocType>(queryParams?.api ?? _client?.api, config);
};

export const componentDocTypeUpdateMany = (
  data: (Partial<ComponentDocType> & { id: number })[],
  queryParams?: QueryParamsWithList<ComponentDocType>,
): Promise<ComponentDocType[][]> => {
  const chunks = chunkArray(data, 1000);
  return Promise.all(
    chunks.map((chunk) => {
      const config: QueryParamsWithList<ComponentDocType> = {
        method: 'post',
        url: queryParams?.url ?? ComponentDocTypeRoute(),
        params: queryParams?.params,
        list: chunk,
        headers: queryParams?.headers,
      };

      return queryParams?.batch
        ? queryParams.batch.addBatch<ComponentDocType[]>(config)
        : getResponse<ComponentDocType[], ComponentDocType>(
            queryParams?.api ?? _client?.api,
            config,
          );
    }),
  );
};

export const componentDocTypeCreateOne = (
  data: Partial<ComponentDocType>,
  queryParams?: QueryParams<ComponentDocType>,
): Promise<ComponentDocType> => {
  const config: QueryParams<ComponentDocType> = {
    method: 'post',
    url: queryParams?.url ?? ComponentDocTypeRoute(),
    params: queryParams?.params,
    data,
    headers: queryParams?.headers,
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<ComponentDocType>(config)
    : getResponse<ComponentDocType>(queryParams?.api ?? _client?.api, config);
};

export const componentDocTypeCreateMany = (
  data: Partial<ComponentDocType>[],
  queryParams?: QueryParamsWithList<ComponentDocType>,
): Promise<ComponentDocType[][]> => {
  const chunks = chunkArray(data, 1000);
  return Promise.all(
    chunks.map((chunk) => {
      const config: QueryParamsWithList<ComponentDocType> = {
        method: 'post',
        url: queryParams?.url ?? ComponentDocTypeRoute(),
        params: queryParams?.params,
        list: chunk,
        headers: queryParams?.headers,
      };

      return queryParams?.batch
        ? queryParams.batch.addBatch<ComponentDocType[]>(config)
        : getResponse<ComponentDocType[], ComponentDocType>(
            queryParams?.api ?? _client?.api,
            config,
          );
    }),
  );
};
