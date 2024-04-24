/**
 * Copyright (C) 2021 BitModern, Inc - All Rights Reserved
 */

import { _client } from '../../../ClientSdk';
import { getResponse } from '../../actions/getResponse';
import type { QueryParams } from '../../actions/QueryParams';
import { AppInstallRoute } from '../../routes/Routes';
import type { AppInstall } from './AppInstall';
import type { AppInstallHistory } from './AppInstallHistory';

export const appInstallHistoryGet = (
  queryParams?: QueryParams<AppInstall>,
): Promise<AppInstallHistory[]> => {
  const config: QueryParams<AppInstall> = {
    method: 'get',
    url: `${queryParams?.url ?? AppInstallRoute()}${
      queryParams?.id ? `/${queryParams?.id}` : ''
    }`,
    params: { revision_log: true, ...queryParams?.params },
    cancelToken: queryParams?.cancelToken,
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<AppInstallHistory[]>(config)
    : getResponse<AppInstallHistory[], AppInstall>(
        queryParams?.api ?? _client?.api,
        config,
      );
};
