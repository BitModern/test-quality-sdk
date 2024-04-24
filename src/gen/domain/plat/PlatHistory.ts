/**
 * Copyright (C) 2021 BitModern, Inc - All Rights Reserved
 */
/* eslint-disable import/no-cycle */

import type { Plat } from './Plat';

export interface PlatHistory extends Plat {
  _id: string;
  operation: 'create' | 'delete' | 'update';
}
