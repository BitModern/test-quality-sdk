/**
 * Copyright (C) 2021 BitModern, Inc - All Rights Reserved
 */
/* eslint-disable import/no-cycle */

import { Step } from './Step';

export interface StepHistory extends Step {
  _id: string;
  operation: 'create' | 'delete' | 'update';
}
