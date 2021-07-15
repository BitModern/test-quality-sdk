/**
 * Copyright (C) 2021 BitModern, Inc - All Rights Reserved
 */

/* eslint-disable import/no-cycle */

import { NativeDefectStatus } from './NativeDefectStatus';

export interface NativeDefectStatusHistory extends NativeDefectStatus {
  _id: string;
  operation: 'create' | 'delete' | 'update';
}
