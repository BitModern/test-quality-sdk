/**
 * Copyright (C) 2021 BitModern, Inc - All Rights Reserved
 */

/* eslint-disable import/no-cycle */

import { BaseCapability } from './BaseCapability';

export interface BaseCapabilityHistory extends BaseCapability {
  _id: string;
  operation: 'create' | 'delete' | 'update';
}
