/**
 * Copyright (C) 2021 BitModern, Inc - All Rights Reserved
 */

import type { KeyedModel } from '../../models/KeyedModel';

export interface IntegrationStatusType extends KeyedModel {
  id: number;
  name: string;
  description?: string;
  external_reference_id?: string;
  external_reference_key?: string;
  created_at: string;
  created_by: number;
  updated_at: string;
  updated_by: number;
  epoch: number;
  client_id: number;
  integration_project_id: number;
  key: number;
}
