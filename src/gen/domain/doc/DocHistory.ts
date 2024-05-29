/**
 * Copyright (C) 2021 BitModern, Inc - All Rights Reserved
 */
/* eslint-disable import/no-cycle */

import type { Doc } from './Doc';

export interface DocHistory extends Doc {
  _id: string;
  operation: 'create' | 'delete' | 'update';
}
