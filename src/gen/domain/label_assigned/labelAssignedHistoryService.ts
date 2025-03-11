/**
 * Copyright (C) 2021 BitModern, Inc - All Rights Reserved
 */

import { _client } from '../../../ClientSdk';
import { getResponse } from '../../actions/getResponse';
import type { QueryParams } from '../../actions/QueryParams';
import { LabelAssignedRoute } from '../../routes/Routes';
import type { LabelAssigned } from './LabelAssigned';
import type { LabelAssignedHistory } from './LabelAssignedHistory';

export const labelAssignedHistoryGet = (
  queryParams?: QueryParams<Partial<LabelAssigned>>,
): Promise<LabelAssignedHistory[]> => {
  const config: QueryParams<Partial<LabelAssigned>> = {
    method: 'get',
    url: `${queryParams?.url ?? LabelAssignedRoute()}${
      queryParams?.id ? `/${queryParams?.id}` : ''
    }`,
    params: { revision_log: true, ...queryParams?.params },
    cancelToken: queryParams?.cancelToken,
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<LabelAssignedHistory[]>(config)
    : getResponse<LabelAssignedHistory[], Partial<LabelAssigned>>(
        queryParams?.api ?? _client?.api,
        config,
      );
};
