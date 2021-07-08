/**
 * Copyright (C) 2021 BitModern, Inc - All Rights Reserved
 */

import { _client } from '../../../Client';
import { getResponse } from '../../actions/getResponse';
import { QueryParams } from '../../actions/QueryParams';
import { RunResultRoute } from '../../routes/Routes';
import { RunResult } from './RunResult';
import { RunResultHistory } from './RunResultHistory';

export const runResultHistoryGet = (
  queryParams?: QueryParams<RunResult>
): Promise<RunResultHistory[]> => {
  const config: QueryParams<RunResult> = {
    method: 'get',
    url: `${queryParams?.url || RunResultRoute()}${
      queryParams?.id ? `/${queryParams?.id}` : ''
    }`,
    params: { revision_log: true, ...queryParams?.params },
    cancelToken: queryParams?.cancelToken,
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<RunResultHistory[]>(config)
    : getResponse<RunResultHistory[], RunResult>(
        queryParams?.api || _client?.api,
        config
      );
};
