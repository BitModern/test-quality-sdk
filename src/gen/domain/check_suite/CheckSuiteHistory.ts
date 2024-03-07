/**
 * Copyright (C) 2021 BitModern, Inc - All Rights Reserved
 */
/* eslint-disable import/no-cycle */

import { CheckSuite } from './CheckSuite';

export interface CheckSuiteHistory extends CheckSuite {
  _id: string;
  operation: 'create' | 'delete' | 'update';
}
