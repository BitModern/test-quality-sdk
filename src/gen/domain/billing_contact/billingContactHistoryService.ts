/**
 * Copyright (C) 2021 BitModern, Inc - All Rights Reserved
 */

import { _client } from '../../../ClientSdk';
import { getResponse } from '../../actions/getResponse';
import { QueryParams } from '../../actions/QueryParams';
import { BillingContactRoute } from '../../routes/Routes';
import { BillingContact } from './BillingContact';
import { BillingContactHistory } from './BillingContactHistory';

export const billingContactHistoryGet = (
  queryParams?: QueryParams<BillingContact>
): Promise<BillingContactHistory[]> => {
  const config: QueryParams<BillingContact> = {
    method: 'get',
    url: `${queryParams?.url || BillingContactRoute()}${
      queryParams?.id ? `/${queryParams?.id}` : ''
    }`,
    params: { revision_log: true, ...queryParams?.params },
    cancelToken: queryParams?.cancelToken,
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<BillingContactHistory[]>(config)
    : getResponse<BillingContactHistory[], BillingContact>(
        queryParams?.api || _client?.api,
        config
      );
};
