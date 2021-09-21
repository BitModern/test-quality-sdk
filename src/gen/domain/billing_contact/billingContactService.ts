/**
 * Copyright (C) 2021 BitModern, Inc - All Rights Reserved
 */

import { _client } from '../../../ClientSdk';
import { getResponse } from '../../actions/getResponse';
import { QueryParams } from '../../actions/QueryParams';
import { MessageResponse } from '../../actions/MessageResponse';
import { ResourceList } from '../../models/ResourceList';
import { BillingContactRoute } from '../../routes/Routes';
import { BillingContact } from './BillingContact';
import { BillingContactApi } from './BillingContactApi';

export const billingContactGetMany = (
  queryParams?: QueryParams<BillingContact>
): Promise<ResourceList<BillingContactApi>> => {
  const config: QueryParams<BillingContact> = {
    method: 'get',
    url: queryParams?.url || BillingContactRoute(),
    params: queryParams?.params,
    cancelToken: queryParams?.cancelToken,
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<ResourceList<BillingContactApi>>(config)
    : getResponse<ResourceList<BillingContactApi>, BillingContact>(
        queryParams?.api || _client?.api,
        config
      );
};

export const billingContactGetOne = (
  id: number,
  queryParams?: QueryParams<BillingContact>
): Promise<BillingContactApi> => {
  const config: QueryParams<BillingContact> = {
    method: 'get',
    url: `${queryParams?.url || BillingContactRoute()}/${id}`,
    params: queryParams?.params,
    cancelToken: queryParams?.cancelToken,
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<BillingContactApi>(config)
    : getResponse<BillingContactApi, BillingContact>(
        queryParams?.api || _client?.api,
        config
      );
};

export const billingContactDeleteOne = (
  id: number,
  queryParams?: QueryParams<BillingContact>
): Promise<MessageResponse> => {
  const config: QueryParams<BillingContact> = {
    method: 'delete',
    url: `${queryParams?.url || BillingContactRoute()}/${id}`,
    params: queryParams?.params,
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<MessageResponse>(config)
    : getResponse<MessageResponse, BillingContact>(
        queryParams?.api || _client?.api,
        config
      );
};

export const billingContactUpdateOne = (
  id: number,
  data: Partial<BillingContact>,
  queryParams?: QueryParams<BillingContact>
): Promise<BillingContact> => {
  const config: QueryParams<BillingContact> = {
    method: 'put',
    url: `${queryParams?.url || BillingContactRoute()}/${id}`,
    params: queryParams?.params,
    data,
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<BillingContact>(config)
    : getResponse<BillingContact>(queryParams?.api || _client?.api, config);
};

export const billingContactCreateOne = (
  data: Partial<BillingContact>,
  queryParams?: QueryParams<BillingContact>
): Promise<BillingContact> => {
  const config: QueryParams<BillingContact> = {
    method: 'post',
    url: queryParams?.url || BillingContactRoute(),
    params: queryParams?.params,
    data,
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<BillingContact>(config)
    : getResponse<BillingContact>(queryParams?.api || _client?.api, config);
};
