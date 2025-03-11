/**
 * Copyright (C) 2021 BitModern, Inc - All Rights Reserved
 */

import { _client } from '../../../ClientSdk';
import { getResponse } from '../../actions/getResponse';
import type { QueryParams } from '../../actions/QueryParams';
import { StatusRoute } from '../../routes/Routes';
import type { Status } from './Status';
import type { StatusHistory } from './StatusHistory';

export const statusHistoryGet = (
  queryParams?: QueryParams<Partial<Status>>,
): Promise<StatusHistory[]> => {
  const config: QueryParams<Partial<Status>> = {
    method: 'get',
    url: `${queryParams?.url ?? StatusRoute()}${
      queryParams?.id ? `/${queryParams?.id}` : ''
    }`,
    params: { revision_log: true, ...queryParams?.params },
    cancelToken: queryParams?.cancelToken,
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<StatusHistory[]>(config)
    : getResponse<StatusHistory[], Partial<Status>>(
        queryParams?.api ?? _client?.api,
        config,
      );
};
