/**
 * Copyright (C) 2021 BitModern, Inc - All Rights Reserved
 */

import type { KeyedModel } from '../../models/KeyedModel';

export interface CheckRun extends KeyedModel {
  id: number;
  external_reference_id: string;
  name: string;
  head_sha: string;
  details_url?: string;
  status?: string;
  start_at?: string;
  completed_at?: string;
  conclusion?: string;
  html_url?: string;
  created_at: string;
  created_by: number;
  updated_at: string;
  updated_by: number;
  epoch: number;
  client_id: number;
  check_suite_id?: number;
  app_install_project_id: number;
}
