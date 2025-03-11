/**
 * Copyright (C) 2021 BitModern, Inc - All Rights Reserved
 */

import { _client } from '../../../ClientSdk';
import { getResponse } from '../../actions/getResponse';
import type { QueryParams } from '../../actions/QueryParams';
import { AppConfigRoute } from '../../routes/Routes';
import type { AppConfig } from './AppConfig';
import type { AppConfigHistory } from './AppConfigHistory';

export const appConfigHistoryGet = (
  queryParams?: QueryParams<Partial<AppConfig>>,
): Promise<AppConfigHistory[]> => {
  const config: QueryParams<Partial<AppConfig>> = {
    method: 'get',
    url: `${queryParams?.url ?? AppConfigRoute()}${
      queryParams?.id ? `/${queryParams?.id}` : ''
    }`,
    params: { revision_log: true, ...queryParams?.params },
    cancelToken: queryParams?.cancelToken,
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<AppConfigHistory[]>(config)
    : getResponse<AppConfigHistory[], Partial<AppConfig>>(
        queryParams?.api ?? _client?.api,
        config,
      );
};
