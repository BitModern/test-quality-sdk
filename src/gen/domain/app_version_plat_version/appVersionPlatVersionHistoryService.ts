/**
 * Copyright (C) 2021 BitModern, Inc - All Rights Reserved
 */

import { _client } from '../../../ClientSdk';
import { getResponse } from '../../actions/getResponse';
import { QueryParams } from '../../actions/QueryParams';
import { AppVersionPlatVersionRoute } from '../../routes/Routes';
import { AppVersionPlatVersion } from './AppVersionPlatVersion';
import { AppVersionPlatVersionHistory } from './AppVersionPlatVersionHistory';

export const appVersionPlatVersionHistoryGet = (
  queryParams?: QueryParams<AppVersionPlatVersion>
): Promise<AppVersionPlatVersionHistory[]> => {
  const config: QueryParams<AppVersionPlatVersion> = {
    method: 'get',
    url: `${queryParams?.url || AppVersionPlatVersionRoute()}${
      queryParams?.id ? `/${queryParams?.id}` : ''
    }`,
    params: { revision_log: true, ...queryParams?.params },
    cancelToken: queryParams?.cancelToken,
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<AppVersionPlatVersionHistory[]>(config)
    : getResponse<AppVersionPlatVersionHistory[], AppVersionPlatVersion>(
        queryParams?.api || _client?.api,
        config
      );
};
