/**
 * Copyright (C) 2021 BitModern, Inc - All Rights Reserved
 */
/* eslint-disable import/no-cycle */

import { DefectRes } from './DefectRes';

export interface DefectResHistory extends DefectRes {
  _id: string;
  operation: 'create' | 'delete' | 'update';
}
