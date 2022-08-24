/**
 * Copyright (C) 2022 BitModern, Inc - All Rights Reserved
 */

import { _client } from '../../../ClientSdk';
import { getResponse } from '../../actions/getResponse';
import { LookupIntegrationParams } from '../../actions/LookupIntegrationParams';
import { QueryParams } from '../../actions/QueryParams';
import { DefectComponentRoute } from '../../routes/Routes';
import { DefectComponent } from './DefectComponent';

export const defectComponentGetMany = (
  queryParams?: QueryParams<LookupIntegrationParams>
): Promise<DefectComponent[]> => {
  const config: QueryParams<LookupIntegrationParams> = {
    method: 'get',
    url: queryParams?.url || DefectComponentRoute(),
    params: queryParams?.params,
    cancelToken: queryParams?.cancelToken,
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<DefectComponent[]>(config)
    : getResponse<DefectComponent[], LookupIntegrationParams>(
        queryParams?.api || _client?.api,
        config
      );
};
