/**
 * Copyright (C) 2022 BitModern, Inc - All Rights Reserved
 */

import { _client } from '../../../ClientSdk';
import { getResponse } from '../../actions/getResponse';
import type { LookupIntegrationParams } from '../../actions/LookupIntegrationParams';
import type { QueryParams } from '../../actions/QueryParams';
import { DefectPriorityRoute } from '../../routes/Routes';
import type { DefectPriority } from './DefectPriority';

export const defectPriorityGetMany = (
  queryParams?: QueryParams<Partial<LookupIntegrationParams>>,
): Promise<DefectPriority[]> => {
  const config: QueryParams<Partial<LookupIntegrationParams>> = {
    method: 'get',
    url: queryParams?.url ?? DefectPriorityRoute(),
    params: queryParams?.params,
    cancelToken: queryParams?.cancelToken,
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<DefectPriority[]>(config)
    : getResponse<DefectPriority[], Partial<LookupIntegrationParams>>(
        queryParams?.api ?? _client?.api,
        config,
      );
};
