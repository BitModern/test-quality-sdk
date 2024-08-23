/**
 * Copyright (C) 2021 BitModern, Inc - All Rights Reserved
 */

import { _client } from '../../../ClientSdk';
import { getResponse } from '../../actions/getResponse';
import type { QueryParams } from '../../actions/QueryParams';
import { EnvironmentRoute } from '../../routes/Routes';
import type { Environment } from './Environment';
import type { EnvironmentHistory } from './EnvironmentHistory';

export const environmentHistoryGet = (
  queryParams?: QueryParams<Environment>,
): Promise<EnvironmentHistory[]> => {
  const config: QueryParams<Environment> = {
    method: 'get',
    url: `${queryParams?.url ?? EnvironmentRoute()}${
      queryParams?.id ? `/${queryParams?.id}` : ''
    }`,
    params: { revision_log: true, ...queryParams?.params },
    cancelToken: queryParams?.cancelToken,
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<EnvironmentHistory[]>(config)
    : getResponse<EnvironmentHistory[], Environment>(
        queryParams?.api ?? _client?.api,
        config,
      );
};
