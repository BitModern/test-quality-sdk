/**
 * Copyright (C) 2021 BitModern, Inc - All Rights Reserved
 */
/* eslint-disable import/no-cycle */
/* eslint-disable @typescript-eslint/no-empty-interface */

import { Subscriptions } from './Subscriptions';
import { UserApi } from '../user/UserApi';
import { ProductApi } from '../product/ProductApi';
import { CouponApi } from '../coupon/CouponApi';
import { SubscriptionUserApi } from '../subscription_user/SubscriptionUserApi';
import { BillingContactApi } from '../billing_contact/BillingContactApi';

export interface SubscriptionsApi extends Subscriptions {
  user?: UserApi;
  product?: ProductApi;
  coupon?: CouponApi;
  subscription_user?: SubscriptionUserApi[];
  billing_contact?: BillingContactApi[];
}
