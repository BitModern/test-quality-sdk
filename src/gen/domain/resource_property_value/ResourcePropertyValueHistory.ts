/**
 * Copyright (C) 2021 BitModern, Inc - All Rights Reserved
 */
/* eslint-disable import/no-cycle */

import type { ResourcePropertyValue } from './ResourcePropertyValue';

export interface ResourcePropertyValueHistory extends ResourcePropertyValue {
  _id: string;
  operation: 'create' | 'delete' | 'update';
}
