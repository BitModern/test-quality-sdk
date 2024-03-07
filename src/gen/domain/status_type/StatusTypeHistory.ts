/**
 * Copyright (C) 2021 BitModern, Inc - All Rights Reserved
 */
/* eslint-disable import/no-cycle */

import { StatusType } from './StatusType';

export interface StatusTypeHistory extends StatusType {
  _id: string;
  operation: 'create' | 'delete' | 'update';
}
