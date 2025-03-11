/**
 * Copyright (C) 2021 BitModern, Inc - All Rights Reserved
 */

import { _client } from '../../../ClientSdk';
import { getResponse } from '../../actions/getResponse';
import type { QueryParams } from '../../actions/QueryParams';
import { TestQualityTypeRoute } from '../../routes/Routes';
import type { TestQualityType } from './TestQualityType';
import type { TestQualityTypeHistory } from './TestQualityTypeHistory';

export const testQualityTypeHistoryGet = (
  queryParams?: QueryParams<Partial<TestQualityType>>,
): Promise<TestQualityTypeHistory[]> => {
  const config: QueryParams<Partial<TestQualityType>> = {
    method: 'get',
    url: `${queryParams?.url ?? TestQualityTypeRoute()}${
      queryParams?.id ? `/${queryParams?.id}` : ''
    }`,
    params: { revision_log: true, ...queryParams?.params },
    cancelToken: queryParams?.cancelToken,
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<TestQualityTypeHistory[]>(config)
    : getResponse<TestQualityTypeHistory[], Partial<TestQualityType>>(
        queryParams?.api ?? _client?.api,
        config,
      );
};
