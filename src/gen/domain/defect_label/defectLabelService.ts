/**
 * Copyright (C) 2022 BitModern, Inc - All Rights Reserved
 */

import { _client } from '../../../ClientSdk';
import { getResponse } from '../../actions/getResponse';
import { LookupIntegrationParams } from '../../actions/LookupIntegrationParams';
import { QueryParams } from '../../actions/QueryParams';
import { DefectLabelRoute } from '../../routes/Routes';
import { DefectLabel } from './DefectLabel';

export const defectLabelGetMany = (
  queryParams?: QueryParams<LookupIntegrationParams>,
): Promise<DefectLabel[]> => {
  const config: QueryParams<LookupIntegrationParams> = {
    method: 'get',
    url: queryParams?.url || DefectLabelRoute(),
    params: queryParams?.params,
    cancelToken: queryParams?.cancelToken,
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<DefectLabel[]>(config)
    : getResponse<DefectLabel[], LookupIntegrationParams>(
        queryParams?.api || _client?.api,
        config,
      );
};
