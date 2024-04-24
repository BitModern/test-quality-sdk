/**
 * Copyright (C) 2021 BitModern, Inc - All Rights Reserved
 */

import { _client } from '../../../ClientSdk';
import { getResponse } from '../../actions/getResponse';
import type { QueryParams } from '../../actions/QueryParams';
import { AccessRoleRoute } from '../../routes/Routes';
import type { AccessRole } from './AccessRole';
import type { AccessRoleHistory } from './AccessRoleHistory';

export const accessRoleHistoryGet = (
  queryParams?: QueryParams<AccessRole>,
): Promise<AccessRoleHistory[]> => {
  const config: QueryParams<AccessRole> = {
    method: 'get',
    url: `${queryParams?.url ?? AccessRoleRoute()}${
      queryParams?.id ? `/${queryParams?.id}` : ''
    }`,
    params: { revision_log: true, ...queryParams?.params },
    cancelToken: queryParams?.cancelToken,
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<AccessRoleHistory[]>(config)
    : getResponse<AccessRoleHistory[], AccessRole>(
        queryParams?.api ?? _client?.api,
        config,
      );
};
