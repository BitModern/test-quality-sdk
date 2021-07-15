/**
 * Copyright (C) 2021 BitModern, Inc - All Rights Reserved
 */

import { _client } from '../../../ClientSdk';
import { getResponse } from '../../actions/getResponse';
import { QueryParams } from '../../actions/QueryParams';
import { IntegrationRoute } from '../../routes/Routes';
import { Integration } from './Integration';
import { IntegrationHistory } from './IntegrationHistory';

export const integrationHistoryGet = (
  queryParams?: QueryParams<Integration>
): Promise<IntegrationHistory[]> => {
  const config: QueryParams<Integration> = {
    method: 'get',
    url: `${queryParams?.url || IntegrationRoute()}${
      queryParams?.id ? `/${queryParams?.id}` : ''
    }`,
    params: { revision_log: true, ...queryParams?.params },
    cancelToken: queryParams?.cancelToken,
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<IntegrationHistory[]>(config)
    : getResponse<IntegrationHistory[], Integration>(
        queryParams?.api || _client?.api,
        config
      );
};
