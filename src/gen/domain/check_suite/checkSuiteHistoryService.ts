/**
 * Copyright (C) 2021 BitModern, Inc - All Rights Reserved
 */

import { _client } from '../../../ClientSdk';
import { getResponse } from '../../actions/getResponse';
import type { QueryParams } from '../../actions/QueryParams';
import { CheckSuiteRoute } from '../../routes/Routes';
import type { CheckSuite } from './CheckSuite';
import type { CheckSuiteHistory } from './CheckSuiteHistory';

export const checkSuiteHistoryGet = (
  queryParams?: QueryParams<Partial<CheckSuite>>,
): Promise<CheckSuiteHistory[]> => {
  const config: QueryParams<Partial<CheckSuite>> = {
    method: 'get',
    url: `${queryParams?.url ?? CheckSuiteRoute()}${
      queryParams?.id ? `/${queryParams?.id}` : ''
    }`,
    params: { revision_log: true, ...queryParams?.params },
    cancelToken: queryParams?.cancelToken,
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<CheckSuiteHistory[]>(config)
    : getResponse<CheckSuiteHistory[], Partial<CheckSuite>>(
        queryParams?.api ?? _client?.api,
        config,
      );
};
