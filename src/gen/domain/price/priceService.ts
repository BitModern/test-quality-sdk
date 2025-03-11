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
import { PriceRoute } from '../../routes/Routes';
import type { Price } from './Price';
import type { PriceApi } from './PriceApi';

export const priceGetMany = (
  queryParams?: QueryParams<Partial<Price>>,
): Promise<ResourceList<PriceApi>> => {
  const config: QueryParams<Partial<Price>> = {
    method: 'get',
    url: queryParams?.url ?? PriceRoute(),
    params: queryParams?.params,
    cancelToken: queryParams?.cancelToken,
    headers: queryParams?.headers,
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<ResourceList<PriceApi>>(config)
    : getResponse<ResourceList<PriceApi>, Partial<Price>>(
        queryParams?.api ?? _client?.api,
        config,
      );
};

export const priceGetOne = (
  id: number,
  queryParams?: QueryParams<Partial<Price>>,
): Promise<PriceApi> => {
  const config: QueryParams<Partial<Price>> = {
    method: 'get',
    url: `${queryParams?.url ?? PriceRoute()}/${id}`,
    params: queryParams?.params,
    cancelToken: queryParams?.cancelToken,
    headers: queryParams?.headers,
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<PriceApi>(config)
    : getResponse<PriceApi, Partial<Price>>(
        queryParams?.api ?? _client?.api,
        config,
      );
};

export const priceDeleteOne = (
  id: number,
  queryParams?: QueryParams<Partial<Price>>,
): Promise<MessageResponse> => {
  const config: QueryParams<Partial<Price>> = {
    method: 'delete',
    url: `${queryParams?.url ?? PriceRoute()}/${id}`,
    params: queryParams?.params,
    headers: queryParams?.headers,
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<MessageResponse>(config)
    : getResponse<MessageResponse, Partial<Price>>(
        queryParams?.api ?? _client?.api,
        config,
      );
};

export const priceDeleteMany = (
  data: (Partial<Price> & { id: number })[],
  queryParams?: QueryParamsWithList<Partial<Price> & { id: number }>,
): Promise<{ count: number }[]> => {
  const chunks = chunkArray(data, 1000);
  return Promise.all(
    chunks.map((chunk) => {
      const config: QueryParamsWithList<Partial<Price> & { id: number }> = {
        method: 'post',
        url: queryParams?.url ?? PriceRoute() + '/delete',
        params: queryParams?.params,
        list: chunk,
        headers: queryParams?.headers,
      };

      return queryParams?.batch
        ? queryParams.batch.addBatch<{ count: number }>(config)
        : getResponse<{ count: number }, Partial<Price> & { id: number }>(
            queryParams?.api ?? _client?.api,
            config,
          );
    }),
  );
};

export const priceUpdateOne = (
  id: number,
  data: Partial<Price>,
  queryParams?: QueryParams<Partial<Price>>,
): Promise<Price> => {
  const config: QueryParams<Partial<Price>> = {
    method: 'put',
    url: `${queryParams?.url ?? PriceRoute()}/${id}`,
    params: queryParams?.params,
    data,
    headers: queryParams?.headers,
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<Price>(config)
    : getResponse<Price, Partial<Price>>(
        queryParams?.api ?? _client?.api,
        config,
      );
};

export const priceUpdateMany = (
  data: (Partial<Price> & { id: number })[],
  queryParams?: QueryParamsWithList<Partial<Price> & { id: number }>,
): Promise<Price[][]> => {
  const chunks = chunkArray(data, 1000);
  return Promise.all(
    chunks.map((chunk) => {
      const config: QueryParamsWithList<Partial<Price> & { id: number }> = {
        method: 'post',
        url: queryParams?.url ?? PriceRoute(),
        params: queryParams?.params,
        list: chunk,
        headers: queryParams?.headers,
      };

      return queryParams?.batch
        ? queryParams.batch.addBatch<Price[]>(config)
        : getResponse<Price[], Partial<Price> & { id: number }>(
            queryParams?.api ?? _client?.api,
            config,
          );
    }),
  );
};

export const priceCreateOne = (
  data: Partial<Price>,
  queryParams?: QueryParams<Partial<Price>>,
): Promise<Price> => {
  const config: QueryParams<Partial<Price>> = {
    method: 'post',
    url: queryParams?.url ?? PriceRoute(),
    params: queryParams?.params,
    data,
    headers: queryParams?.headers,
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<Price>(config)
    : getResponse<Price, Partial<Price>>(
        queryParams?.api ?? _client?.api,
        config,
      );
};

export const priceCreateMany = (
  data: Partial<Price>[],
  queryParams?: QueryParamsWithList<Partial<Price>>,
): Promise<Price[][]> => {
  const chunks = chunkArray(data, 1000);
  return Promise.all(
    chunks.map((chunk) => {
      const config: QueryParamsWithList<Partial<Price>> = {
        method: 'post',
        url: queryParams?.url ?? PriceRoute(),
        params: queryParams?.params,
        list: chunk,
        headers: queryParams?.headers,
      };

      return queryParams?.batch
        ? queryParams.batch.addBatch<Price[]>(config)
        : getResponse<Price[], Partial<Price>>(
            queryParams?.api ?? _client?.api,
            config,
          );
    }),
  );
};
