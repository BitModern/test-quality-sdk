/**
 * Copyright (C) 2021 BitModern, Inc - All Rights Reserved
 */
/* eslint-disable import/no-cycle */
/* eslint-disable @typescript-eslint/no-empty-interface */

import type { Price } from './Price';
import type { StripeProductApi } from '../stripe_product/StripeProductApi';
import type { SubscriptionsApi } from '../subscriptions/SubscriptionsApi';
import type { ProductApi } from '../product/ProductApi';

export interface PriceApi extends Price {
  stripe_product?: StripeProductApi;
  subscriptions?: SubscriptionsApi[];
  product?: ProductApi[];
}
