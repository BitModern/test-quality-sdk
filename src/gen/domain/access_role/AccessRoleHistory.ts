/**
 * Copyright (C) 2021 BitModern, Inc - All Rights Reserved
 */
/* eslint-disable import/no-cycle */

import type { AccessRole } from './AccessRole';

export interface AccessRoleHistory extends AccessRole {
  _id: string;
  operation: 'create' | 'delete' | 'update';
}
