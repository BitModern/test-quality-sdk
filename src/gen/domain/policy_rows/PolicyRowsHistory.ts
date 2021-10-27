/**
 * Copyright (C) 2021 BitModern, Inc - All Rights Reserved
 */

/* eslint-disable import/no-cycle */

import { PolicyRows } from './PolicyRows';

export interface PolicyRowsHistory extends PolicyRows {
  _id: string;
  operation: 'create' | 'delete' | 'update';
}
