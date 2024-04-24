/**
 * Copyright (C) 2021 BitModern, Inc - All Rights Reserved
 */
/* eslint-disable import/no-cycle */

import type { PlatVersion } from './PlatVersion';

export interface PlatVersionHistory extends PlatVersion {
  _id: string;
  operation: 'create' | 'delete' | 'update';
}
