/**
 * Copyright (C) 2021 BitModern, Inc - All Rights Reserved
 */

import { _client } from '../../../ClientSdk';
import { getResponse } from '../../actions/getResponse';
import { QueryParams, QueryParamsWithList } from '../../actions/QueryParams';
import { MessageResponse } from '../../actions/MessageResponse';
import { ResourceList } from '../../models/ResourceList';
import { CouponRoute } from '../../routes/Routes';
import { Coupon } from './Coupon';
import { CouponApi } from './CouponApi';

export const couponGetMany = (
  queryParams?: QueryParams<Coupon>,
): Promise<ResourceList<CouponApi>> => {
  const config: QueryParams<Coupon> = {
    method: 'get',
    url: queryParams?.url || CouponRoute(),
    params: queryParams?.params,
    cancelToken: queryParams?.cancelToken,
    headers: queryParams?.headers,
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<ResourceList<CouponApi>>(config)
    : getResponse<ResourceList<CouponApi>, Coupon>(
        queryParams?.api || _client?.api,
        config,
      );
};

export const couponGetOne = (
  id: number,
  queryParams?: QueryParams<Coupon>,
): Promise<CouponApi> => {
  const config: QueryParams<Coupon> = {
    method: 'get',
    url: `${queryParams?.url || CouponRoute()}/${id}`,
    params: queryParams?.params,
    cancelToken: queryParams?.cancelToken,
    headers: queryParams?.headers,
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<CouponApi>(config)
    : getResponse<CouponApi, Coupon>(queryParams?.api || _client?.api, config);
};

export const couponDeleteOne = (
  id: number,
  queryParams?: QueryParams<Coupon>,
): Promise<MessageResponse> => {
  const config: QueryParams<Coupon> = {
    method: 'delete',
    url: `${queryParams?.url || CouponRoute()}/${id}`,
    params: queryParams?.params,
    headers: queryParams?.headers,
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<MessageResponse>(config)
    : getResponse<MessageResponse, Coupon>(
        queryParams?.api || _client?.api,
        config,
      );
};

export const couponUpdateOne = (
  id: number,
  data: Partial<Coupon>,
  queryParams?: QueryParams<Coupon>,
): Promise<Coupon> => {
  const config: QueryParams<Coupon> = {
    method: 'put',
    url: `${queryParams?.url || CouponRoute()}/${id}`,
    params: queryParams?.params,
    data,
    headers: queryParams?.headers,
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<Coupon>(config)
    : getResponse<Coupon>(queryParams?.api || _client?.api, config);
};

export const couponCreateOne = (
  data: Partial<Coupon>,
  queryParams?: QueryParams<Coupon>,
): Promise<Coupon> => {
  const config: QueryParams<Coupon> = {
    method: 'post',
    url: queryParams?.url || CouponRoute(),
    params: queryParams?.params,
    data,
    headers: queryParams?.headers,
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<Coupon>(config)
    : getResponse<Coupon>(queryParams?.api || _client?.api, config);
};

export const couponCreateMany = (
  data: Partial<Coupon>[],
  queryParams?: QueryParamsWithList<Coupon>,
): Promise<Coupon[]> => {
  const config: QueryParamsWithList<Coupon> = {
    method: 'post',
    url: queryParams?.url || CouponRoute(),
    params: queryParams?.params,
    list: data,
    headers: queryParams?.headers,
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<Coupon[]>(config)
    : getResponse<Coupon[], Coupon>(queryParams?.api || _client?.api, config);
};
