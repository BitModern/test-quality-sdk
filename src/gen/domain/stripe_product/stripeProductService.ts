/**
 * Copyright (C) 2021 BitModern, Inc - All Rights Reserved
 */

import { _client } from '../../../ClientSdk';
import { getResponse } from '../../actions/getResponse';
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
  queryParams?: QueryParams<StripeProduct>,
): Promise<ResourceList<StripeProductApi>> => {
  const config: QueryParams<StripeProduct> = {
    method: 'get',
    url: queryParams?.url ?? StripeProductRoute(),
    params: queryParams?.params,
    cancelToken: queryParams?.cancelToken,
    headers: queryParams?.headers,
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<ResourceList<StripeProductApi>>(config)
    : getResponse<ResourceList<StripeProductApi>, StripeProduct>(
        queryParams?.api ?? _client?.api,
        config,
      );
};

export const stripeProductGetOne = (
  id: number,
  queryParams?: QueryParams<StripeProduct>,
): Promise<StripeProductApi> => {
  const config: QueryParams<StripeProduct> = {
    method: 'get',
    url: `${queryParams?.url ?? StripeProductRoute()}/${id}`,
    params: queryParams?.params,
    cancelToken: queryParams?.cancelToken,
    headers: queryParams?.headers,
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<StripeProductApi>(config)
    : getResponse<StripeProductApi, StripeProduct>(
        queryParams?.api ?? _client?.api,
        config,
      );
};

export const stripeProductDeleteOne = (
  id: number,
  queryParams?: QueryParams<StripeProduct>,
): Promise<MessageResponse> => {
  const config: QueryParams<StripeProduct> = {
    method: 'delete',
    url: `${queryParams?.url ?? StripeProductRoute()}/${id}`,
    params: queryParams?.params,
    headers: queryParams?.headers,
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<MessageResponse>(config)
    : getResponse<MessageResponse, StripeProduct>(
        queryParams?.api ?? _client?.api,
        config,
      );
};

export const stripeProductUpdateOne = (
  id: number,
  data: Partial<StripeProduct>,
  queryParams?: QueryParams<StripeProduct>,
): Promise<StripeProduct> => {
  const config: QueryParams<StripeProduct> = {
    method: 'put',
    url: `${queryParams?.url ?? StripeProductRoute()}/${id}`,
    params: queryParams?.params,
    data,
    headers: queryParams?.headers,
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<StripeProduct>(config)
    : getResponse<StripeProduct>(queryParams?.api ?? _client?.api, config);
};

export const stripeProductCreateOne = (
  data: Partial<StripeProduct>,
  queryParams?: QueryParams<StripeProduct>,
): Promise<StripeProduct> => {
  const config: QueryParams<StripeProduct> = {
    method: 'post',
    url: queryParams?.url ?? StripeProductRoute(),
    params: queryParams?.params,
    data,
    headers: queryParams?.headers,
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<StripeProduct>(config)
    : getResponse<StripeProduct>(queryParams?.api ?? _client?.api, config);
};

export const stripeProductCreateMany = (
  data: Partial<StripeProduct>[],
  queryParams?: QueryParamsWithList<StripeProduct>,
): Promise<StripeProduct[]> => {
  const config: QueryParamsWithList<StripeProduct> = {
    method: 'post',
    url: queryParams?.url ?? StripeProductRoute(),
    params: queryParams?.params,
    list: data,
    headers: queryParams?.headers,
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<StripeProduct[]>(config)
    : getResponse<StripeProduct[], StripeProduct>(
        queryParams?.api ?? _client?.api,
        config,
      );
};
