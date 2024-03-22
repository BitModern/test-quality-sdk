/**
 * Copyright (C) 2021 BitModern, Inc - All Rights Reserved
 */

import { _client } from '../../../ClientSdk';
import { getResponse } from '../../actions/getResponse';
import { QueryParams } from '../../actions/QueryParams';
import { RunResultStepRoute } from '../../routes/Routes';
import { RunResultStep } from './RunResultStep';
import { RunResultStepHistory } from './RunResultStepHistory';

export const runResultStepHistoryGet = (
  queryParams?: QueryParams<RunResultStep>,
): Promise<RunResultStepHistory[]> => {
  const config: QueryParams<RunResultStep> = {
    method: 'get',
    url: `${queryParams?.url || RunResultStepRoute()}${
      queryParams?.id ? `/${queryParams?.id}` : ''
    }`,
    params: { revision_log: true, ...queryParams?.params },
    cancelToken: queryParams?.cancelToken,
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<RunResultStepHistory[]>(config)
    : getResponse<RunResultStepHistory[], RunResultStep>(
        queryParams?.api || _client?.api,
        config,
      );
};
