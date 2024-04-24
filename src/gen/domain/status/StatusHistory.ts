/**
 * Copyright (C) 2021 BitModern, Inc - All Rights Reserved
 */
/* eslint-disable import/no-cycle */

import type { Status } from './Status';

export interface StatusHistory extends Status {
  _id: string;
  operation: 'create' | 'delete' | 'update';
}
