/**
 * Copyright (C) 2021 BitModern, Inc - All Rights Reserved
 */

import { _client } from '../../../ClientSdk';
import { getResponse } from '../../actions/getResponse';
import type { QueryParams } from '../../actions/QueryParams';
import { AppInstallProjectRoute } from '../../routes/Routes';
import type { AppInstallProject } from './AppInstallProject';
import type { AppInstallProjectHistory } from './AppInstallProjectHistory';

export const appInstallProjectHistoryGet = (
  queryParams?: QueryParams<AppInstallProject>,
): Promise<AppInstallProjectHistory[]> => {
  const config: QueryParams<AppInstallProject> = {
    method: 'get',
    url: `${queryParams?.url ?? AppInstallProjectRoute()}${
      queryParams?.id ? `/${queryParams?.id}` : ''
    }`,
    params: { revision_log: true, ...queryParams?.params },
    cancelToken: queryParams?.cancelToken,
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<AppInstallProjectHistory[]>(config)
    : getResponse<AppInstallProjectHistory[], AppInstallProject>(
        queryParams?.api ?? _client?.api,
        config,
      );
};
