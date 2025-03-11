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
import { ProductRoute } from '../../routes/Routes';
import type { Product } from './Product';
import type { ProductApi } from './ProductApi';

export const productGetMany = (
  queryParams?: QueryParams<Product>,
): Promise<ResourceList<ProductApi>> => {
  const config: QueryParams<Product> = {
    method: 'get',
    url: queryParams?.url ?? ProductRoute(),
    params: queryParams?.params,
    cancelToken: queryParams?.cancelToken,
    headers: queryParams?.headers,
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<ResourceList<ProductApi>>(config)
    : getResponse<ResourceList<ProductApi>, Product>(
        queryParams?.api ?? _client?.api,
        config,
      );
};

export const productGetOne = (
  id: number,
  queryParams?: QueryParams<Product>,
): Promise<ProductApi> => {
  const config: QueryParams<Product> = {
    method: 'get',
    url: `${queryParams?.url ?? ProductRoute()}/${id}`,
    params: queryParams?.params,
    cancelToken: queryParams?.cancelToken,
    headers: queryParams?.headers,
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<ProductApi>(config)
    : getResponse<ProductApi, Product>(
        queryParams?.api ?? _client?.api,
        config,
      );
};

export const productDeleteOne = (
  id: number,
  queryParams?: QueryParams<Product>,
): Promise<MessageResponse> => {
  const config: QueryParams<Product> = {
    method: 'delete',
    url: `${queryParams?.url ?? ProductRoute()}/${id}`,
    params: queryParams?.params,
    headers: queryParams?.headers,
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<MessageResponse>(config)
    : getResponse<MessageResponse, Product>(
        queryParams?.api ?? _client?.api,
        config,
      );
};

export const productDeleteMany = (
  data: (Partial<Product> & { id: number })[],
  queryParams?: QueryParamsWithList<Product>,
): Promise<{ count: number }[]> => {
  const chunks = chunkArray(data, 1000);
  return Promise.all(
    chunks.map((chunk) => {
      const config: QueryParamsWithList<Product> = {
        method: 'post',
        url: queryParams?.url ?? ProductRoute() + '/delete',
        params: queryParams?.params,
        list: chunk,
        headers: queryParams?.headers,
      };

      return queryParams?.batch
        ? queryParams.batch.addBatch<{ count: number }>(config)
        : getResponse<{ count: number }, Product>(
            queryParams?.api ?? _client?.api,
            config,
          );
    }),
  );
};

export const productUpdateOne = (
  id: number,
  data: Partial<Product>,
  queryParams?: QueryParams<Product>,
): Promise<Product> => {
  const config: QueryParams<Product> = {
    method: 'put',
    url: `${queryParams?.url ?? ProductRoute()}/${id}`,
    params: queryParams?.params,
    data,
    headers: queryParams?.headers,
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<Product>(config)
    : getResponse<Product>(queryParams?.api ?? _client?.api, config);
};

export const productUpdateMany = (
  data: (Partial<Product> & { id: number })[],
  queryParams?: QueryParamsWithList<Product>,
): Promise<Product[][]> => {
  const chunks = chunkArray(data, 1000);
  return Promise.all(
    chunks.map((chunk) => {
      const config: QueryParamsWithList<Product> = {
        method: 'post',
        url: queryParams?.url ?? ProductRoute(),
        params: queryParams?.params,
        list: chunk,
        headers: queryParams?.headers,
      };

      return queryParams?.batch
        ? queryParams.batch.addBatch<Product[]>(config)
        : getResponse<Product[], Product>(
            queryParams?.api ?? _client?.api,
            config,
          );
    }),
  );
};

export const productCreateOne = (
  data: Partial<Product>,
  queryParams?: QueryParams<Product>,
): Promise<Product> => {
  const config: QueryParams<Product> = {
    method: 'post',
    url: queryParams?.url ?? ProductRoute(),
    params: queryParams?.params,
    data,
    headers: queryParams?.headers,
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<Product>(config)
    : getResponse<Product>(queryParams?.api ?? _client?.api, config);
};

export const productCreateMany = (
  data: Partial<Product>[],
  queryParams?: QueryParamsWithList<Product>,
): Promise<Product[][]> => {
  const chunks = chunkArray(data, 1000);
  return Promise.all(
    chunks.map((chunk) => {
      const config: QueryParamsWithList<Product> = {
        method: 'post',
        url: queryParams?.url ?? ProductRoute(),
        params: queryParams?.params,
        list: chunk,
        headers: queryParams?.headers,
      };

      return queryParams?.batch
        ? queryParams.batch.addBatch<Product[]>(config)
        : getResponse<Product[], Product>(
            queryParams?.api ?? _client?.api,
            config,
          );
    }),
  );
};
