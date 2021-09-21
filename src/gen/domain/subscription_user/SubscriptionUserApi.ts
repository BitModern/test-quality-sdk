/**
 * Copyright (C) 2021 BitModern, Inc - All Rights Reserved
 */

/* eslint-disable import/no-cycle */
/* eslint-disable @typescript-eslint/no-empty-interface */

import { SubscriptionUser } from './SubscriptionUser';
import { SubscriptionsApi } from '../subscriptions/SubscriptionsApi';
import { UserApi } from '../user/UserApi';

export interface SubscriptionUserApi extends SubscriptionUser {
  subscriptions?: SubscriptionsApi;
  user?: UserApi;
}
