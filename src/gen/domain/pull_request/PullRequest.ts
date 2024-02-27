/**
 * Copyright (C) 2021 BitModern, Inc - All Rights Reserved
 */

import { KeyedModel } from '../../models/KeyedModel';

export interface PullRequest extends KeyedModel {
  id: number;
  external_reference_id: string;
  name: string;
  head_sha: string;
  state?: string;
  number?: number;
  description?: string;
  html_url?: string;
  closed_at?: string;
  merged_at?: string;
  created_at: string;
  created_by: number;
  updated_at: string;
  updated_by: number;
  epoch: number;
  client_id: number;
  app_install_project_id: number;
  app_user_id?: number;
}
