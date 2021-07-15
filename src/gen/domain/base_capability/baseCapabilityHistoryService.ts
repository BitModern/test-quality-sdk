/**
 * Copyright (C) 2021 BitModern, Inc - All Rights Reserved
 */

import { _client } from '../../../ClientSdk';
import { getResponse } from '../../actions/getResponse';
import { QueryParams } from '../../actions/QueryParams';
import { BaseCapabilityRoute } from '../../routes/Routes';
import { BaseCapability } from './BaseCapability';
import { BaseCapabilityHistory } from './BaseCapabilityHistory';

export const baseCapabilityHistoryGet = (
  queryParams?: QueryParams<BaseCapability>
): Promise<BaseCapabilityHistory[]> => {
  const config: QueryParams<BaseCapability> = {
    method: 'get',
    url: `${queryParams?.url || BaseCapabilityRoute()}${
      queryParams?.id ? `/${queryParams?.id}` : ''
    }`,
    params: { revision_log: true, ...queryParams?.params },
    cancelToken: queryParams?.cancelToken,
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<BaseCapabilityHistory[]>(config)
    : getResponse<BaseCapabilityHistory[], BaseCapability>(
        queryParams?.api || _client?.api,
        config
      );
};
