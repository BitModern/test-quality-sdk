/**
 * Copyright (C) 2021 BitModern, Inc - All Rights Reserved
 */

import { _client } from '../../../ClientSdk';
import { getResponse } from '../../actions/getResponse';
import type { QueryParams } from '../../actions/QueryParams';
import { CommentRoute } from '../../routes/Routes';
import type { Comment } from './Comment';
import type { CommentHistory } from './CommentHistory';

export const commentHistoryGet = (
  queryParams?: QueryParams<Comment>,
): Promise<CommentHistory[]> => {
  const config: QueryParams<Comment> = {
    method: 'get',
    url: `${queryParams?.url ?? CommentRoute()}${
      queryParams?.id ? `/${queryParams?.id}` : ''
    }`,
    params: { revision_log: true, ...queryParams?.params },
    cancelToken: queryParams?.cancelToken,
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<CommentHistory[]>(config)
    : getResponse<CommentHistory[], Comment>(
        queryParams?.api ?? _client?.api,
        config,
      );
};
