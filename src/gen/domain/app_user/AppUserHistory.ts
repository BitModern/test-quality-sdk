/**
 * Copyright (C) 2021 BitModern, Inc - All Rights Reserved
 */
/* eslint-disable import/no-cycle */

import { AppUser } from './AppUser';

export interface AppUserHistory extends AppUser {
  _id: string;
  operation: 'create' | 'delete' | 'update';
}
