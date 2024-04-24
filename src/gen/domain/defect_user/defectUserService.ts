/**
 * Copyright (C) 2022 BitModern, Inc - All Rights Reserved
 */

import { _client } from '../../../ClientSdk';
import { getResponse } from '../../actions/getResponse';
import type { LookupIntegrationParams } from '../../actions/LookupIntegrationParams';
import type { QueryParams } from '../../actions/QueryParams';
import type { DefectUserRoute } from '../../routes/Routes';
import type { DefectUser } from './DefectUser';

export const defectUserGetMany = (
  queryParams?: QueryParams<LookupIntegrationParams>,
): Promise<DefectUser[]> => {
  const config: QueryParams<LookupIntegrationParams> = {
    method: 'get',
    url: queryParams?.url ?? DefectUserRoute(),
    params: queryParams?.params,
    cancelToken: queryParams?.cancelToken,
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<DefectUser[]>(config)
    : getResponse<DefectUser[], LookupIntegrationParams>(
        queryParams?.api ?? _client?.api,
        config,
      );
};
