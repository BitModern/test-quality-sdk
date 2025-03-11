/**
 * Copyright (C) 2021 BitModern, Inc - All Rights Reserved
 */

import { _client } from '../../../ClientSdk';
import { getResponse } from '../../actions/getResponse';
import type { QueryParams } from '../../actions/QueryParams';
import { ResourceValueRoute } from '../../routes/Routes';
import type { ResourceValue } from './ResourceValue';
import type { ResourceValueHistory } from './ResourceValueHistory';

export const resourceValueHistoryGet = (
  queryParams?: QueryParams<Partial<ResourceValue>>,
): Promise<ResourceValueHistory[]> => {
  const config: QueryParams<Partial<ResourceValue>> = {
    method: 'get',
    url: `${queryParams?.url ?? ResourceValueRoute()}${
      queryParams?.id ? `/${queryParams?.id}` : ''
    }`,
    params: { revision_log: true, ...queryParams?.params },
    cancelToken: queryParams?.cancelToken,
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<ResourceValueHistory[]>(config)
    : getResponse<ResourceValueHistory[], Partial<ResourceValue>>(
        queryParams?.api ?? _client?.api,
        config,
      );
};
