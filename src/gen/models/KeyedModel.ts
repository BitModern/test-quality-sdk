/**
 * Copyright (C) 2021 BitModern, Inc - All Rights Reserved
 */

import type { TenantScopedModel } from './TenantScopedModel';

export interface KeyedModel extends TenantScopedModel {
  key?: number;
}
