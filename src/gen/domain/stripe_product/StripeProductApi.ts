/**
 * Copyright (C) 2021 BitModern, Inc - All Rights Reserved
 */
/* eslint-disable import/no-cycle */
/* eslint-disable @typescript-eslint/no-empty-interface */

import type { StripeProduct } from './StripeProduct';
import type { ProductApi } from '../product/ProductApi';
import type { PriceApi } from '../price/PriceApi';

export interface StripeProductApi extends StripeProduct {
  product?: ProductApi[];
  price?: PriceApi[];
}
