/**
 * Copyright (C) 2021 BitModern, Inc - All Rights Reserved
 */

import { _client } from '../../../ClientSdk';
import { getResponse } from '../../actions/getResponse';
import type { QueryParams } from '../../actions/QueryParams';
import { CasePriorityRoute } from '../../routes/Routes';
import type { CasePriority } from './CasePriority';
import type { CasePriorityHistory } from './CasePriorityHistory';

export const casePriorityHistoryGet = (
  queryParams?: QueryParams<Partial<CasePriority>>,
): Promise<CasePriorityHistory[]> => {
  const config: QueryParams<Partial<CasePriority>> = {
    method: 'get',
    url: `${queryParams?.url ?? CasePriorityRoute()}${
      queryParams?.id ? `/${queryParams?.id}` : ''
    }`,
    params: { revision_log: true, ...queryParams?.params },
    cancelToken: queryParams?.cancelToken,
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<CasePriorityHistory[]>(config)
    : getResponse<CasePriorityHistory[], Partial<CasePriority>>(
        queryParams?.api ?? _client?.api,
        config,
      );
};
