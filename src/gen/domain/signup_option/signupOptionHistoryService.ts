/**
 * Copyright (C) 2021 BitModern, Inc - All Rights Reserved
 */

import { _client } from '../../../ClientSdk';
import { getResponse } from '../../actions/getResponse';
import type { QueryParams } from '../../actions/QueryParams';
import { SignupOptionRoute } from '../../routes/Routes';
import type { SignupOption } from './SignupOption';
import type { SignupOptionHistory } from './SignupOptionHistory';

export const signupOptionHistoryGet = (
  queryParams?: QueryParams<SignupOption>,
): Promise<SignupOptionHistory[]> => {
  const config: QueryParams<SignupOption> = {
    method: 'get',
    url: `${queryParams?.url ?? SignupOptionRoute()}${
      queryParams?.id ? `/${queryParams?.id}` : ''
    }`,
    params: { revision_log: true, ...queryParams?.params },
    cancelToken: queryParams?.cancelToken,
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<SignupOptionHistory[]>(config)
    : getResponse<SignupOptionHistory[], SignupOption>(
        queryParams?.api ?? _client?.api,
        config,
      );
};
