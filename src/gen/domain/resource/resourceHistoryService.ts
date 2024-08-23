/**
 * Copyright (C) 2021 BitModern, Inc - All Rights Reserved
 */

import { _client } from '../../../ClientSdk';
import { getResponse } from '../../actions/getResponse';
import type { QueryParams } from '../../actions/QueryParams';
import { ResourceRoute } from '../../routes/Routes';
import type { Resource } from './Resource';
import type { ResourceHistory } from './ResourceHistory';

export const resourceHistoryGet = (
  queryParams?: QueryParams<Resource>,
): Promise<ResourceHistory[]> => {
  const config: QueryParams<Resource> = {
    method: 'get',
    url: `${queryParams?.url ?? ResourceRoute()}${
      queryParams?.id ? `/${queryParams?.id}` : ''
    }`,
    params: { revision_log: true, ...queryParams?.params },
    cancelToken: queryParams?.cancelToken,
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<ResourceHistory[]>(config)
    : getResponse<ResourceHistory[], Resource>(
        queryParams?.api ?? _client?.api,
        config,
      );
};
