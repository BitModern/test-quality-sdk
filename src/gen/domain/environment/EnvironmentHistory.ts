/**
 * Copyright (C) 2021 BitModern, Inc - All Rights Reserved
 */
/* eslint-disable import/no-cycle */

import type { Environment } from './Environment';

export interface EnvironmentHistory extends Environment {
  _id: string;
  operation: 'create' | 'delete' | 'update';
}
