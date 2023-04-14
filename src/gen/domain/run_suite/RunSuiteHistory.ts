/**
 * Copyright (C) 2021 BitModern, Inc - All Rights Reserved
 */

/* eslint-disable import/no-cycle */

import { RunSuite } from './RunSuite';

export interface RunSuiteHistory extends RunSuite {
  _id: string;
  operation: 'create' | 'delete' | 'update';
}
