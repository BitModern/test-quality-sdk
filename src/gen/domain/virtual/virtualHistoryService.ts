/**
 * Copyright (C) 2021 BitModern, Inc - All Rights Reserved
 */

import { _client } from '../../../ClientSdk';
import { getResponse } from '../../actions/getResponse';
import type { QueryParams } from '../../actions/QueryParams';
import { VirtualRoute } from '../../routes/Routes';
import type { Virtual } from './Virtual';
import type { VirtualHistory } from './VirtualHistory';

export const virtualHistoryGet = (
  queryParams?: QueryParams<Partial<Virtual>>,
): Promise<VirtualHistory[]> => {
  const config: QueryParams<Partial<Virtual>> = {
    method: 'get',
    url: `${queryParams?.url ?? VirtualRoute()}${
      queryParams?.id ? `/${queryParams?.id}` : ''
    }`,
    params: { revision_log: true, ...queryParams?.params },
    cancelToken: queryParams?.cancelToken,
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<VirtualHistory[]>(config)
    : getResponse<VirtualHistory[], Partial<Virtual>>(
        queryParams?.api ?? _client?.api,
        config,
      );
};
