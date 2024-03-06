/**
 * Copyright (C) 2021 BitModern, Inc - All Rights Reserved
 */
/* eslint-disable import/no-cycle */

import { PlanSuiteTestInclude } from './PlanSuiteTestInclude';

export interface PlanSuiteTestIncludeHistory extends PlanSuiteTestInclude {
  _id: string;
  operation: 'create' | 'delete' | 'update';
}
