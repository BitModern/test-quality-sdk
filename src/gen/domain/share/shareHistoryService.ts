/**
 * Copyright (C) 2021 BitModern, Inc - All Rights Reserved
 */

import { _client } from '../../../ClientSdk';
import { getResponse } from '../../actions/getResponse';
import type { QueryParams } from '../../actions/QueryParams';
import { ShareRoute } from '../../routes/Routes';
import type { Share } from './Share';
import type { ShareHistory } from './ShareHistory';

export const shareHistoryGet = (
  queryParams?: QueryParams<Partial<Share>>,
): Promise<ShareHistory[]> => {
  const config: QueryParams<Partial<Share>> = {
    method: 'get',
    url: `${queryParams?.url ?? ShareRoute()}${
      queryParams?.id ? `/${queryParams?.id}` : ''
    }`,
    params: { revision_log: true, ...queryParams?.params },
    cancelToken: queryParams?.cancelToken,
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<ShareHistory[]>(config)
    : getResponse<ShareHistory[], Partial<Share>>(
        queryParams?.api ?? _client?.api,
        config,
      );
};
