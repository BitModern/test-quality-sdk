/**
 * Copyright (C) 2021 BitModern, Inc - All Rights Reserved
 */

import { _client } from '../../../ClientSdk';
import { getResponse } from '../../actions/getResponse';
import type { QueryParams } from '../../actions/QueryParams';
import { StepRoute } from '../../routes/Routes';
import type { Step } from './Step';
import type { StepHistory } from './StepHistory';

export const stepHistoryGet = (
  queryParams?: QueryParams<Partial<Step>>,
): Promise<StepHistory[]> => {
  const config: QueryParams<Partial<Step>> = {
    method: 'get',
    url: `${queryParams?.url ?? StepRoute()}${
      queryParams?.id ? `/${queryParams?.id}` : ''
    }`,
    params: { revision_log: true, ...queryParams?.params },
    cancelToken: queryParams?.cancelToken,
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<StepHistory[]>(config)
    : getResponse<StepHistory[], Partial<Step>>(
        queryParams?.api ?? _client?.api,
        config,
      );
};
