/**
 * Copyright (C) 2021 BitModern, Inc - All Rights Reserved
 */

import { _client } from '../../../ClientSdk';
import { getResponse } from '../../actions/getResponse';
import type { QueryParams } from '../../actions/QueryParams';
import { RunResultStepRoute } from '../../routes/Routes';
import type { RunResultStep } from './RunResultStep';
import type { RunResultStepHistory } from './RunResultStepHistory';

export const runResultStepHistoryGet = (
  queryParams?: QueryParams<Partial<RunResultStep>>,
): Promise<RunResultStepHistory[]> => {
  const config: QueryParams<Partial<RunResultStep>> = {
    method: 'get',
    url: `${queryParams?.url ?? RunResultStepRoute()}${
      queryParams?.id ? `/${queryParams?.id}` : ''
    }`,
    params: { revision_log: true, ...queryParams?.params },
    cancelToken: queryParams?.cancelToken,
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<RunResultStepHistory[]>(config)
    : getResponse<RunResultStepHistory[], Partial<RunResultStep>>(
        queryParams?.api ?? _client?.api,
        config,
      );
};
