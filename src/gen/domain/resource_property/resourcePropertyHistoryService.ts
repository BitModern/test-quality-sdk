/**
 * Copyright (C) 2021 BitModern, Inc - All Rights Reserved
 */

import { _client } from '../../../ClientSdk';
import { getResponse } from '../../actions/getResponse';
import type { QueryParams } from '../../actions/QueryParams';
import { ResourcePropertyRoute } from '../../routes/Routes';
import type { ResourceProperty } from './ResourceProperty';
import type { ResourcePropertyHistory } from './ResourcePropertyHistory';

export const resourcePropertyHistoryGet = (
  queryParams?: QueryParams<ResourceProperty>,
): Promise<ResourcePropertyHistory[]> => {
  const config: QueryParams<ResourceProperty> = {
    method: 'get',
    url: `${queryParams?.url ?? ResourcePropertyRoute()}${
      queryParams?.id ? `/${queryParams?.id}` : ''
    }`,
    params: { revision_log: true, ...queryParams?.params },
    cancelToken: queryParams?.cancelToken,
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<ResourcePropertyHistory[]>(config)
    : getResponse<ResourcePropertyHistory[], ResourceProperty>(
        queryParams?.api ?? _client?.api,
        config,
      );
};
