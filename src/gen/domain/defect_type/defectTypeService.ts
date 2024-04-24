/**
 * Copyright (C) 2022 BitModern, Inc - All Rights Reserved
 */

import { _client } from '../../../ClientSdk';
import { getResponse } from '../../actions/getResponse';
import type { LookupIntegrationParams } from '../../actions/LookupIntegrationParams';
import type { QueryParams } from '../../actions/QueryParams';
import { DefectTypeRoute } from '../../routes/Routes';
import type { DefectType } from './DefectType';

export const defectTypeGetMany = (
  queryParams?: QueryParams<LookupIntegrationParams>,
): Promise<DefectType[]> => {
  const config: QueryParams<LookupIntegrationParams> = {
    method: 'get',
    url: queryParams?.url ?? DefectTypeRoute(),
    params: queryParams?.params,
    cancelToken: queryParams?.cancelToken,
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<DefectType[]>(config)
    : getResponse<DefectType[], LookupIntegrationParams>(
        queryParams?.api ?? _client?.api,
        config,
      );
};
