/**
 * Copyright (C) 2021 BitModern, Inc - All Rights Reserved
 */

/* eslint-disable import/no-cycle */

import { Purpose } from './Purpose';

export interface PurposeHistory extends Purpose {
  _id: string;
  operation: 'create' | 'delete' | 'update';
}
