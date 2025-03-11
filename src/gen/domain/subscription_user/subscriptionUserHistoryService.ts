/**
 * Copyright (C) 2021 BitModern, Inc - All Rights Reserved
 */

import { _client } from '../../../ClientSdk';
import { getResponse } from '../../actions/getResponse';
import type { QueryParams } from '../../actions/QueryParams';
import { SubscriptionUserRoute } from '../../routes/Routes';
import type { SubscriptionUser } from './SubscriptionUser';
import type { SubscriptionUserHistory } from './SubscriptionUserHistory';

export const subscriptionUserHistoryGet = (
  queryParams?: QueryParams<Partial<SubscriptionUser>>,
): Promise<SubscriptionUserHistory[]> => {
  const config: QueryParams<Partial<SubscriptionUser>> = {
    method: 'get',
    url: `${queryParams?.url ?? SubscriptionUserRoute()}${
      queryParams?.id ? `/${queryParams?.id}` : ''
    }`,
    params: { revision_log: true, ...queryParams?.params },
    cancelToken: queryParams?.cancelToken,
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<SubscriptionUserHistory[]>(config)
    : getResponse<SubscriptionUserHistory[], Partial<SubscriptionUser>>(
        queryParams?.api ?? _client?.api,
        config,
      );
};
