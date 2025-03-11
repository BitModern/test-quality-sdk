/**
 * Copyright (C) 2021 BitModern, Inc - All Rights Reserved
 */

import { _client } from '../../../ClientSdk';
import { getResponse } from '../../actions/getResponse';
import type { QueryParams } from '../../actions/QueryParams';
import { ProjectRoute } from '../../routes/Routes';
import type { Project } from './Project';
import type { ProjectHistory } from './ProjectHistory';

export const projectHistoryGet = (
  queryParams?: QueryParams<Partial<Project>>,
): Promise<ProjectHistory[]> => {
  const config: QueryParams<Partial<Project>> = {
    method: 'get',
    url: `${queryParams?.url ?? ProjectRoute()}${
      queryParams?.id ? `/${queryParams?.id}` : ''
    }`,
    params: { revision_log: true, ...queryParams?.params },
    cancelToken: queryParams?.cancelToken,
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<ProjectHistory[]>(config)
    : getResponse<ProjectHistory[], Partial<Project>>(
        queryParams?.api ?? _client?.api,
        config,
      );
};
