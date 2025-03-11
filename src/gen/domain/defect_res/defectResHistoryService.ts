/**
 * Copyright (C) 2021 BitModern, Inc - All Rights Reserved
 */

import { _client } from '../../../ClientSdk';
import { getResponse } from '../../actions/getResponse';
import type { QueryParams } from '../../actions/QueryParams';
import { DefectResRoute } from '../../routes/Routes';
import type { DefectRes } from './DefectRes';
import type { DefectResHistory } from './DefectResHistory';

export const defectResHistoryGet = (
  queryParams?: QueryParams<Partial<DefectRes>>,
): Promise<DefectResHistory[]> => {
  const config: QueryParams<Partial<DefectRes>> = {
    method: 'get',
    url: `${queryParams?.url ?? DefectResRoute()}${
      queryParams?.id ? `/${queryParams?.id}` : ''
    }`,
    params: { revision_log: true, ...queryParams?.params },
    cancelToken: queryParams?.cancelToken,
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<DefectResHistory[]>(config)
    : getResponse<DefectResHistory[], Partial<DefectRes>>(
        queryParams?.api ?? _client?.api,
        config,
      );
};
