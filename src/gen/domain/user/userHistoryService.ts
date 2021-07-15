/**
 * Copyright (C) 2021 BitModern, Inc - All Rights Reserved
 */

import { _client } from '../../../ClientSdk';
import { getResponse } from '../../actions/getResponse';
import { QueryParams } from '../../actions/QueryParams';
import { UserRoute } from '../../routes/Routes';
import { User } from './User';
import { UserHistory } from './UserHistory';

export const userHistoryGet = (
  queryParams?: QueryParams<User>
): Promise<UserHistory[]> => {
  const config: QueryParams<User> = {
    method: 'get',
    url: `${queryParams?.url || UserRoute()}${
      queryParams?.id ? `/${queryParams?.id}` : ''
    }`,
    params: { revision_log: true, ...queryParams?.params },
    cancelToken: queryParams?.cancelToken,
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<UserHistory[]>(config)
    : getResponse<UserHistory[], User>(
        queryParams?.api || _client?.api,
        config
      );
};
