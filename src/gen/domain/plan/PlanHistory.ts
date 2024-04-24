/**
 * Copyright (C) 2021 BitModern, Inc - All Rights Reserved
 */
/* eslint-disable import/no-cycle */

import type { Plan } from './Plan';

export interface PlanHistory extends Plan {
  _id: string;
  operation: 'create' | 'delete' | 'update';
}
