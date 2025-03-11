/**
 * Copyright (C) 2021 BitModern, Inc - All Rights Reserved
 */

import { _client } from '../../../ClientSdk';
import { getResponse } from '../../actions/getResponse';
import type { QueryParams } from '../../actions/QueryParams';
import { StatusTypeRoute } from '../../routes/Routes';
import type { StatusType } from './StatusType';
import type { StatusTypeHistory } from './StatusTypeHistory';

export const statusTypeHistoryGet = (
  queryParams?: QueryParams<Partial<StatusType>>,
): Promise<StatusTypeHistory[]> => {
  const config: QueryParams<Partial<StatusType>> = {
    method: 'get',
    url: `${queryParams?.url ?? StatusTypeRoute()}${
      queryParams?.id ? `/${queryParams?.id}` : ''
    }`,
    params: { revision_log: true, ...queryParams?.params },
    cancelToken: queryParams?.cancelToken,
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<StatusTypeHistory[]>(config)
    : getResponse<StatusTypeHistory[], Partial<StatusType>>(
        queryParams?.api ?? _client?.api,
        config,
      );
};
