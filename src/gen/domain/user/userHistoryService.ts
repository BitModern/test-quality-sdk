/**
 * Copyright (C) 2021 BitModern, Inc - All Rights Reserved
 */

import { _client } from '../../../ClientSdk';
import { getResponse } from '../../actions/getResponse';
import type { QueryParams } from '../../actions/QueryParams';
import { UserRoute } from '../../routes/Routes';
import type { User } from './User';
import type { UserHistory } from './UserHistory';

export const userHistoryGet = (
  queryParams?: QueryParams<Partial<User>>,
): Promise<UserHistory[]> => {
  const config: QueryParams<Partial<User>> = {
    method: 'get',
    url: `${queryParams?.url ?? UserRoute()}${
      queryParams?.id ? `/${queryParams?.id}` : ''
    }`,
    params: { revision_log: true, ...queryParams?.params },
    cancelToken: queryParams?.cancelToken,
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<UserHistory[]>(config)
    : getResponse<UserHistory[], Partial<User>>(
        queryParams?.api ?? _client?.api,
        config,
      );
};
