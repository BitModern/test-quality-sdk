/**
 * Copyright (C) 2021 BitModern, Inc - All Rights Reserved
 */
/* eslint-disable import/no-cycle */

import type { Label } from './Label';

export interface LabelHistory extends Label {
  _id: string;
  operation: 'create' | 'delete' | 'update';
}
