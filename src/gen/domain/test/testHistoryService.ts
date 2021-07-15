/**
 * Copyright (C) 2021 BitModern, Inc - All Rights Reserved
 */

import { _client } from '../../../ClientSdk';
import { getResponse } from '../../actions/getResponse';
import { QueryParams } from '../../actions/QueryParams';
import { TestRoute } from '../../routes/Routes';
import { Test } from './Test';
import { TestHistory } from './TestHistory';

export const testHistoryGet = (
  queryParams?: QueryParams<Test>
): Promise<TestHistory[]> => {
  const config: QueryParams<Test> = {
    method: 'get',
    url: `${queryParams?.url || TestRoute()}${
      queryParams?.id ? `/${queryParams?.id}` : ''
    }`,
    params: { revision_log: true, ...queryParams?.params },
    cancelToken: queryParams?.cancelToken,
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<TestHistory[]>(config)
    : getResponse<TestHistory[], Test>(
        queryParams?.api || _client?.api,
        config
      );
};
