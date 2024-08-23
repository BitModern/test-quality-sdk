/**
 * Copyright (C) 2021 BitModern, Inc - All Rights Reserved
 */

import { _client } from '../../../ClientSdk';
import { getResponse } from '../../actions/getResponse';
import type { QueryParams } from '../../actions/QueryParams';
import { ResourcePropertyValueRoute } from '../../routes/Routes';
import type { ResourcePropertyValue } from './ResourcePropertyValue';
import type { ResourcePropertyValueHistory } from './ResourcePropertyValueHistory';

export const resourcePropertyValueHistoryGet = (
  queryParams?: QueryParams<ResourcePropertyValue>,
): Promise<ResourcePropertyValueHistory[]> => {
  const config: QueryParams<ResourcePropertyValue> = {
    method: 'get',
    url: `${queryParams?.url ?? ResourcePropertyValueRoute()}${
      queryParams?.id ? `/${queryParams?.id}` : ''
    }`,
    params: { revision_log: true, ...queryParams?.params },
    cancelToken: queryParams?.cancelToken,
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<ResourcePropertyValueHistory[]>(config)
    : getResponse<ResourcePropertyValueHistory[], ResourcePropertyValue>(
        queryParams?.api ?? _client?.api,
        config,
      );
};
