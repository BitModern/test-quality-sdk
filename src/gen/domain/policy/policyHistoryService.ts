/**
 * Copyright (C) 2021 BitModern, Inc - All Rights Reserved
 */

import { _client } from '../../../ClientSdk';
import { getResponse } from '../../actions/getResponse';
import type { QueryParams } from '../../actions/QueryParams';
import { PolicyRoute } from '../../routes/Routes';
import type { Policy } from './Policy';
import type { PolicyHistory } from './PolicyHistory';

export const policyHistoryGet = (
  queryParams?: QueryParams<Policy>,
): Promise<PolicyHistory[]> => {
  const config: QueryParams<Policy> = {
    method: 'get',
    url: `${queryParams?.url ?? PolicyRoute()}${
      queryParams?.id ? `/${queryParams?.id}` : ''
    }`,
    params: { revision_log: true, ...queryParams?.params },
    cancelToken: queryParams?.cancelToken,
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<PolicyHistory[]>(config)
    : getResponse<PolicyHistory[], Policy>(
        queryParams?.api ?? _client?.api,
        config,
      );
};
