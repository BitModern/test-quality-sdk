/**
 * Copyright (C) 2021 BitModern, Inc - All Rights Reserved
 */

import type { DefaultAttributes } from '../../models/DefaultAttributes';

export interface DocTemplate extends DefaultAttributes {
  id: number;
  created_by: number;
  created_at: string;
  updated_by: number;
  updated_at: string;
  epoch: number;
  /**
   * The name of the plan.
   */
  name: string;
  /**
   * The description of the capability.
   */
  description?: string;
  doc_type_id: number;
  is_active: boolean;
}
