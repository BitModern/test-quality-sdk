/**
 * Copyright (C) 2021 BitModern, Inc - All Rights Reserved
 */
/* eslint-disable import/no-cycle */

import type { ResourceProperty } from './ResourceProperty';

export interface ResourcePropertyHistory extends ResourceProperty {
  _id: string;
  operation: 'create' | 'delete' | 'update';
}
