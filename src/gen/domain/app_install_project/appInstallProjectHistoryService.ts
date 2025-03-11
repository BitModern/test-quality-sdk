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
  queryParams?: QueryParams<Partial<AppInstallProject>>,
): Promise<AppInstallProjectHistory[]> => {
  const config: QueryParams<Partial<AppInstallProject>> = {
    method: 'get',
    url: `${queryParams?.url ?? AppInstallProjectRoute()}${
      queryParams?.id ? `/${queryParams?.id}` : ''
    }`,
    params: { revision_log: true, ...queryParams?.params },
    cancelToken: queryParams?.cancelToken,
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<AppInstallProjectHistory[]>(config)
    : getResponse<AppInstallProjectHistory[], Partial<AppInstallProject>>(
        queryParams?.api ?? _client?.api,
        config,
      );
};
