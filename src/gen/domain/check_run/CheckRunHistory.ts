/**
 * Copyright (C) 2021 BitModern, Inc - All Rights Reserved
 */
/* eslint-disable import/no-cycle */

import { CheckRun } from './CheckRun';

export interface CheckRunHistory extends CheckRun {
  _id: string;
  operation: 'create' | 'delete' | 'update';
}
