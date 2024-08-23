/**
 * Copyright (C) 2021 BitModern, Inc - All Rights Reserved
 */
/* eslint-disable import/no-cycle */

import type { Resource } from './Resource';

export interface ResourceHistory extends Resource {
  _id: string;
  operation: 'create' | 'delete' | 'update';
}
