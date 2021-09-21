/**
 * Copyright (C) 2021 BitModern, Inc - All Rights Reserved
 */

import { _client } from '../../../ClientSdk';
import { getResponse } from '../../actions/getResponse';
import { QueryParams } from '../../actions/QueryParams';
import { SubscriptionsRoute } from '../../routes/Routes';
import { Subscriptions } from './Subscriptions';
import { SubscriptionsHistory } from './SubscriptionsHistory';

export const subscriptionsHistoryGet = (
  queryParams?: QueryParams<Subscriptions>
): Promise<SubscriptionsHistory[]> => {
  const config: QueryParams<Subscriptions> = {
    method: 'get',
    url: `${queryParams?.url || SubscriptionsRoute()}${
      queryParams?.id ? `/${queryParams?.id}` : ''
    }`,
    params: { revision_log: true, ...queryParams?.params },
    cancelToken: queryParams?.cancelToken,
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<SubscriptionsHistory[]>(config)
    : getResponse<SubscriptionsHistory[], Subscriptions>(
        queryParams?.api || _client?.api,
        config
      );
};
