/**
 * Copyright (C) 2021 BitModern, Inc - All Rights Reserved
 */

import { _client } from '../../../ClientSdk';
import { getResponse } from '../../actions/getResponse';
import type { QueryParams } from '../../actions/QueryParams';
import { TestPlanRoute } from '../../routes/Routes';
import type { TestPlan } from './TestPlan';
import type { TestPlanHistory } from './TestPlanHistory';

export const testPlanHistoryGet = (
  queryParams?: QueryParams<TestPlan>,
): Promise<TestPlanHistory[]> => {
  const config: QueryParams<TestPlan> = {
    method: 'get',
    url: `${queryParams?.url ?? TestPlanRoute()}${
      queryParams?.id ? `/${queryParams?.id}` : ''
    }`,
    params: { revision_log: true, ...queryParams?.params },
    cancelToken: queryParams?.cancelToken,
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<TestPlanHistory[]>(config)
    : getResponse<TestPlanHistory[], TestPlan>(
        queryParams?.api ?? _client?.api,
        config,
      );
};
