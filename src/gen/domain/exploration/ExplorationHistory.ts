/**
 * Copyright (C) 2021 BitModern, Inc - All Rights Reserved
 */
/* eslint-disable import/no-cycle */

import type { Exploration } from './Exploration';

export interface ExplorationHistory extends Exploration {
  _id: string;
  operation: 'create' | 'delete' | 'update';
}
