/**
 * Copyright (C) 2021 BitModern, Inc - All Rights Reserved
 */
/* eslint-disable import/no-cycle */

import { Requirement } from './Requirement';

export interface RequirementHistory extends Requirement {
  _id: string;
  operation: 'create' | 'delete' | 'update';
}
