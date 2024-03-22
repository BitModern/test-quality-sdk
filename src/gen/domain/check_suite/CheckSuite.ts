/**
 * Copyright (C) 2021 BitModern, Inc - All Rights Reserved
 */

import { KeyedModel } from '../../models/KeyedModel';

export interface CheckSuite extends KeyedModel {
  id: number;
  external_reference_id: string;
  head_sha?: string;
  created_at: string;
  created_by: number;
  updated_at: string;
  updated_by: number;
  epoch: number;
  client_id: number;
  head_branch?: string;
  app_install_project_id: number;
  status?: string;
}
