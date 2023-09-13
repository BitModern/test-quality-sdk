/**
 * Copyright (C) 2021 BitModern, Inc - All Rights Reserved
 */

/* eslint-disable import/no-cycle */
/* eslint-disable @typescript-eslint/no-empty-interface */

import { Coupon } from './Coupon';
import { ProductApi } from '../product/ProductApi';
import { SubscriptionsApi } from '../subscriptions/SubscriptionsApi';

export interface CouponApi extends Coupon {
  product?: ProductApi;
  subscriptions?: SubscriptionsApi[];
}
