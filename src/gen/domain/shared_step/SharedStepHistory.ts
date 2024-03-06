/**
 * Copyright (C) 2021 BitModern, Inc - All Rights Reserved
 */
/* eslint-disable import/no-cycle */

import { SharedStep } from './SharedStep';

export interface SharedStepHistory extends SharedStep {
  _id: string;
  operation: 'create' | 'delete' | 'update';
}
