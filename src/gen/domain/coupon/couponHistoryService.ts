/**
 * Copyright (C) 2021 BitModern, Inc - All Rights Reserved
 */

import { _client } from '../../../ClientSdk';
import { getResponse } from '../../actions/getResponse';
import { QueryParams } from '../../actions/QueryParams';
import { CouponRoute } from '../../routes/Routes';
import { Coupon } from './Coupon';
import { CouponHistory } from './CouponHistory';

export const couponHistoryGet = (
  queryParams?: QueryParams<Coupon>,
): Promise<CouponHistory[]> => {
  const config: QueryParams<Coupon> = {
    method: 'get',
    url: `${queryParams?.url || CouponRoute()}${
      queryParams?.id ? `/${queryParams?.id}` : ''
    }`,
    params: { revision_log: true, ...queryParams?.params },
    cancelToken: queryParams?.cancelToken,
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<CouponHistory[]>(config)
    : getResponse<CouponHistory[], Coupon>(
        queryParams?.api || _client?.api,
        config,
      );
};
