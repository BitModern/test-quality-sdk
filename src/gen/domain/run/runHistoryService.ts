/**
 * Copyright (C) 2021 BitModern, Inc - All Rights Reserved
 */

import { _client } from '../../../ClientSdk';
import { getResponse } from '../../actions/getResponse';
import { QueryParams } from '../../actions/QueryParams';
import { RunRoute } from '../../routes/Routes';
import { Run } from './Run';
import { RunHistory } from './RunHistory';

export const runHistoryGet = (
  queryParams?: QueryParams<Run>,
): Promise<RunHistory[]> => {
  const config: QueryParams<Run> = {
    method: 'get',
    url: `${queryParams?.url || RunRoute()}${
      queryParams?.id ? `/${queryParams?.id}` : ''
    }`,
    params: { revision_log: true, ...queryParams?.params },
    cancelToken: queryParams?.cancelToken,
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<RunHistory[]>(config)
    : getResponse<RunHistory[], Run>(queryParams?.api || _client?.api, config);
};
