/**
 * Copyright (C) 2021 BitModern, Inc - All Rights Reserved
 */

import { _client } from '../../../ClientSdk';
import { getResponse } from '../../actions/getResponse';
import { QueryParams } from '../../actions/QueryParams';
import { PullRequestRoute } from '../../routes/Routes';
import { PullRequest } from './PullRequest';
import { PullRequestHistory } from './PullRequestHistory';

export const pullRequestHistoryGet = (
  queryParams?: QueryParams<PullRequest>,
): Promise<PullRequestHistory[]> => {
  const config: QueryParams<PullRequest> = {
    method: 'get',
    url: `${queryParams?.url || PullRequestRoute()}${
      queryParams?.id ? `/${queryParams?.id}` : ''
    }`,
    params: { revision_log: true, ...queryParams?.params },
    cancelToken: queryParams?.cancelToken,
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<PullRequestHistory[]>(config)
    : getResponse<PullRequestHistory[], PullRequest>(
        queryParams?.api || _client?.api,
        config,
      );
};
