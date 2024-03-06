/**
 * Copyright (C) 2021 BitModern, Inc - All Rights Reserved
 */
/* eslint-disable import/no-cycle */

import { Test } from './Test';

export interface TestHistory extends Test {
  _id: string;
  operation: 'create' | 'delete' | 'update';
}
