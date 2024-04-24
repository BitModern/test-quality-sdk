/**
 * Copyright (C) 2021 BitModern, Inc - All Rights Reserved
 */
/* eslint-disable import/no-cycle */

import type { CaseType } from './CaseType';

export interface CaseTypeHistory extends CaseType {
  _id: string;
  operation: 'create' | 'delete' | 'update';
}
