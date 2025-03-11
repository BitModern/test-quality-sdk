/**
 * Copyright (C) 2021 BitModern, Inc - All Rights Reserved
 */

import { _client } from '../../../ClientSdk';
import { getResponse } from '../../actions/getResponse';
import type { QueryParams } from '../../actions/QueryParams';
import { ClientRoute } from '../../routes/Routes';
import type { Client } from './Client';
import type { ClientHistory } from './ClientHistory';

export const clientHistoryGet = (
  queryParams?: QueryParams<Partial<Client>>,
): Promise<ClientHistory[]> => {
  const config: QueryParams<Partial<Client>> = {
    method: 'get',
    url: `${queryParams?.url ?? ClientRoute()}${
      queryParams?.id ? `/${queryParams?.id}` : ''
    }`,
    params: { revision_log: true, ...queryParams?.params },
    cancelToken: queryParams?.cancelToken,
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<ClientHistory[]>(config)
    : getResponse<ClientHistory[], Partial<Client>>(
        queryParams?.api ?? _client?.api,
        config,
      );
};
