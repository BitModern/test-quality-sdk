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
import { StripeProductRoute } from '../../routes/Routes';
import type { StripeProduct } from './StripeProduct';
import type { StripeProductApi } from './StripeProductApi';

export const stripeProductGetMany = (
  queryParams?: QueryParams<Partial<StripeProduct>>,
): Promise<ResourceList<StripeProductApi>> => {
  const config: QueryParams<Partial<StripeProduct>> = {
    method: 'get',
    url: queryParams?.url ?? StripeProductRoute(),
    params: queryParams?.params,
    cancelToken: queryParams?.cancelToken,
    headers: queryParams?.headers,
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<ResourceList<StripeProductApi>>(config)
    : getResponse<ResourceList<StripeProductApi>, Partial<StripeProduct>>(
        queryParams?.api ?? _client?.api,
        config,
      );
};

export const stripeProductGetOne = (
  id: number,
  queryParams?: QueryParams<Partial<StripeProduct>>,
): Promise<StripeProductApi> => {
  const config: QueryParams<Partial<StripeProduct>> = {
    method: 'get',
    url: `${queryParams?.url ?? StripeProductRoute()}/${id}`,
    params: queryParams?.params,
    cancelToken: queryParams?.cancelToken,
    headers: queryParams?.headers,
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<StripeProductApi>(config)
    : getResponse<StripeProductApi, Partial<StripeProduct>>(
        queryParams?.api ?? _client?.api,
        config,
      );
};

export const stripeProductDeleteOne = (
  id: number,
  queryParams?: QueryParams<Partial<StripeProduct>>,
): Promise<MessageResponse> => {
  const config: QueryParams<Partial<StripeProduct>> = {
    method: 'delete',
    url: `${queryParams?.url ?? StripeProductRoute()}/${id}`,
    params: queryParams?.params,
    headers: queryParams?.headers,
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<MessageResponse>(config)
    : getResponse<MessageResponse, Partial<StripeProduct>>(
        queryParams?.api ?? _client?.api,
        config,
      );
};

export const stripeProductDeleteMany = (
  data: (Partial<StripeProduct> & { id: number })[],
  queryParams?: QueryParamsWithList<Partial<StripeProduct> & { id: number }>,
): Promise<{ count: number }[]> => {
  const chunks = chunkArray(data, 1000);
  return Promise.all(
    chunks.map((chunk) => {
      const config: QueryParamsWithList<
        Partial<StripeProduct> & { id: number }
      > = {
        method: 'post',
        url: queryParams?.url ?? StripeProductRoute() + '/delete',
        params: queryParams?.params,
        list: chunk,
        headers: queryParams?.headers,
      };

      return queryParams?.batch
        ? queryParams.batch.addBatch<{ count: number }>(config)
        : getResponse<
            { count: number },
            Partial<StripeProduct> & { id: number }
          >(queryParams?.api ?? _client?.api, config);
    }),
  );
};

export const stripeProductUpdateOne = (
  id: number,
  data: Partial<StripeProduct>,
  queryParams?: QueryParams<Partial<StripeProduct>>,
): Promise<StripeProduct> => {
  const config: QueryParams<Partial<StripeProduct>> = {
    method: 'put',
    url: `${queryParams?.url ?? StripeProductRoute()}/${id}`,
    params: queryParams?.params,
    data,
    headers: queryParams?.headers,
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<StripeProduct>(config)
    : getResponse<StripeProduct, Partial<StripeProduct>>(
        queryParams?.api ?? _client?.api,
        config,
      );
};

export const stripeProductUpdateMany = (
  data: (Partial<StripeProduct> & { id: number })[],
  queryParams?: QueryParamsWithList<Partial<StripeProduct> & { id: number }>,
): Promise<StripeProduct[][]> => {
  const chunks = chunkArray(data, 1000);
  return Promise.all(
    chunks.map((chunk) => {
      const config: QueryParamsWithList<
        Partial<StripeProduct> & { id: number }
      > = {
        method: 'post',
        url: queryParams?.url ?? StripeProductRoute(),
        params: queryParams?.params,
        list: chunk,
        headers: queryParams?.headers,
      };

      return queryParams?.batch
        ? queryParams.batch.addBatch<StripeProduct[]>(config)
        : getResponse<StripeProduct[], Partial<StripeProduct> & { id: number }>(
            queryParams?.api ?? _client?.api,
            config,
          );
    }),
  );
};

export const stripeProductCreateOne = (
  data: Partial<StripeProduct>,
  queryParams?: QueryParams<Partial<StripeProduct>>,
): Promise<StripeProduct> => {
  const config: QueryParams<Partial<StripeProduct>> = {
    method: 'post',
    url: queryParams?.url ?? StripeProductRoute(),
    params: queryParams?.params,
    data,
    headers: queryParams?.headers,
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<StripeProduct>(config)
    : getResponse<StripeProduct, Partial<StripeProduct>>(
        queryParams?.api ?? _client?.api,
        config,
      );
};

export const stripeProductCreateMany = (
  data: Partial<StripeProduct>[],
  queryParams?: QueryParamsWithList<Partial<StripeProduct>>,
): Promise<StripeProduct[][]> => {
  const chunks = chunkArray(data, 1000);
  return Promise.all(
    chunks.map((chunk) => {
      const config: QueryParamsWithList<Partial<StripeProduct>> = {
        method: 'post',
        url: queryParams?.url ?? StripeProductRoute(),
        params: queryParams?.params,
        list: chunk,
        headers: queryParams?.headers,
      };

      return queryParams?.batch
        ? queryParams.batch.addBatch<StripeProduct[]>(config)
        : getResponse<StripeProduct[], Partial<StripeProduct>>(
            queryParams?.api ?? _client?.api,
            config,
          );
    }),
  );
};
