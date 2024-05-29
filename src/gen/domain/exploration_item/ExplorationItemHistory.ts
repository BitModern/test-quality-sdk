/**
 * Copyright (C) 2021 BitModern, Inc - All Rights Reserved
 */
/* eslint-disable import/no-cycle */

import type { ExplorationItem } from './ExplorationItem';

export interface ExplorationItemHistory extends ExplorationItem {
  _id: string;
  operation: 'create' | 'delete' | 'update';
}
