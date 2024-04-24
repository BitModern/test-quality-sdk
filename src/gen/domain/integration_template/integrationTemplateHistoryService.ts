/**
 * Copyright (C) 2021 BitModern, Inc - All Rights Reserved
 */

import { _client } from '../../../ClientSdk';
import { getResponse } from '../../actions/getResponse';
import type { QueryParams } from '../../actions/QueryParams';
import { IntegrationTemplateRoute } from '../../routes/Routes';
import type { IntegrationTemplate } from './IntegrationTemplate';
import type { IntegrationTemplateHistory } from './IntegrationTemplateHistory';

export const integrationTemplateHistoryGet = (
  queryParams?: QueryParams<IntegrationTemplate>,
): Promise<IntegrationTemplateHistory[]> => {
  const config: QueryParams<IntegrationTemplate> = {
    method: 'get',
    url: `${queryParams?.url ?? IntegrationTemplateRoute()}${
      queryParams?.id ? `/${queryParams?.id}` : ''
    }`,
    params: { revision_log: true, ...queryParams?.params },
    cancelToken: queryParams?.cancelToken,
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<IntegrationTemplateHistory[]>(config)
    : getResponse<IntegrationTemplateHistory[], IntegrationTemplate>(
        queryParams?.api ?? _client?.api,
        config,
      );
};
