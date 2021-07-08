/**
 * Copyright (C) 2021 BitModern, Inc - All Rights Reserved
 */

import { _client } from '../../../Client';
import { getResponse } from '../../actions/getResponse';
import { QueryParams } from '../../actions/QueryParams';
import { ClientRoute } from '../../routes/Routes';
import { Client } from './Client';
import { ClientHistory } from './ClientHistory';

export const clientHistoryGet = (
  queryParams?: QueryParams<Client>
): Promise<ClientHistory[]> => {
  const config: QueryParams<Client> = {
    method: 'get',
    url: `${queryParams?.url || ClientRoute()}${
      queryParams?.id ? `/${queryParams?.id}` : ''
    }`,
    params: { revision_log: true, ...queryParams?.params },
    cancelToken: queryParams?.cancelToken,
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<ClientHistory[]>(config)
    : getResponse<ClientHistory[], Client>(
        queryParams?.api || _client?.api,
        config
      );
};
