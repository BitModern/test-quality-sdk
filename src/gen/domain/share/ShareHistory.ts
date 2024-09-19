/**
 * Copyright (C) 2021 BitModern, Inc - All Rights Reserved
 */
/* eslint-disable import/no-cycle */

import type { Share } from './Share';

export interface ShareHistory extends Share {
  _id: string;
  operation: 'create' | 'delete' | 'update';
}
