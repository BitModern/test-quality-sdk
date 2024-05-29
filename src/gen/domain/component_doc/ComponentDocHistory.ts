/**
 * Copyright (C) 2021 BitModern, Inc - All Rights Reserved
 */
/* eslint-disable import/no-cycle */

import type { ComponentDoc } from './ComponentDoc';

export interface ComponentDocHistory extends ComponentDoc {
  _id: string;
  operation: 'create' | 'delete' | 'update';
}
