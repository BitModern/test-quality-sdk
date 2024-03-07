/**
 * Copyright (C) 2021 BitModern, Inc - All Rights Reserved
 */
/* eslint-disable import/no-cycle */

import { DefectStatus } from './DefectStatus';

export interface DefectStatusHistory extends DefectStatus {
  _id: string;
  operation: 'create' | 'delete' | 'update';
}
