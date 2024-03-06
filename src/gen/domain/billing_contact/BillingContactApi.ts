/**
 * Copyright (C) 2021 BitModern, Inc - All Rights Reserved
 */
/* eslint-disable import/no-cycle */
/* eslint-disable @typescript-eslint/no-empty-interface */

import { BillingContact } from './BillingContact';
import { SubscriptionsApi } from '../subscriptions/SubscriptionsApi';
import { UserApi } from '../user/UserApi';

export interface BillingContactApi extends BillingContact {
  subscriptions?: SubscriptionsApi;
  user?: UserApi;
}
