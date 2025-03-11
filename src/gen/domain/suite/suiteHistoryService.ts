/**
 * Copyright (C) 2021 BitModern, Inc - All Rights Reserved
 */

import { _client } from '../../../ClientSdk';
import { getResponse } from '../../actions/getResponse';
import type { QueryParams } from '../../actions/QueryParams';
import { SuiteRoute } from '../../routes/Routes';
import type { Suite } from './Suite';
import type { SuiteHistory } from './SuiteHistory';

export const suiteHistoryGet = (
  queryParams?: QueryParams<Partial<Suite>>,
): Promise<SuiteHistory[]> => {
  const config: QueryParams<Partial<Suite>> = {
    method: 'get',
    url: `${queryParams?.url ?? SuiteRoute()}${
      queryParams?.id ? `/${queryParams?.id}` : ''
    }`,
    params: { revision_log: true, ...queryParams?.params },
    cancelToken: queryParams?.cancelToken,
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<SuiteHistory[]>(config)
    : getResponse<SuiteHistory[], Partial<Suite>>(
        queryParams?.api ?? _client?.api,
        config,
      );
};
