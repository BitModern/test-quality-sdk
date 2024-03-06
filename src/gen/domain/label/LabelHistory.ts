/**
 * Copyright (C) 2021 BitModern, Inc - All Rights Reserved
 */
/* eslint-disable import/no-cycle */

import { Label } from './Label';

export interface LabelHistory extends Label {
  _id: string;
  operation: 'create' | 'delete' | 'update';
}
