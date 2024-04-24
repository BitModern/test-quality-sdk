/**
 * Copyright (C) 2021 BitModern, Inc - All Rights Reserved
 */

import type { DefaultAttributes } from '../../models/DefaultAttributes';

export interface BaseCapability extends DefaultAttributes {
  id: number;
  /**
   * The name of the capability.
   */
  name: string;
  /**
   * Is this row a system row? A system row cannot be modified or deleted.
   */
  is_system: boolean;
  created_at: string;
  created_by: number;
  updated_at: string;
  updated_by: number;
  epoch: number;
  schema?: any;
  capability_schema_class?: string;
}
