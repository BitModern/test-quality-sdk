/**
 * Copyright (C) 2021 BitModern, Inc - All Rights Reserved
 */

import { _client } from '../../../ClientSdk';
import { getResponse } from '../../actions/getResponse';
import { QueryParams } from '../../actions/QueryParams';
import { PlanRoute } from '../../routes/Routes';
import { Plan } from './Plan';
import { PlanHistory } from './PlanHistory';

export const planHistoryGet = (
  queryParams?: QueryParams<Plan>,
): Promise<PlanHistory[]> => {
  const config: QueryParams<Plan> = {
    method: 'get',
    url: `${queryParams?.url || PlanRoute()}${
      queryParams?.id ? `/${queryParams?.id}` : ''
    }`,
    params: { revision_log: true, ...queryParams?.params },
    cancelToken: queryParams?.cancelToken,
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<PlanHistory[]>(config)
    : getResponse<PlanHistory[], Plan>(
        queryParams?.api || _client?.api,
        config,
      );
};
