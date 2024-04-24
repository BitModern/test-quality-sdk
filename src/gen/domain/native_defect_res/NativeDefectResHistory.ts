/**
 * Copyright (C) 2021 BitModern, Inc - All Rights Reserved
 */
/* eslint-disable import/no-cycle */

import type { NativeDefectRes } from './NativeDefectRes';

export interface NativeDefectResHistory extends NativeDefectRes {
  _id: string;
  operation: 'create' | 'delete' | 'update';
}
