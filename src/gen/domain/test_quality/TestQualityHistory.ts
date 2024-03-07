/**
 * Copyright (C) 2021 BitModern, Inc - All Rights Reserved
 */
/* eslint-disable import/no-cycle */

import { TestQuality } from './TestQuality';

export interface TestQualityHistory extends TestQuality {
  _id: string;
  operation: 'create' | 'delete' | 'update';
}
