/**
 * Copyright (C) 2021 BitModern, Inc - All Rights Reserved
 */
/* eslint-disable import/no-cycle */
/* eslint-disable @typescript-eslint/no-empty-interface */

import type { Product } from './Product';
import type { StripeProductApi } from '../stripe_product/StripeProductApi';
import type { PriceApi } from '../price/PriceApi';
import type { SubscriptionsApi } from '../subscriptions/SubscriptionsApi';

export interface ProductApi extends Product {
  stripe_product?: StripeProductApi;
  price?: PriceApi;
  subscriptions?: SubscriptionsApi[];
}
