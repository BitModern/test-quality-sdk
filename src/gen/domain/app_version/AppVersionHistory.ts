/**
 * Copyright (C) 2021 BitModern, Inc - All Rights Reserved
 */
/* eslint-disable import/no-cycle */

import type { AppVersion } from './AppVersion';

export interface AppVersionHistory extends AppVersion {
  _id: string;
  operation: 'create' | 'delete' | 'update';
}
