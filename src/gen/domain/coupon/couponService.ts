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
import { CouponRoute } from '../../routes/Routes';
import type { Coupon } from './Coupon';
import type { CouponApi } from './CouponApi';

export const couponGetMany = (
  queryParams?: QueryParams<Partial<Coupon>>,
): Promise<ResourceList<CouponApi>> => {
  const config: QueryParams<Partial<Coupon>> = {
    method: 'get',
    url: queryParams?.url ?? CouponRoute(),
    params: queryParams?.params,
    cancelToken: queryParams?.cancelToken,
    headers: queryParams?.headers,
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<ResourceList<CouponApi>>(config)
    : getResponse<ResourceList<CouponApi>, Partial<Coupon>>(
        queryParams?.api ?? _client?.api,
        config,
      );
};

export const couponGetOne = (
  id: number,
  queryParams?: QueryParams<Partial<Coupon>>,
): Promise<CouponApi> => {
  const config: QueryParams<Partial<Coupon>> = {
    method: 'get',
    url: `${queryParams?.url ?? CouponRoute()}/${id}`,
    params: queryParams?.params,
    cancelToken: queryParams?.cancelToken,
    headers: queryParams?.headers,
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<CouponApi>(config)
    : getResponse<CouponApi, Partial<Coupon>>(
        queryParams?.api ?? _client?.api,
        config,
      );
};

export const couponDeleteOne = (
  id: number,
  queryParams?: QueryParams<Partial<Coupon>>,
): Promise<MessageResponse> => {
  const config: QueryParams<Partial<Coupon>> = {
    method: 'delete',
    url: `${queryParams?.url ?? CouponRoute()}/${id}`,
    params: queryParams?.params,
    headers: queryParams?.headers,
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<MessageResponse>(config)
    : getResponse<MessageResponse, Partial<Coupon>>(
        queryParams?.api ?? _client?.api,
        config,
      );
};

export const couponDeleteMany = (
  data: (Partial<Coupon> & { id: number })[],
  queryParams?: QueryParamsWithList<Partial<Coupon> & { id: number }>,
): Promise<{ count: number }[]> => {
  const chunks = chunkArray(data, 1000);
  return Promise.all(
    chunks.map((chunk) => {
      const config: QueryParamsWithList<Partial<Coupon> & { id: number }> = {
        method: 'post',
        url: queryParams?.url ?? CouponRoute() + '/delete',
        params: queryParams?.params,
        list: chunk,
        headers: queryParams?.headers,
      };

      return queryParams?.batch
        ? queryParams.batch.addBatch<{ count: number }>(config)
        : getResponse<{ count: number }, Partial<Coupon> & { id: number }>(
            queryParams?.api ?? _client?.api,
            config,
          );
    }),
  );
};

export const couponUpdateOne = (
  id: number,
  data: Partial<Coupon>,
  queryParams?: QueryParams<Partial<Coupon>>,
): Promise<Coupon> => {
  const config: QueryParams<Partial<Coupon>> = {
    method: 'put',
    url: `${queryParams?.url ?? CouponRoute()}/${id}`,
    params: queryParams?.params,
    data,
    headers: queryParams?.headers,
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<Coupon>(config)
    : getResponse<Coupon, Partial<Coupon>>(
        queryParams?.api ?? _client?.api,
        config,
      );
};

export const couponUpdateMany = (
  data: (Partial<Coupon> & { id: number })[],
  queryParams?: QueryParamsWithList<Partial<Coupon> & { id: number }>,
): Promise<Coupon[][]> => {
  const chunks = chunkArray(data, 1000);
  return Promise.all(
    chunks.map((chunk) => {
      const config: QueryParamsWithList<Partial<Coupon> & { id: number }> = {
        method: 'post',
        url: queryParams?.url ?? CouponRoute(),
        params: queryParams?.params,
        list: chunk,
        headers: queryParams?.headers,
      };

      return queryParams?.batch
        ? queryParams.batch.addBatch<Coupon[]>(config)
        : getResponse<Coupon[], Partial<Coupon> & { id: number }>(
            queryParams?.api ?? _client?.api,
            config,
          );
    }),
  );
};

export const couponCreateOne = (
  data: Partial<Coupon>,
  queryParams?: QueryParams<Partial<Coupon>>,
): Promise<Coupon> => {
  const config: QueryParams<Partial<Coupon>> = {
    method: 'post',
    url: queryParams?.url ?? CouponRoute(),
    params: queryParams?.params,
    data,
    headers: queryParams?.headers,
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<Coupon>(config)
    : getResponse<Coupon, Partial<Coupon>>(
        queryParams?.api ?? _client?.api,
        config,
      );
};

export const couponCreateMany = (
  data: Partial<Coupon>[],
  queryParams?: QueryParamsWithList<Partial<Coupon>>,
): Promise<Coupon[][]> => {
  const chunks = chunkArray(data, 1000);
  return Promise.all(
    chunks.map((chunk) => {
      const config: QueryParamsWithList<Partial<Coupon>> = {
        method: 'post',
        url: queryParams?.url ?? CouponRoute(),
        params: queryParams?.params,
        list: chunk,
        headers: queryParams?.headers,
      };

      return queryParams?.batch
        ? queryParams.batch.addBatch<Coupon[]>(config)
        : getResponse<Coupon[], Partial<Coupon>>(
            queryParams?.api ?? _client?.api,
            config,
          );
    }),
  );
};
