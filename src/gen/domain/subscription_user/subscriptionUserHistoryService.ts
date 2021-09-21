/**
 * Copyright (C) 2021 BitModern, Inc - All Rights Reserved
 */

import { _client } from '../../../ClientSdk';
import { getResponse } from '../../actions/getResponse';
import { QueryParams } from '../../actions/QueryParams';
import { SubscriptionUserRoute } from '../../routes/Routes';
import { SubscriptionUser } from './SubscriptionUser';
import { SubscriptionUserHistory } from './SubscriptionUserHistory';

export const subscriptionUserHistoryGet = (
  queryParams?: QueryParams<SubscriptionUser>
): Promise<SubscriptionUserHistory[]> => {
  const config: QueryParams<SubscriptionUser> = {
    method: 'get',
    url: `${queryParams?.url || SubscriptionUserRoute()}${
      queryParams?.id ? `/${queryParams?.id}` : ''
    }`,
    params: { revision_log: true, ...queryParams?.params },
    cancelToken: queryParams?.cancelToken,
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<SubscriptionUserHistory[]>(config)
    : getResponse<SubscriptionUserHistory[], SubscriptionUser>(
        queryParams?.api || _client?.api,
        config
      );
};
