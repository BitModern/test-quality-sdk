/**
 * Copyright (C) 2021 BitModern, Inc - All Rights Reserved
 */

import { _client } from '../../../ClientSdk';
import { getResponse } from '../../actions/getResponse';
import { QueryParams } from '../../actions/QueryParams';
import { WatchRoute } from '../../routes/Routes';
import { Watch } from './Watch';
import { WatchHistory } from './WatchHistory';

export const watchHistoryGet = (
  queryParams?: QueryParams<Watch>,
): Promise<WatchHistory[]> => {
  const config: QueryParams<Watch> = {
    method: 'get',
    url: `${queryParams?.url || WatchRoute()}${
      queryParams?.id ? `/${queryParams?.id}` : ''
    }`,
    params: { revision_log: true, ...queryParams?.params },
    cancelToken: queryParams?.cancelToken,
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<WatchHistory[]>(config)
    : getResponse<WatchHistory[], Watch>(
        queryParams?.api || _client?.api,
        config,
      );
};
