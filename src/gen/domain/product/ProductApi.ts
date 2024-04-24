/**
 * Copyright (C) 2021 BitModern, Inc - All Rights Reserved
 */
/* eslint-disable import/no-cycle */
/* eslint-disable @typescript-eslint/no-empty-interface */

import type { Product } from './Product';
import type { SubscriptionsApi } from '../subscriptions/SubscriptionsApi';

export interface ProductApi extends Product {
  subscriptions?: SubscriptionsApi[];
}
