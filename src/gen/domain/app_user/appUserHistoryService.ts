/**
 * Copyright (C) 2021 BitModern, Inc - All Rights Reserved
 */

import { _client } from '../../../ClientSdk';
import { getResponse } from '../../actions/getResponse';
import { QueryParams } from '../../actions/QueryParams';
import { AppUserRoute } from '../../routes/Routes';
import { AppUser } from './AppUser';
import { AppUserHistory } from './AppUserHistory';

export const appUserHistoryGet = (
  queryParams?: QueryParams<AppUser>,
): Promise<AppUserHistory[]> => {
  const config: QueryParams<AppUser> = {
    method: 'get',
    url: `${queryParams?.url || AppUserRoute()}${
      queryParams?.id ? `/${queryParams?.id}` : ''
    }`,
    params: { revision_log: true, ...queryParams?.params },
    cancelToken: queryParams?.cancelToken,
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<AppUserHistory[]>(config)
    : getResponse<AppUserHistory[], AppUser>(
        queryParams?.api || _client?.api,
        config,
      );
};
