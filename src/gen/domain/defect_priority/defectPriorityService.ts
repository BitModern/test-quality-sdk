/**
 * Copyright (C) 2022 BitModern, Inc - All Rights Reserved
 */

import { _client } from '../../../ClientSdk';
import { getResponse } from '../../actions/getResponse';
import { LookupIntegrationParams } from '../../actions/LookupIntegrationParams';
import { QueryParams } from '../../actions/QueryParams';
import { DefectPriorityRoute } from '../../routes/Routes';
import { DefectPriority } from './DefectPriority';

export const defectPriorityGetMany = (
  queryParams?: QueryParams<LookupIntegrationParams>,
): Promise<DefectPriority[]> => {
  const config: QueryParams<LookupIntegrationParams> = {
    method: 'get',
    url: queryParams?.url || DefectPriorityRoute(),
    params: queryParams?.params,
    cancelToken: queryParams?.cancelToken,
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<DefectPriority[]>(config)
    : getResponse<DefectPriority[], LookupIntegrationParams>(
        queryParams?.api || _client?.api,
        config,
      );
};
