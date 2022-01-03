/**
 * Copyright (C) 2021 BitModern, Inc - All Rights Reserved
 */

import { _client } from '../../../ClientSdk';
import { getResponse } from '../../actions/getResponse';
import { QueryParams } from '../../actions/QueryParams';
import { AppRoute } from '../../routes/Routes';
import { App } from './App';
import { AppHistory } from './AppHistory';

export const appHistoryGet = (
  queryParams?: QueryParams<App>
): Promise<AppHistory[]> => {
  const config: QueryParams<App> = {
    method: 'get',
    url: `${queryParams?.url || AppRoute()}${
      queryParams?.id ? `/${queryParams?.id}` : ''
    }`,
    params: { revision_log: true, ...queryParams?.params },
    cancelToken: queryParams?.cancelToken,
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<AppHistory[]>(config)
    : getResponse<AppHistory[], App>(queryParams?.api || _client?.api, config);
};
