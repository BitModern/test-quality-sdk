/**
 * Copyright (C) 2021 BitModern, Inc - All Rights Reserved
 */
/* eslint-disable import/no-cycle */
/* eslint-disable @typescript-eslint/no-empty-interface */

import { Subscriptions } from './Subscriptions';
import { CouponApi } from '../coupon/CouponApi';
import { UserApi } from '../user/UserApi';
import { ProductApi } from '../product/ProductApi';
import { SubscriptionUserApi } from '../subscription_user/SubscriptionUserApi';
import { BillingContactApi } from '../billing_contact/BillingContactApi';

export interface SubscriptionsApi extends Subscriptions {
  coupon?: CouponApi;
  user?: UserApi;
  product?: ProductApi;
  subscription_user?: SubscriptionUserApi[];
  billing_contact?: BillingContactApi[];
}
