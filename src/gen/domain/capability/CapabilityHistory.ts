/**
 * Copyright (C) 2021 BitModern, Inc - All Rights Reserved
 */

/* eslint-disable import/no-cycle */

import { Capability } from './Capability';

export interface CapabilityHistory extends Capability {
  _id: string;
  operation: 'create' | 'delete' | 'update';
}
