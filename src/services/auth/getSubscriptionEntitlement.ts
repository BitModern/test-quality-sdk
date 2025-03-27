import { type SubscriptionEntitlement } from '../../auth/ReturnToken';
import { _client } from '../../ClientSdk';
import { getResponse, type QueryParams } from '../../gen/actions';

export const getSubscriptionEntitlement = (
  queryParams?: QueryParams,
): Promise<SubscriptionEntitlement> => {
  const config: QueryParams = {
    method: 'get',
    url: '/entitlement',
    cancelToken: queryParams?.cancelToken,
    headers: queryParams?.headers,
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<SubscriptionEntitlement>(config)
    : getResponse<SubscriptionEntitlement>(
        queryParams?.api ?? _client?.api,
        config,
      );
};
