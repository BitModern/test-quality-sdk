/**
 * Copyright (C) 2021 BitModern, Inc - All Rights Reserved
 */

import { _client } from '../../../ClientSdk';
import { getResponse } from '../../actions/getResponse';
import type { QueryParams } from '../../actions/QueryParams';
import { RunSuiteRoute } from '../../routes/Routes';
import type { RunSuite } from './RunSuite';
import type { RunSuiteHistory } from './RunSuiteHistory';

export const runSuiteHistoryGet = (
  queryParams?: QueryParams<Partial<RunSuite>>,
): Promise<RunSuiteHistory[]> => {
  const config: QueryParams<Partial<RunSuite>> = {
    method: 'get',
    url: `${queryParams?.url ?? RunSuiteRoute()}${
      queryParams?.id ? `/${queryParams?.id}` : ''
    }`,
    params: { revision_log: true, ...queryParams?.params },
    cancelToken: queryParams?.cancelToken,
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<RunSuiteHistory[]>(config)
    : getResponse<RunSuiteHistory[], Partial<RunSuite>>(
        queryParams?.api ?? _client?.api,
        config,
      );
};
