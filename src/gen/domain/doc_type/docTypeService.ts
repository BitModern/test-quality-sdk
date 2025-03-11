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
import { DocTypeRoute } from '../../routes/Routes';
import type { DocType } from './DocType';
import type { DocTypeApi } from './DocTypeApi';

export const docTypeGetMany = (
  queryParams?: QueryParams<Partial<DocType>>,
): Promise<ResourceList<DocTypeApi>> => {
  const config: QueryParams<Partial<DocType>> = {
    method: 'get',
    url: queryParams?.url ?? DocTypeRoute(),
    params: queryParams?.params,
    cancelToken: queryParams?.cancelToken,
    headers: queryParams?.headers,
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<ResourceList<DocTypeApi>>(config)
    : getResponse<ResourceList<DocTypeApi>, Partial<DocType>>(
        queryParams?.api ?? _client?.api,
        config,
      );
};

export const docTypeGetOne = (
  id: number,
  queryParams?: QueryParams<Partial<DocType>>,
): Promise<DocTypeApi> => {
  const config: QueryParams<Partial<DocType>> = {
    method: 'get',
    url: `${queryParams?.url ?? DocTypeRoute()}/${id}`,
    params: queryParams?.params,
    cancelToken: queryParams?.cancelToken,
    headers: queryParams?.headers,
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<DocTypeApi>(config)
    : getResponse<DocTypeApi, Partial<DocType>>(
        queryParams?.api ?? _client?.api,
        config,
      );
};

export const docTypeDeleteOne = (
  id: number,
  queryParams?: QueryParams<Partial<DocType>>,
): Promise<MessageResponse> => {
  const config: QueryParams<Partial<DocType>> = {
    method: 'delete',
    url: `${queryParams?.url ?? DocTypeRoute()}/${id}`,
    params: queryParams?.params,
    headers: queryParams?.headers,
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<MessageResponse>(config)
    : getResponse<MessageResponse, Partial<DocType>>(
        queryParams?.api ?? _client?.api,
        config,
      );
};

export const docTypeDeleteMany = (
  data: (Partial<DocType> & { id: number })[],
  queryParams?: QueryParamsWithList<Partial<DocType> & { id: number }>,
): Promise<{ count: number }[]> => {
  const chunks = chunkArray(data, 1000);
  return Promise.all(
    chunks.map((chunk) => {
      const config: QueryParamsWithList<Partial<DocType> & { id: number }> = {
        method: 'post',
        url: queryParams?.url ?? DocTypeRoute() + '/delete',
        params: queryParams?.params,
        list: chunk,
        headers: queryParams?.headers,
      };

      return queryParams?.batch
        ? queryParams.batch.addBatch<{ count: number }>(config)
        : getResponse<{ count: number }, Partial<DocType> & { id: number }>(
            queryParams?.api ?? _client?.api,
            config,
          );
    }),
  );
};

export const docTypeUpdateOne = (
  id: number,
  data: Partial<DocType>,
  queryParams?: QueryParams<Partial<DocType>>,
): Promise<DocType> => {
  const config: QueryParams<Partial<DocType>> = {
    method: 'put',
    url: `${queryParams?.url ?? DocTypeRoute()}/${id}`,
    params: queryParams?.params,
    data,
    headers: queryParams?.headers,
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<DocType>(config)
    : getResponse<DocType, Partial<DocType>>(
        queryParams?.api ?? _client?.api,
        config,
      );
};

export const docTypeUpdateMany = (
  data: (Partial<DocType> & { id: number })[],
  queryParams?: QueryParamsWithList<Partial<DocType> & { id: number }>,
): Promise<DocType[][]> => {
  const chunks = chunkArray(data, 1000);
  return Promise.all(
    chunks.map((chunk) => {
      const config: QueryParamsWithList<Partial<DocType> & { id: number }> = {
        method: 'post',
        url: queryParams?.url ?? DocTypeRoute(),
        params: queryParams?.params,
        list: chunk,
        headers: queryParams?.headers,
      };

      return queryParams?.batch
        ? queryParams.batch.addBatch<DocType[]>(config)
        : getResponse<DocType[], Partial<DocType> & { id: number }>(
            queryParams?.api ?? _client?.api,
            config,
          );
    }),
  );
};

export const docTypeCreateOne = (
  data: Partial<DocType>,
  queryParams?: QueryParams<Partial<DocType>>,
): Promise<DocType> => {
  const config: QueryParams<Partial<DocType>> = {
    method: 'post',
    url: queryParams?.url ?? DocTypeRoute(),
    params: queryParams?.params,
    data,
    headers: queryParams?.headers,
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<DocType>(config)
    : getResponse<DocType, Partial<DocType>>(
        queryParams?.api ?? _client?.api,
        config,
      );
};

export const docTypeCreateMany = (
  data: Partial<DocType>[],
  queryParams?: QueryParamsWithList<Partial<DocType>>,
): Promise<DocType[][]> => {
  const chunks = chunkArray(data, 1000);
  return Promise.all(
    chunks.map((chunk) => {
      const config: QueryParamsWithList<Partial<DocType>> = {
        method: 'post',
        url: queryParams?.url ?? DocTypeRoute(),
        params: queryParams?.params,
        list: chunk,
        headers: queryParams?.headers,
      };

      return queryParams?.batch
        ? queryParams.batch.addBatch<DocType[]>(config)
        : getResponse<DocType[], Partial<DocType>>(
            queryParams?.api ?? _client?.api,
            config,
          );
    }),
  );
};
