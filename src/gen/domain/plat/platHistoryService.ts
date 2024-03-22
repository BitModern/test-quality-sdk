/**
 * Copyright (C) 2021 BitModern, Inc - All Rights Reserved
 */

import { _client } from '../../../ClientSdk';
import { getResponse } from '../../actions/getResponse';
import { QueryParams } from '../../actions/QueryParams';
import { PlatRoute } from '../../routes/Routes';
import { Plat } from './Plat';
import { PlatHistory } from './PlatHistory';

export const platHistoryGet = (
  queryParams?: QueryParams<Plat>,
): Promise<PlatHistory[]> => {
  const config: QueryParams<Plat> = {
    method: 'get',
    url: `${queryParams?.url || PlatRoute()}${
      queryParams?.id ? `/${queryParams?.id}` : ''
    }`,
    params: { revision_log: true, ...queryParams?.params },
    cancelToken: queryParams?.cancelToken,
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<PlatHistory[]>(config)
    : getResponse<PlatHistory[], Plat>(
        queryParams?.api || _client?.api,
        config,
      );
};
