/**
 * Copyright (C) 2021 BitModern, Inc - All Rights Reserved
 */

import { _client } from '../../../ClientSdk';
import { getResponse } from '../../actions/getResponse';
import type { QueryParams } from '../../actions/QueryParams';
import { CheckRunRoute } from '../../routes/Routes';
import type { CheckRun } from './CheckRun';
import type { CheckRunHistory } from './CheckRunHistory';

export const checkRunHistoryGet = (
  queryParams?: QueryParams<CheckRun>,
): Promise<CheckRunHistory[]> => {
  const config: QueryParams<CheckRun> = {
    method: 'get',
    url: `${queryParams?.url ?? CheckRunRoute()}${
      queryParams?.id ? `/${queryParams?.id}` : ''
    }`,
    params: { revision_log: true, ...queryParams?.params },
    cancelToken: queryParams?.cancelToken,
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<CheckRunHistory[]>(config)
    : getResponse<CheckRunHistory[], CheckRun>(
        queryParams?.api ?? _client?.api,
        config,
      );
};
