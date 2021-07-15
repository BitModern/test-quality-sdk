/**
 * Copyright (C) 2021 BitModern, Inc - All Rights Reserved
 */

import { _client } from '../../../ClientSdk';
import { getResponse } from '../../actions/getResponse';
import { QueryParams } from '../../actions/QueryParams';
import { NativeDefectResRoute } from '../../routes/Routes';
import { NativeDefectRes } from './NativeDefectRes';
import { NativeDefectResHistory } from './NativeDefectResHistory';

export const nativeDefectResHistoryGet = (
  queryParams?: QueryParams<NativeDefectRes>
): Promise<NativeDefectResHistory[]> => {
  const config: QueryParams<NativeDefectRes> = {
    method: 'get',
    url: `${queryParams?.url || NativeDefectResRoute()}${
      queryParams?.id ? `/${queryParams?.id}` : ''
    }`,
    params: { revision_log: true, ...queryParams?.params },
    cancelToken: queryParams?.cancelToken,
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<NativeDefectResHistory[]>(config)
    : getResponse<NativeDefectResHistory[], NativeDefectRes>(
        queryParams?.api || _client?.api,
        config
      );
};
