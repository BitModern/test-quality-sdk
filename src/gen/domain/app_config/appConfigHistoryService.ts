/**
 * Copyright (C) 2021 BitModern, Inc - All Rights Reserved
 */

import { _client } from '../../../ClientSdk';
import { getResponse } from '../../actions/getResponse';
import { QueryParams } from '../../actions/QueryParams';
import { AppConfigRoute } from '../../routes/Routes';
import { AppConfig } from './AppConfig';
import { AppConfigHistory } from './AppConfigHistory';

export const appConfigHistoryGet = (
  queryParams?: QueryParams<AppConfig>,
): Promise<AppConfigHistory[]> => {
  const config: QueryParams<AppConfig> = {
    method: 'get',
    url: `${queryParams?.url || AppConfigRoute()}${
      queryParams?.id ? `/${queryParams?.id}` : ''
    }`,
    params: { revision_log: true, ...queryParams?.params },
    cancelToken: queryParams?.cancelToken,
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<AppConfigHistory[]>(config)
    : getResponse<AppConfigHistory[], AppConfig>(
        queryParams?.api || _client?.api,
        config,
      );
};
