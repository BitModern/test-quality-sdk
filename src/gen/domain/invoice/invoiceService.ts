/**
 * Copyright (C) 2021 BitModern, Inc - All Rights Reserved
 */

import { _client } from '../../../ClientSdk';
import { getResponse } from '../../actions/getResponse';
import { QueryParams } from '../../actions/QueryParams';
import { MessageResponse } from '../../actions/MessageResponse';
import { ResourceList } from '../../models/ResourceList';
import { InvoiceRoute } from '../../routes/Routes';
import { Invoice } from './Invoice';
import { InvoiceApi } from './InvoiceApi';

export const invoiceGetMany = (
  queryParams?: QueryParams<Invoice>
): Promise<ResourceList<InvoiceApi>> => {
  const config: QueryParams<Invoice> = {
    method: 'get',
    url: queryParams?.url || InvoiceRoute(),
    params: queryParams?.params,
    cancelToken: queryParams?.cancelToken,
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<ResourceList<InvoiceApi>>(config)
    : getResponse<ResourceList<InvoiceApi>, Invoice>(
        queryParams?.api || _client?.api,
        config
      );
};

export const invoiceGetOne = (
  id: number,
  queryParams?: QueryParams<Invoice>
): Promise<InvoiceApi> => {
  const config: QueryParams<Invoice> = {
    method: 'get',
    url: `${queryParams?.url || InvoiceRoute()}/${id}`,
    params: queryParams?.params,
    cancelToken: queryParams?.cancelToken,
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<InvoiceApi>(config)
    : getResponse<InvoiceApi, Invoice>(
        queryParams?.api || _client?.api,
        config
      );
};

export const invoiceDeleteOne = (
  id: number,
  queryParams?: QueryParams<Invoice>
): Promise<MessageResponse> => {
  const config: QueryParams<Invoice> = {
    method: 'delete',
    url: `${queryParams?.url || InvoiceRoute()}/${id}`,
    params: queryParams?.params,
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<MessageResponse>(config)
    : getResponse<MessageResponse, Invoice>(
        queryParams?.api || _client?.api,
        config
      );
};

export const invoiceUpdateOne = (
  id: number,
  data: Partial<Invoice>,
  queryParams?: QueryParams<Invoice>
): Promise<Invoice> => {
  const config: QueryParams<Invoice> = {
    method: 'put',
    url: `${queryParams?.url || InvoiceRoute()}/${id}`,
    params: queryParams?.params,
    data,
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<Invoice>(config)
    : getResponse<Invoice>(queryParams?.api || _client?.api, config);
};

export const invoiceCreateOne = (
  data: Partial<Invoice>,
  queryParams?: QueryParams<Invoice>
): Promise<Invoice> => {
  const config: QueryParams<Invoice> = {
    method: 'post',
    url: queryParams?.url || InvoiceRoute(),
    params: queryParams?.params,
    data,
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<Invoice>(config)
    : getResponse<Invoice>(queryParams?.api || _client?.api, config);
};
