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
  queryParams?: QueryParams<Coupon>,
): Promise<ResourceList<CouponApi>> => {
  const config: QueryParams<Coupon> = {
    method: 'get',
    url: queryParams?.url ?? CouponRoute(),
    params: queryParams?.params,
    cancelToken: queryParams?.cancelToken,
    headers: queryParams?.headers,
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<ResourceList<CouponApi>>(config)
    : getResponse<ResourceList<CouponApi>, Coupon>(
        queryParams?.api ?? _client?.api,
        config,
      );
};

export const couponGetOne = (
  id: number,
  queryParams?: QueryParams<Coupon>,
): Promise<CouponApi> => {
  const config: QueryParams<Coupon> = {
    method: 'get',
    url: `${queryParams?.url ?? CouponRoute()}/${id}`,
    params: queryParams?.params,
    cancelToken: queryParams?.cancelToken,
    headers: queryParams?.headers,
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<CouponApi>(config)
    : getResponse<CouponApi, Coupon>(queryParams?.api ?? _client?.api, config);
};

export const couponDeleteOne = (
  id: number,
  queryParams?: QueryParams<Coupon>,
): Promise<MessageResponse> => {
  const config: QueryParams<Coupon> = {
    method: 'delete',
    url: `${queryParams?.url ?? CouponRoute()}/${id}`,
    params: queryParams?.params,
    headers: queryParams?.headers,
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<MessageResponse>(config)
    : getResponse<MessageResponse, Coupon>(
        queryParams?.api ?? _client?.api,
        config,
      );
};

export const couponDeleteMany = (
  data: Partial<Coupon>[],
  queryParams?: QueryParamsWithList<Coupon>,
): Promise<{ count: number }[]> => {
  const chunks = chunkArray(data, 1000);
  return Promise.all(
    chunks.map((chunk) => {
      const config: QueryParamsWithList<Coupon> = {
        method: 'post',
        url: queryParams?.url ?? CouponRoute() + '/delete',
        params: queryParams?.params,
        list: chunk,
        headers: queryParams?.headers,
      };

      return queryParams?.batch
        ? queryParams.batch.addBatch<{ count: number }>(config)
        : getResponse<{ count: number }, Coupon>(
            queryParams?.api ?? _client?.api,
            config,
          );
    }),
  );
};

export const couponUpdateOne = (
  id: number,
  data: Partial<Coupon>,
  queryParams?: QueryParams<Coupon>,
): Promise<Coupon> => {
  const config: QueryParams<Coupon> = {
    method: 'put',
    url: `${queryParams?.url ?? CouponRoute()}/${id}`,
    params: queryParams?.params,
    data,
    headers: queryParams?.headers,
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<Coupon>(config)
    : getResponse<Coupon>(queryParams?.api ?? _client?.api, config);
};

export const couponCreateOne = (
  data: Partial<Coupon>,
  queryParams?: QueryParams<Coupon>,
): Promise<Coupon> => {
  const config: QueryParams<Coupon> = {
    method: 'post',
    url: queryParams?.url ?? CouponRoute(),
    params: queryParams?.params,
    data,
    headers: queryParams?.headers,
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<Coupon>(config)
    : getResponse<Coupon>(queryParams?.api ?? _client?.api, config);
};

export const couponCreateMany = (
  data: Partial<Coupon>[],
  queryParams?: QueryParamsWithList<Coupon>,
): Promise<Coupon[][]> => {
  const chunks = chunkArray(data, 1000);
  return Promise.all(
    chunks.map((chunk) => {
      const config: QueryParamsWithList<Coupon> = {
        method: 'post',
        url: queryParams?.url ?? CouponRoute(),
        params: queryParams?.params,
        list: chunk,
        headers: queryParams?.headers,
      };

      return queryParams?.batch
        ? queryParams.batch.addBatch<Coupon[]>(config)
        : getResponse<Coupon[], Coupon>(
            queryParams?.api ?? _client?.api,
            config,
          );
    }),
  );
};
