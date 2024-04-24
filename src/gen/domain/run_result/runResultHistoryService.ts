/**
 * Copyright (C) 2021 BitModern, Inc - All Rights Reserved
 */

import { _client } from '../../../ClientSdk';
import { getResponse } from '../../actions/getResponse';
import type { QueryParams } from '../../actions/QueryParams';
import { RunResultRoute } from '../../routes/Routes';
import type { RunResult } from './RunResult';
import type { RunResultHistory } from './RunResultHistory';

export const runResultHistoryGet = (
  queryParams?: QueryParams<RunResult>,
): Promise<RunResultHistory[]> => {
  const config: QueryParams<RunResult> = {
    method: 'get',
    url: `${queryParams?.url ?? RunResultRoute()}${
      queryParams?.id ? `/${queryParams?.id}` : ''
    }`,
    params: { revision_log: true, ...queryParams?.params },
    cancelToken: queryParams?.cancelToken,
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<RunResultHistory[]>(config)
    : getResponse<RunResultHistory[], RunResult>(
        queryParams?.api ?? _client?.api,
        config,
      );
};
