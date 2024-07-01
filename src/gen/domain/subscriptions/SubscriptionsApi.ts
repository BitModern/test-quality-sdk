/**
 * Copyright (C) 2021 BitModern, Inc - All Rights Reserved
 */
/* eslint-disable import/no-cycle */
/* eslint-disable @typescript-eslint/no-empty-interface */

import type { Subscriptions } from './Subscriptions';
import type { UserApi } from '../user/UserApi';
import type { ProductApi } from '../product/ProductApi';
import type { CouponApi } from '../coupon/CouponApi';
import type { SubscriptionUserApi } from '../subscription_user/SubscriptionUserApi';
import type { BillingContactApi } from '../billing_contact/BillingContactApi';

export interface SubscriptionsApi extends Subscriptions {
  user?: UserApi;
  product?: ProductApi;
  coupon?: CouponApi;
  subscription_user?: SubscriptionUserApi[];
  billing_contact?: BillingContactApi[];
}
