/**
 * Copyright (C) 2021 BitModern, Inc - All Rights Reserved
 */
/* eslint-disable import/no-cycle */

import type { DataSet } from './DataSet';

export interface DataSetHistory extends DataSet {
  _id: string;
  operation: 'create' | 'delete' | 'update';
}
