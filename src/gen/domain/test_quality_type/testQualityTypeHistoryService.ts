/**
 * Copyright (C) 2021 BitModern, Inc - All Rights Reserved
 */

import { _client } from '../../../ClientSdk';
import { getResponse } from '../../actions/getResponse';
import { QueryParams } from '../../actions/QueryParams';
import { TestQualityTypeRoute } from '../../routes/Routes';
import { TestQualityType } from './TestQualityType';
import { TestQualityTypeHistory } from './TestQualityTypeHistory';

export const testQualityTypeHistoryGet = (
  queryParams?: QueryParams<TestQualityType>
): Promise<TestQualityTypeHistory[]> => {
  const config: QueryParams<TestQualityType> = {
    method: 'get',
    url: `${queryParams?.url || TestQualityTypeRoute()}${
      queryParams?.id ? `/${queryParams?.id}` : ''
    }`,
    params: { revision_log: true, ...queryParams?.params },
    cancelToken: queryParams?.cancelToken,
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<TestQualityTypeHistory[]>(config)
    : getResponse<TestQualityTypeHistory[], TestQualityType>(
        queryParams?.api || _client?.api,
        config
      );
};
