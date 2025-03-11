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
import { BillingContactRoute } from '../../routes/Routes';
import type { BillingContact } from './BillingContact';
import type { BillingContactApi } from './BillingContactApi';

export const billingContactGetMany = (
  queryParams?: QueryParams<Partial<BillingContact>>,
): Promise<ResourceList<BillingContactApi>> => {
  const config: QueryParams<Partial<BillingContact>> = {
    method: 'get',
    url: queryParams?.url ?? BillingContactRoute(),
    params: queryParams?.params,
    cancelToken: queryParams?.cancelToken,
    headers: queryParams?.headers,
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<ResourceList<BillingContactApi>>(config)
    : getResponse<ResourceList<BillingContactApi>, Partial<BillingContact>>(
        queryParams?.api ?? _client?.api,
        config,
      );
};

export const billingContactGetOne = (
  id: number,
  queryParams?: QueryParams<Partial<BillingContact>>,
): Promise<BillingContactApi> => {
  const config: QueryParams<Partial<BillingContact>> = {
    method: 'get',
    url: `${queryParams?.url ?? BillingContactRoute()}/${id}`,
    params: queryParams?.params,
    cancelToken: queryParams?.cancelToken,
    headers: queryParams?.headers,
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<BillingContactApi>(config)
    : getResponse<BillingContactApi, Partial<BillingContact>>(
        queryParams?.api ?? _client?.api,
        config,
      );
};

export const billingContactDeleteOne = (
  id: number,
  queryParams?: QueryParams<Partial<BillingContact>>,
): Promise<MessageResponse> => {
  const config: QueryParams<Partial<BillingContact>> = {
    method: 'delete',
    url: `${queryParams?.url ?? BillingContactRoute()}/${id}`,
    params: queryParams?.params,
    headers: queryParams?.headers,
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<MessageResponse>(config)
    : getResponse<MessageResponse, Partial<BillingContact>>(
        queryParams?.api ?? _client?.api,
        config,
      );
};

export const billingContactDeleteMany = (
  data: (Partial<BillingContact> & { id: number })[],
  queryParams?: QueryParamsWithList<Partial<BillingContact> & { id: number }>,
): Promise<{ count: number }[]> => {
  const chunks = chunkArray(data, 1000);
  return Promise.all(
    chunks.map((chunk) => {
      const config: QueryParamsWithList<
        Partial<BillingContact> & { id: number }
      > = {
        method: 'post',
        url: queryParams?.url ?? BillingContactRoute() + '/delete',
        params: queryParams?.params,
        list: chunk,
        headers: queryParams?.headers,
      };

      return queryParams?.batch
        ? queryParams.batch.addBatch<{ count: number }>(config)
        : getResponse<
            { count: number },
            Partial<BillingContact> & { id: number }
          >(queryParams?.api ?? _client?.api, config);
    }),
  );
};

export const billingContactUpdateOne = (
  id: number,
  data: Partial<BillingContact>,
  queryParams?: QueryParams<Partial<BillingContact>>,
): Promise<BillingContact> => {
  const config: QueryParams<Partial<BillingContact>> = {
    method: 'put',
    url: `${queryParams?.url ?? BillingContactRoute()}/${id}`,
    params: queryParams?.params,
    data,
    headers: queryParams?.headers,
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<BillingContact>(config)
    : getResponse<BillingContact, Partial<BillingContact>>(
        queryParams?.api ?? _client?.api,
        config,
      );
};

export const billingContactUpdateMany = (
  data: (Partial<BillingContact> & { id: number })[],
  queryParams?: QueryParamsWithList<Partial<BillingContact> & { id: number }>,
): Promise<BillingContact[][]> => {
  const chunks = chunkArray(data, 1000);
  return Promise.all(
    chunks.map((chunk) => {
      const config: QueryParamsWithList<
        Partial<BillingContact> & { id: number }
      > = {
        method: 'post',
        url: queryParams?.url ?? BillingContactRoute(),
        params: queryParams?.params,
        list: chunk,
        headers: queryParams?.headers,
      };

      return queryParams?.batch
        ? queryParams.batch.addBatch<BillingContact[]>(config)
        : getResponse<
            BillingContact[],
            Partial<BillingContact> & { id: number }
          >(queryParams?.api ?? _client?.api, config);
    }),
  );
};

export const billingContactCreateOne = (
  data: Partial<BillingContact>,
  queryParams?: QueryParams<Partial<BillingContact>>,
): Promise<BillingContact> => {
  const config: QueryParams<Partial<BillingContact>> = {
    method: 'post',
    url: queryParams?.url ?? BillingContactRoute(),
    params: queryParams?.params,
    data,
    headers: queryParams?.headers,
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<BillingContact>(config)
    : getResponse<BillingContact, Partial<BillingContact>>(
        queryParams?.api ?? _client?.api,
        config,
      );
};

export const billingContactCreateMany = (
  data: Partial<BillingContact>[],
  queryParams?: QueryParamsWithList<Partial<BillingContact>>,
): Promise<BillingContact[][]> => {
  const chunks = chunkArray(data, 1000);
  return Promise.all(
    chunks.map((chunk) => {
      const config: QueryParamsWithList<Partial<BillingContact>> = {
        method: 'post',
        url: queryParams?.url ?? BillingContactRoute(),
        params: queryParams?.params,
        list: chunk,
        headers: queryParams?.headers,
      };

      return queryParams?.batch
        ? queryParams.batch.addBatch<BillingContact[]>(config)
        : getResponse<BillingContact[], Partial<BillingContact>>(
            queryParams?.api ?? _client?.api,
            config,
          );
    }),
  );
};
