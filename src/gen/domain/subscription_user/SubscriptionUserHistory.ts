/**
 * Copyright (C) 2021 BitModern, Inc - All Rights Reserved
 */

/* eslint-disable import/no-cycle */

import { SubscriptionUser } from './SubscriptionUser';

export interface SubscriptionUserHistory extends SubscriptionUser {
  _id: string;
  operation: 'create' | 'delete' | 'update';
}
