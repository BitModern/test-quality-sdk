/**
 * Copyright (C) 2021 BitModern, Inc - All Rights Reserved
 */

import { _client } from '../../../ClientSdk';
import { getResponse } from '../../actions/getResponse';
import { QueryParams } from '../../actions/QueryParams';
import { NativeDefectStatusRoute } from '../../routes/Routes';
import { NativeDefectStatus } from './NativeDefectStatus';
import { NativeDefectStatusHistory } from './NativeDefectStatusHistory';

export const nativeDefectStatusHistoryGet = (
  queryParams?: QueryParams<NativeDefectStatus>,
): Promise<NativeDefectStatusHistory[]> => {
  const config: QueryParams<NativeDefectStatus> = {
    method: 'get',
    url: `${queryParams?.url || NativeDefectStatusRoute()}${
      queryParams?.id ? `/${queryParams?.id}` : ''
    }`,
    params: { revision_log: true, ...queryParams?.params },
    cancelToken: queryParams?.cancelToken,
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<NativeDefectStatusHistory[]>(config)
    : getResponse<NativeDefectStatusHistory[], NativeDefectStatus>(
        queryParams?.api || _client?.api,
        config,
      );
};
