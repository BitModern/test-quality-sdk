/**
 * Copyright (C) 2021 BitModern, Inc - All Rights Reserved
 */
/* eslint-disable import/no-cycle */

import { LabelAssigned } from './LabelAssigned';

export interface LabelAssignedHistory extends LabelAssigned {
  _id: string;
  operation: 'create' | 'delete' | 'update';
}
