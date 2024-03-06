/**
 * Copyright (C) 2021 BitModern, Inc - All Rights Reserved
 */
/* eslint-disable import/no-cycle */

import { Subscriptions } from './Subscriptions';

export interface SubscriptionsHistory extends Subscriptions {
  _id: string;
  operation: 'create' | 'delete' | 'update';
}
