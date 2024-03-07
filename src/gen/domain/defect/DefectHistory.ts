/**
 * Copyright (C) 2021 BitModern, Inc - All Rights Reserved
 */
/* eslint-disable import/no-cycle */

import { Defect } from './Defect';

export interface DefectHistory extends Defect {
  _id: string;
  operation: 'create' | 'delete' | 'update';
}
