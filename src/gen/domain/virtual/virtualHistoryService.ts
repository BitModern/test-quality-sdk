/**
 * Copyright (C) 2021 BitModern, Inc - All Rights Reserved
 */

import { _client } from '../../../Client';
import { getResponse } from '../../actions/getResponse';
import { QueryParams } from '../../actions/QueryParams';
import { VirtualRoute } from '../../routes/Routes';
import { Virtual } from './Virtual';
import { VirtualHistory } from './VirtualHistory';

export const virtualHistoryGet = (
  queryParams?: QueryParams<Virtual>
): Promise<VirtualHistory[]> => {
  const config: QueryParams<Virtual> = {
    method: 'get',
    url: `${queryParams?.url || VirtualRoute()}${
      queryParams?.id ? `/${queryParams?.id}` : ''
    }`,
    params: { revision_log: true, ...queryParams?.params },
    cancelToken: queryParams?.cancelToken,
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<VirtualHistory[]>(config)
    : getResponse<VirtualHistory[], Virtual>(
        queryParams?.api || _client?.api,
        config
      );
};
