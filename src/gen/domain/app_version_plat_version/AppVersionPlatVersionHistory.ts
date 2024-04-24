/**
 * Copyright (C) 2021 BitModern, Inc - All Rights Reserved
 */
/* eslint-disable import/no-cycle */

import type { AppVersionPlatVersion } from './AppVersionPlatVersion';

export interface AppVersionPlatVersionHistory extends AppVersionPlatVersion {
  _id: string;
  operation: 'create' | 'delete' | 'update';
}
