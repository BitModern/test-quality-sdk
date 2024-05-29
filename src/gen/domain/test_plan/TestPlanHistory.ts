/**
 * Copyright (C) 2021 BitModern, Inc - All Rights Reserved
 */
/* eslint-disable import/no-cycle */

import type { TestPlan } from './TestPlan';

export interface TestPlanHistory extends TestPlan {
  _id: string;
  operation: 'create' | 'delete' | 'update';
}
