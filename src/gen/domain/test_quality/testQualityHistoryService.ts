/**
 * Copyright (C) 2021 BitModern, Inc - All Rights Reserved
 */

import { _client } from '../../../ClientSdk';
import { getResponse } from '../../actions/getResponse';
import { QueryParams } from '../../actions/QueryParams';
import { TestQualityRoute } from '../../routes/Routes';
import { TestQuality } from './TestQuality';
import { TestQualityHistory } from './TestQualityHistory';

export const testQualityHistoryGet = (
  queryParams?: QueryParams<TestQuality>,
): Promise<TestQualityHistory[]> => {
  const config: QueryParams<TestQuality> = {
    method: 'get',
    url: `${queryParams?.url || TestQualityRoute()}${
      queryParams?.id ? `/${queryParams?.id}` : ''
    }`,
    params: { revision_log: true, ...queryParams?.params },
    cancelToken: queryParams?.cancelToken,
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<TestQualityHistory[]>(config)
    : getResponse<TestQualityHistory[], TestQuality>(
        queryParams?.api || _client?.api,
        config,
      );
};
