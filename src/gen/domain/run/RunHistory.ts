/**
 * Copyright (C) 2021 BitModern, Inc - All Rights Reserved
 */

/* eslint-disable import/no-cycle */

import { Run } from './Run';

export interface RunHistory extends Run {
  _id: string;
  operation: 'create' | 'delete' | 'update';
}
