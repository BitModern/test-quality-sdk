/**
 * Copyright (C) 2021 BitModern, Inc - All Rights Reserved
 */

import { _client } from '../../../Client';
import { getResponse } from '../../actions/getResponse';
import { QueryParams } from '../../actions/QueryParams';
import { CaseTypeRoute } from '../../routes/Routes';
import { CaseType } from './CaseType';
import { CaseTypeHistory } from './CaseTypeHistory';

export const caseTypeHistoryGet = (
  queryParams?: QueryParams<CaseType>
): Promise<CaseTypeHistory[]> => {
  const config: QueryParams<CaseType> = {
    method: 'get',
    url: `${queryParams?.url || CaseTypeRoute()}${
      queryParams?.id ? `/${queryParams?.id}` : ''
    }`,
    params: { revision_log: true, ...queryParams?.params },
    cancelToken: queryParams?.cancelToken,
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<CaseTypeHistory[]>(config)
    : getResponse<CaseTypeHistory[], CaseType>(
        queryParams?.api || _client?.api,
        config
      );
};
