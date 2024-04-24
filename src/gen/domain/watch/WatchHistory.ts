/**
 * Copyright (C) 2021 BitModern, Inc - All Rights Reserved
 */
/* eslint-disable import/no-cycle */

import type { Watch } from './Watch';

export interface WatchHistory extends Watch {
  _id: string;
  operation: 'create' | 'delete' | 'update';
}
