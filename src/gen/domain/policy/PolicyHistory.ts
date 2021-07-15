/**
 * Copyright (C) 2021 BitModern, Inc - All Rights Reserved
 */

/* eslint-disable import/no-cycle */

import { Policy } from './Policy';

export interface PolicyHistory extends Policy {
  _id: string;
  operation: 'create' | 'delete' | 'update';
}
