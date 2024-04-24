/**
 * Copyright (C) 2021 BitModern, Inc - All Rights Reserved
 */
/* eslint-disable import/no-cycle */
/* eslint-disable @typescript-eslint/no-empty-interface */

import type { Coupon } from './Coupon';
import type { SubscriptionsApi } from '../subscriptions/SubscriptionsApi';

export interface CouponApi extends Coupon {
  subscriptions?: SubscriptionsApi[];
}
