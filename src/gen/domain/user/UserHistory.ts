/**
 * Copyright (C) 2021 BitModern, Inc - All Rights Reserved
 */
/* eslint-disable import/no-cycle */

import type { User } from './User';

export interface UserHistory extends User {
  _id: string;
  operation: 'create' | 'delete' | 'update';
}
