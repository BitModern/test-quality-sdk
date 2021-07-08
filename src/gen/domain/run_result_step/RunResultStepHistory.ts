/**
 * Copyright (C) 2021 BitModern, Inc - All Rights Reserved
 */

/* eslint-disable import/no-cycle */

import { RunResultStep } from './RunResultStep';

export interface RunResultStepHistory extends RunResultStep {
  _id: string;
  operation: 'create' | 'delete' | 'update';
}
