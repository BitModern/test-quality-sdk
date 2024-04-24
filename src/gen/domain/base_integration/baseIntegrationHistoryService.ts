/**
 * Copyright (C) 2021 BitModern, Inc - All Rights Reserved
 */

import { _client } from '../../../ClientSdk';
import { getResponse } from '../../actions/getResponse';
import type { QueryParams } from '../../actions/QueryParams';
import { BaseIntegrationRoute } from '../../routes/Routes';
import type { BaseIntegration } from './BaseIntegration';
import type { BaseIntegrationHistory } from './BaseIntegrationHistory';

export const baseIntegrationHistoryGet = (
  queryParams?: QueryParams<BaseIntegration>,
): Promise<BaseIntegrationHistory[]> => {
  const config: QueryParams<BaseIntegration> = {
    method: 'get',
    url: `${queryParams?.url ?? BaseIntegrationRoute()}${
      queryParams?.id ? `/${queryParams?.id}` : ''
    }`,
    params: { revision_log: true, ...queryParams?.params },
    cancelToken: queryParams?.cancelToken,
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<BaseIntegrationHistory[]>(config)
    : getResponse<BaseIntegrationHistory[], BaseIntegration>(
        queryParams?.api ?? _client?.api,
        config,
      );
};
