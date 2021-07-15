/**
 * Copyright (C) 2021 BitModern, Inc - All Rights Reserved
 */

import { _client } from '../../../ClientSdk';
import { getResponse } from '../../actions/getResponse';
import { QueryParams } from '../../actions/QueryParams';
import { PlanSuiteTestIncludeRoute } from '../../routes/Routes';
import { PlanSuiteTestInclude } from './PlanSuiteTestInclude';
import { PlanSuiteTestIncludeHistory } from './PlanSuiteTestIncludeHistory';

export const planSuiteTestIncludeHistoryGet = (
  queryParams?: QueryParams<PlanSuiteTestInclude>
): Promise<PlanSuiteTestIncludeHistory[]> => {
  const config: QueryParams<PlanSuiteTestInclude> = {
    method: 'get',
    url: `${queryParams?.url || PlanSuiteTestIncludeRoute()}${
      queryParams?.id ? `/${queryParams?.id}` : ''
    }`,
    params: { revision_log: true, ...queryParams?.params },
    cancelToken: queryParams?.cancelToken,
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<PlanSuiteTestIncludeHistory[]>(config)
    : getResponse<PlanSuiteTestIncludeHistory[], PlanSuiteTestInclude>(
        queryParams?.api || _client?.api,
        config
      );
};
