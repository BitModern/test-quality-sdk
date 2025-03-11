/**
 * Copyright (C) 2021 BitModern, Inc - All Rights Reserved
 */

import { _client } from '../../../ClientSdk';
import { getResponse } from '../../actions/getResponse';
import type { QueryParams } from '../../actions/QueryParams';
import { NativeDefectResRoute } from '../../routes/Routes';
import type { NativeDefectRes } from './NativeDefectRes';
import type { NativeDefectResHistory } from './NativeDefectResHistory';

export const nativeDefectResHistoryGet = (
  queryParams?: QueryParams<Partial<NativeDefectRes>>,
): Promise<NativeDefectResHistory[]> => {
  const config: QueryParams<Partial<NativeDefectRes>> = {
    method: 'get',
    url: `${queryParams?.url ?? NativeDefectResRoute()}${
      queryParams?.id ? `/${queryParams?.id}` : ''
    }`,
    params: { revision_log: true, ...queryParams?.params },
    cancelToken: queryParams?.cancelToken,
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<NativeDefectResHistory[]>(config)
    : getResponse<NativeDefectResHistory[], Partial<NativeDefectRes>>(
        queryParams?.api ?? _client?.api,
        config,
      );
};
