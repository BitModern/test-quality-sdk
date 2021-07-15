/**
 * Copyright (C) 2021 BitModern, Inc - All Rights Reserved
 */

import { DefaultAttributes } from '../../models/DefaultAttributes';

export interface BaseCapabilityBaseIntegration extends DefaultAttributes {
  id: number;
  created_at: string;
  updated_at: string;
  endpoint: string;
  schema?: any;
  transform?: any;
  integration_schema_class?: string;
  created_by: number;
  updated_by: number;
  epoch: number;
  base_integration_id: number;
  base_capability_id: number;
  value?: string;
}
