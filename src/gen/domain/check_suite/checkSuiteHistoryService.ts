/**
 * Copyright (C) 2021 BitModern, Inc - All Rights Reserved
 */

import { _client } from '../../../ClientSdk';
import { getResponse } from '../../actions/getResponse';
import { QueryParams } from '../../actions/QueryParams';
import { CheckSuiteRoute } from '../../routes/Routes';
import { CheckSuite } from './CheckSuite';
import { CheckSuiteHistory } from './CheckSuiteHistory';

export const checkSuiteHistoryGet = (
  queryParams?: QueryParams<CheckSuite>
): Promise<CheckSuiteHistory[]> => {
  const config: QueryParams<CheckSuite> = {
    method: 'get',
    url: `${queryParams?.url || CheckSuiteRoute()}${
      queryParams?.id ? `/${queryParams?.id}` : ''
    }`,
    params: { revision_log: true, ...queryParams?.params },
    cancelToken: queryParams?.cancelToken,
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<CheckSuiteHistory[]>(config)
    : getResponse<CheckSuiteHistory[], CheckSuite>(
        queryParams?.api || _client?.api,
        config
      );
};
