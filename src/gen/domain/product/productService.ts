/**
 * Copyright (C) 2021 BitModern, Inc - All Rights Reserved
 */

import { _client } from '../../../ClientSdk';
import { getResponse } from '../../actions/getResponse';
import { QueryParams, QueryParamsWithList } from '../../actions/QueryParams';
import { MessageResponse } from '../../actions/MessageResponse';
import { ResourceList } from '../../models/ResourceList';
import { ProductRoute } from '../../routes/Routes';
import { Product } from './Product';
import { ProductApi } from './ProductApi';

export const productGetMany = (
  queryParams?: QueryParams<Product>,
): Promise<ResourceList<ProductApi>> => {
  const config: QueryParams<Product> = {
    method: 'get',
    url: queryParams?.url || ProductRoute(),
    params: queryParams?.params,
    cancelToken: queryParams?.cancelToken,
    headers: queryParams?.headers,
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<ResourceList<ProductApi>>(config)
    : getResponse<ResourceList<ProductApi>, Product>(
        queryParams?.api || _client?.api,
        config,
      );
};

export const productGetOne = (
  id: number,
  queryParams?: QueryParams<Product>,
): Promise<ProductApi> => {
  const config: QueryParams<Product> = {
    method: 'get',
    url: `${queryParams?.url || ProductRoute()}/${id}`,
    params: queryParams?.params,
    cancelToken: queryParams?.cancelToken,
    headers: queryParams?.headers,
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<ProductApi>(config)
    : getResponse<ProductApi, Product>(
        queryParams?.api || _client?.api,
        config,
      );
};

export const productDeleteOne = (
  id: number,
  queryParams?: QueryParams<Product>,
): Promise<MessageResponse> => {
  const config: QueryParams<Product> = {
    method: 'delete',
    url: `${queryParams?.url || ProductRoute()}/${id}`,
    params: queryParams?.params,
    headers: queryParams?.headers,
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<MessageResponse>(config)
    : getResponse<MessageResponse, Product>(
        queryParams?.api || _client?.api,
        config,
      );
};

export const productUpdateOne = (
  id: number,
  data: Partial<Product>,
  queryParams?: QueryParams<Product>,
): Promise<Product> => {
  const config: QueryParams<Product> = {
    method: 'put',
    url: `${queryParams?.url || ProductRoute()}/${id}`,
    params: queryParams?.params,
    data,
    headers: queryParams?.headers,
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<Product>(config)
    : getResponse<Product>(queryParams?.api || _client?.api, config);
};

export const productCreateOne = (
  data: Partial<Product>,
  queryParams?: QueryParams<Product>,
): Promise<Product> => {
  const config: QueryParams<Product> = {
    method: 'post',
    url: queryParams?.url || ProductRoute(),
    params: queryParams?.params,
    data,
    headers: queryParams?.headers,
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<Product>(config)
    : getResponse<Product>(queryParams?.api || _client?.api, config);
};

export const productCreateMany = (
  data: Partial<Product>[],
  queryParams?: QueryParamsWithList<Product>,
): Promise<Product[]> => {
  const config: QueryParamsWithList<Product> = {
    method: 'post',
    url: queryParams?.url || ProductRoute(),
    params: queryParams?.params,
    list: data,
    headers: queryParams?.headers,
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<Product[]>(config)
    : getResponse<Product[], Product>(queryParams?.api || _client?.api, config);
};
