/**
 * Copyright (C) 2021 BitModern, Inc - All Rights Reserved
 */

import { _client } from '../../../ClientSdk';
import { getResponse } from '../../actions/getResponse';
import type { QueryParams } from '../../actions/QueryParams';
import { MilestoneRoute } from '../../routes/Routes';
import type { Milestone } from './Milestone';
import type { MilestoneHistory } from './MilestoneHistory';

export const milestoneHistoryGet = (
  queryParams?: QueryParams<Partial<Milestone>>,
): Promise<MilestoneHistory[]> => {
  const config: QueryParams<Partial<Milestone>> = {
    method: 'get',
    url: `${queryParams?.url ?? MilestoneRoute()}${
      queryParams?.id ? `/${queryParams?.id}` : ''
    }`,
    params: { revision_log: true, ...queryParams?.params },
    cancelToken: queryParams?.cancelToken,
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<MilestoneHistory[]>(config)
    : getResponse<MilestoneHistory[], Partial<Milestone>>(
        queryParams?.api ?? _client?.api,
        config,
      );
};
