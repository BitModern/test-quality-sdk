/**
 * Copyright (C) 2022 BitModern, Inc - All Rights Reserved
 */

import { _client } from '../../../ClientSdk';
import { getResponse } from '../../actions/getResponse';
import type { LookupIntegrationParams } from '../../actions/LookupIntegrationParams';
import type { QueryParams } from '../../actions/QueryParams';
import { DefectLabelRoute } from '../../routes/Routes';
import type { DefectLabel } from './DefectLabel';

export const defectLabelGetMany = (
  queryParams?: QueryParams<Partial<LookupIntegrationParams>>,
): Promise<DefectLabel[]> => {
  const config: QueryParams<Partial<LookupIntegrationParams>> = {
    method: 'get',
    url: queryParams?.url ?? DefectLabelRoute(),
    params: queryParams?.params,
    cancelToken: queryParams?.cancelToken,
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<DefectLabel[]>(config)
    : getResponse<DefectLabel[], Partial<LookupIntegrationParams>>(
        queryParams?.api ?? _client?.api,
        config,
      );
};
