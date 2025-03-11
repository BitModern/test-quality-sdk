/**
 * Copyright (C) 2021 BitModern, Inc - All Rights Reserved
 */

import { _client } from '../../../ClientSdk';
import { getResponse } from '../../actions/getResponse';
import type { QueryParams } from '../../actions/QueryParams';
import { CaseTypeRoute } from '../../routes/Routes';
import type { CaseType } from './CaseType';
import type { CaseTypeHistory } from './CaseTypeHistory';

export const caseTypeHistoryGet = (
  queryParams?: QueryParams<Partial<CaseType>>,
): Promise<CaseTypeHistory[]> => {
  const config: QueryParams<Partial<CaseType>> = {
    method: 'get',
    url: `${queryParams?.url ?? CaseTypeRoute()}${
      queryParams?.id ? `/${queryParams?.id}` : ''
    }`,
    params: { revision_log: true, ...queryParams?.params },
    cancelToken: queryParams?.cancelToken,
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<CaseTypeHistory[]>(config)
    : getResponse<CaseTypeHistory[], Partial<CaseType>>(
        queryParams?.api ?? _client?.api,
        config,
      );
};
