/**
 * Copyright (C) 2021 BitModern, Inc - All Rights Reserved
 */
/* eslint-disable import/no-cycle */

import type { AppConfig } from './AppConfig';

export interface AppConfigHistory extends AppConfig {
  _id: string;
  operation: 'create' | 'delete' | 'update';
}
