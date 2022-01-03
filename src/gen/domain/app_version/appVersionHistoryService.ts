/**
 * Copyright (C) 2021 BitModern, Inc - All Rights Reserved
 */

import { _client } from '../../../ClientSdk';
import { getResponse } from '../../actions/getResponse';
import { QueryParams } from '../../actions/QueryParams';
import { AppVersionRoute } from '../../routes/Routes';
import { AppVersion } from './AppVersion';
import { AppVersionHistory } from './AppVersionHistory';

export const appVersionHistoryGet = (
  queryParams?: QueryParams<AppVersion>
): Promise<AppVersionHistory[]> => {
  const config: QueryParams<AppVersion> = {
    method: 'get',
    url: `${queryParams?.url || AppVersionRoute()}${
      queryParams?.id ? `/${queryParams?.id}` : ''
    }`,
    params: { revision_log: true, ...queryParams?.params },
    cancelToken: queryParams?.cancelToken,
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<AppVersionHistory[]>(config)
    : getResponse<AppVersionHistory[], AppVersion>(
        queryParams?.api || _client?.api,
        config
      );
};
