/**
 * Copyright (C) 2021 BitModern, Inc - All Rights Reserved
 */

/* eslint-disable import/no-cycle */

import { RunResult } from './RunResult';

export interface RunResultHistory extends RunResult {
  _id: string;
  operation: 'create' | 'delete' | 'update';
}
