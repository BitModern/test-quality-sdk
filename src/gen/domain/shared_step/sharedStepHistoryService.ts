/**
 * Copyright (C) 2021 BitModern, Inc - All Rights Reserved
 */

import { _client } from '../../../ClientSdk';
import { getResponse } from '../../actions/getResponse';
import { QueryParams } from '../../actions/QueryParams';
import { SharedStepRoute } from '../../routes/Routes';
import { SharedStep } from './SharedStep';
import { SharedStepHistory } from './SharedStepHistory';

export const sharedStepHistoryGet = (
  queryParams?: QueryParams<SharedStep>
): Promise<SharedStepHistory[]> => {
  const config: QueryParams<SharedStep> = {
    method: 'get',
    url: `${queryParams?.url || SharedStepRoute()}${
      queryParams?.id ? `/${queryParams?.id}` : ''
    }`,
    params: { revision_log: true, ...queryParams?.params },
    cancelToken: queryParams?.cancelToken,
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<SharedStepHistory[]>(config)
    : getResponse<SharedStepHistory[], SharedStep>(
        queryParams?.api || _client?.api,
        config
      );
};
