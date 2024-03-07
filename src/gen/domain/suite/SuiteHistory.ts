/**
 * Copyright (C) 2021 BitModern, Inc - All Rights Reserved
 */
/* eslint-disable import/no-cycle */

import { Suite } from './Suite';

export interface SuiteHistory extends Suite {
  _id: string;
  operation: 'create' | 'delete' | 'update';
}
