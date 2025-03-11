/**
 * Copyright (C) 2021 BitModern, Inc - All Rights Reserved
 */

import { _client } from '../../../ClientSdk';
import { getResponse } from '../../actions/getResponse';
import type { QueryParams } from '../../actions/QueryParams';
import { BillingContactRoute } from '../../routes/Routes';
import type { BillingContact } from './BillingContact';
import type { BillingContactHistory } from './BillingContactHistory';

export const billingContactHistoryGet = (
  queryParams?: QueryParams<Partial<BillingContact>>,
): Promise<BillingContactHistory[]> => {
  const config: QueryParams<Partial<BillingContact>> = {
    method: 'get',
    url: `${queryParams?.url ?? BillingContactRoute()}${
      queryParams?.id ? `/${queryParams?.id}` : ''
    }`,
    params: { revision_log: true, ...queryParams?.params },
    cancelToken: queryParams?.cancelToken,
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<BillingContactHistory[]>(config)
    : getResponse<BillingContactHistory[], Partial<BillingContact>>(
        queryParams?.api ?? _client?.api,
        config,
      );
};
