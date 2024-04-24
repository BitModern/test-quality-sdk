/**
 * Copyright (C) 2021 BitModern, Inc - All Rights Reserved
 */
/* eslint-disable import/no-cycle */

import type { TestQualityType } from './TestQualityType';

export interface TestQualityTypeHistory extends TestQualityType {
  _id: string;
  operation: 'create' | 'delete' | 'update';
}
