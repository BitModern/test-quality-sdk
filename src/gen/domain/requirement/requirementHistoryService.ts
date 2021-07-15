/**
 * Copyright (C) 2021 BitModern, Inc - All Rights Reserved
 */

import { _client } from '../../../ClientSdk';
import { getResponse } from '../../actions/getResponse';
import { QueryParams } from '../../actions/QueryParams';
import { RequirementRoute } from '../../routes/Routes';
import { Requirement } from './Requirement';
import { RequirementHistory } from './RequirementHistory';

export const requirementHistoryGet = (
  queryParams?: QueryParams<Requirement>
): Promise<RequirementHistory[]> => {
  const config: QueryParams<Requirement> = {
    method: 'get',
    url: `${queryParams?.url || RequirementRoute()}${
      queryParams?.id ? `/${queryParams?.id}` : ''
    }`,
    params: { revision_log: true, ...queryParams?.params },
    cancelToken: queryParams?.cancelToken,
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<RequirementHistory[]>(config)
    : getResponse<RequirementHistory[], Requirement>(
        queryParams?.api || _client?.api,
        config
      );
};
