/**
 * Copyright (C) 2021 BitModern, Inc - All Rights Reserved
 */

/* eslint-disable import/no-cycle */
/* eslint-disable @typescript-eslint/no-empty-interface */

import { Product } from './Product';
import { SubscriptionsApi } from '../subscriptions/SubscriptionsApi';

export interface ProductApi extends Product {
  subscriptions?: SubscriptionsApi[];
}
