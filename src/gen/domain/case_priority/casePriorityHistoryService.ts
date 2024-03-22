/**
 * Copyright (C) 2021 BitModern, Inc - All Rights Reserved
 */

import { _client } from '../../../ClientSdk';
import { getResponse } from '../../actions/getResponse';
import { QueryParams } from '../../actions/QueryParams';
import { CasePriorityRoute } from '../../routes/Routes';
import { CasePriority } from './CasePriority';
import { CasePriorityHistory } from './CasePriorityHistory';

export const casePriorityHistoryGet = (
  queryParams?: QueryParams<CasePriority>,
): Promise<CasePriorityHistory[]> => {
  const config: QueryParams<CasePriority> = {
    method: 'get',
    url: `${queryParams?.url || CasePriorityRoute()}${
      queryParams?.id ? `/${queryParams?.id}` : ''
    }`,
    params: { revision_log: true, ...queryParams?.params },
    cancelToken: queryParams?.cancelToken,
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<CasePriorityHistory[]>(config)
    : getResponse<CasePriorityHistory[], CasePriority>(
        queryParams?.api || _client?.api,
        config,
      );
};
