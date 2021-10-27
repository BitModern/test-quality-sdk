/**
 * Copyright (C) 2021 BitModern, Inc - All Rights Reserved
 */

import { _client } from '../../../ClientSdk';
import { getResponse } from '../../actions/getResponse';
import { QueryParams } from '../../actions/QueryParams';
import { PolicyRowsRoute } from '../../routes/Routes';
import { PolicyRows } from './PolicyRows';
import { PolicyRowsHistory } from './PolicyRowsHistory';

export const policyRowsHistoryGet = (
  queryParams?: QueryParams<PolicyRows>
): Promise<PolicyRowsHistory[]> => {
  const config: QueryParams<PolicyRows> = {
    method: 'get',
    url: `${queryParams?.url || PolicyRowsRoute()}${
      queryParams?.id ? `/${queryParams?.id}` : ''
    }`,
    params: { revision_log: true, ...queryParams?.params },
    cancelToken: queryParams?.cancelToken,
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<PolicyRowsHistory[]>(config)
    : getResponse<PolicyRowsHistory[], PolicyRows>(
        queryParams?.api || _client?.api,
        config
      );
};
