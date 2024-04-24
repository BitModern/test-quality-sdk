/**
 * Copyright (C) 2022 BitModern, Inc - All Rights Reserved
 */

import { _client } from '../../../ClientSdk';
import { getResponse } from '../../actions/getResponse';
import type { LookupIntegrationParams } from '../../actions/LookupIntegrationParams';
import type { QueryParams } from '../../actions/QueryParams';
import type { DefectLabelRoute } from '../../routes/Routes';
import type { DefectLabel } from './DefectLabel';

export const defectLabelGetMany = (
  queryParams?: QueryParams<LookupIntegrationParams>,
): Promise<DefectLabel[]> => {
  const config: QueryParams<LookupIntegrationParams> = {
    method: 'get',
    url: queryParams?.url ?? DefectLabelRoute(),
    params: queryParams?.params,
    cancelToken: queryParams?.cancelToken,
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<DefectLabel[]>(config)
    : getResponse<DefectLabel[], LookupIntegrationParams>(
        queryParams?.api ?? _client?.api,
        config,
      );
};
