/**
 * Copyright (C) 2021 BitModern, Inc - All Rights Reserved
 */

import { _client } from '../../../ClientSdk';
import { getResponse } from '../../actions/getResponse';
import { QueryParams } from '../../actions/QueryParams';
import { CapabilityRoute } from '../../routes/Routes';
import { Capability } from './Capability';
import { CapabilityHistory } from './CapabilityHistory';

export const capabilityHistoryGet = (
  queryParams?: QueryParams<Capability>
): Promise<CapabilityHistory[]> => {
  const config: QueryParams<Capability> = {
    method: 'get',
    url: `${queryParams?.url || CapabilityRoute()}${
      queryParams?.id ? `/${queryParams?.id}` : ''
    }`,
    params: { revision_log: true, ...queryParams?.params },
    cancelToken: queryParams?.cancelToken,
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<CapabilityHistory[]>(config)
    : getResponse<CapabilityHistory[], Capability>(
        queryParams?.api || _client?.api,
        config
      );
};
