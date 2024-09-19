/**
 * Copyright (C) 2021 BitModern, Inc - All Rights Reserved
 */

import { _client } from '../../../ClientSdk';
import { getResponse } from '../../actions/getResponse';
import type { QueryParams } from '../../actions/QueryParams';
import { StripeProductRoute } from '../../routes/Routes';
import type { StripeProduct } from './StripeProduct';
import type { StripeProductHistory } from './StripeProductHistory';

export const stripeProductHistoryGet = (
  queryParams?: QueryParams<StripeProduct>,
): Promise<StripeProductHistory[]> => {
  const config: QueryParams<StripeProduct> = {
    method: 'get',
    url: `${queryParams?.url ?? StripeProductRoute()}${
      queryParams?.id ? `/${queryParams?.id}` : ''
    }`,
    params: { revision_log: true, ...queryParams?.params },
    cancelToken: queryParams?.cancelToken,
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<StripeProductHistory[]>(config)
    : getResponse<StripeProductHistory[], StripeProduct>(
        queryParams?.api ?? _client?.api,
        config,
      );
};
