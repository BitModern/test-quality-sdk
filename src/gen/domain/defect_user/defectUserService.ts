/**
 * Copyright (C) 2022 BitModern, Inc - All Rights Reserved
 */

import { _client } from '../../../ClientSdk';
import { getResponse } from '../../actions/getResponse';
import { LookupIntegrationParams } from '../../actions/LookupIntegrationParams';
import { QueryParams } from '../../actions/QueryParams';
import { DefectUserRoute } from '../../routes/Routes';
import { DefectUser } from './DefectUser';

export const defectUserGetMany = (
  queryParams?: QueryParams<LookupIntegrationParams>
): Promise<DefectUser[]> => {
  const config: QueryParams<LookupIntegrationParams> = {
    method: 'get',
    url: queryParams?.url || DefectUserRoute(),
    params: queryParams?.params,
    cancelToken: queryParams?.cancelToken,
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<DefectUser[]>(config)
    : getResponse<DefectUser[], LookupIntegrationParams>(
        queryParams?.api || _client?.api,
        config
      );
};
