/**
 * Copyright (C) 2021 BitModern, Inc - All Rights Reserved
 */
/* eslint-disable import/no-cycle */

import type { CasePriority } from './CasePriority';

export interface CasePriorityHistory extends CasePriority {
  _id: string;
  operation: 'create' | 'delete' | 'update';
}
