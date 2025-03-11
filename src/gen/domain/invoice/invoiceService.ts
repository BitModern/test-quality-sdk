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
import { InvoiceRoute } from '../../routes/Routes';
import type { Invoice } from './Invoice';
import type { InvoiceApi } from './InvoiceApi';

export const invoiceGetMany = (
  queryParams?: QueryParams<Invoice>,
): Promise<ResourceList<InvoiceApi>> => {
  const config: QueryParams<Invoice> = {
    method: 'get',
    url: queryParams?.url ?? InvoiceRoute(),
    params: queryParams?.params,
    cancelToken: queryParams?.cancelToken,
    headers: queryParams?.headers,
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<ResourceList<InvoiceApi>>(config)
    : getResponse<ResourceList<InvoiceApi>, Invoice>(
        queryParams?.api ?? _client?.api,
        config,
      );
};

export const invoiceGetOne = (
  id: number,
  queryParams?: QueryParams<Invoice>,
): Promise<InvoiceApi> => {
  const config: QueryParams<Invoice> = {
    method: 'get',
    url: `${queryParams?.url ?? InvoiceRoute()}/${id}`,
    params: queryParams?.params,
    cancelToken: queryParams?.cancelToken,
    headers: queryParams?.headers,
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<InvoiceApi>(config)
    : getResponse<InvoiceApi, Invoice>(
        queryParams?.api ?? _client?.api,
        config,
      );
};

export const invoiceDeleteOne = (
  id: number,
  queryParams?: QueryParams<Invoice>,
): Promise<MessageResponse> => {
  const config: QueryParams<Invoice> = {
    method: 'delete',
    url: `${queryParams?.url ?? InvoiceRoute()}/${id}`,
    params: queryParams?.params,
    headers: queryParams?.headers,
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<MessageResponse>(config)
    : getResponse<MessageResponse, Invoice>(
        queryParams?.api ?? _client?.api,
        config,
      );
};

export const invoiceDeleteMany = (
  data: (Partial<Invoice> & { id: number })[],
  queryParams?: QueryParamsWithList<Invoice>,
): Promise<{ count: number }[]> => {
  const chunks = chunkArray(data, 1000);
  return Promise.all(
    chunks.map((chunk) => {
      const config: QueryParamsWithList<Invoice> = {
        method: 'post',
        url: queryParams?.url ?? InvoiceRoute() + '/delete',
        params: queryParams?.params,
        list: chunk,
        headers: queryParams?.headers,
      };

      return queryParams?.batch
        ? queryParams.batch.addBatch<{ count: number }>(config)
        : getResponse<{ count: number }, Invoice>(
            queryParams?.api ?? _client?.api,
            config,
          );
    }),
  );
};

export const invoiceUpdateOne = (
  id: number,
  data: Partial<Invoice>,
  queryParams?: QueryParams<Invoice>,
): Promise<Invoice> => {
  const config: QueryParams<Invoice> = {
    method: 'put',
    url: `${queryParams?.url ?? InvoiceRoute()}/${id}`,
    params: queryParams?.params,
    data,
    headers: queryParams?.headers,
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<Invoice>(config)
    : getResponse<Invoice>(queryParams?.api ?? _client?.api, config);
};

export const invoiceUpdateMany = (
  data: (Partial<Invoice> & { id: number })[],
  queryParams?: QueryParamsWithList<Invoice>,
): Promise<Invoice[][]> => {
  const chunks = chunkArray(data, 1000);
  return Promise.all(
    chunks.map((chunk) => {
      const config: QueryParamsWithList<Invoice> = {
        method: 'post',
        url: queryParams?.url ?? InvoiceRoute(),
        params: queryParams?.params,
        list: chunk,
        headers: queryParams?.headers,
      };

      return queryParams?.batch
        ? queryParams.batch.addBatch<Invoice[]>(config)
        : getResponse<Invoice[], Invoice>(
            queryParams?.api ?? _client?.api,
            config,
          );
    }),
  );
};

export const invoiceCreateOne = (
  data: Partial<Invoice>,
  queryParams?: QueryParams<Invoice>,
): Promise<Invoice> => {
  const config: QueryParams<Invoice> = {
    method: 'post',
    url: queryParams?.url ?? InvoiceRoute(),
    params: queryParams?.params,
    data,
    headers: queryParams?.headers,
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<Invoice>(config)
    : getResponse<Invoice>(queryParams?.api ?? _client?.api, config);
};

export const invoiceCreateMany = (
  data: Partial<Invoice>[],
  queryParams?: QueryParamsWithList<Invoice>,
): Promise<Invoice[][]> => {
  const chunks = chunkArray(data, 1000);
  return Promise.all(
    chunks.map((chunk) => {
      const config: QueryParamsWithList<Invoice> = {
        method: 'post',
        url: queryParams?.url ?? InvoiceRoute(),
        params: queryParams?.params,
        list: chunk,
        headers: queryParams?.headers,
      };

      return queryParams?.batch
        ? queryParams.batch.addBatch<Invoice[]>(config)
        : getResponse<Invoice[], Invoice>(
            queryParams?.api ?? _client?.api,
            config,
          );
    }),
  );
};
