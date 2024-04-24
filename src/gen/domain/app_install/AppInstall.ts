/**
 * Copyright (C) 2021 BitModern, Inc - All Rights Reserved
 */

import type { KeyedModel } from '../../models/KeyedModel';

export interface AppInstall extends KeyedModel {
  id: number;
  app_config_id?: number;
  external_reference_id: string;
  target_type?: string;
  created_at: string;
  created_by: number;
  updated_at: string;
  updated_by: number;
  epoch: number;
  name: string;
  avatar_url?: string;
  html_url?: string;
  client_id: number;
  repository_selection: string;
  target_id: number;
  app_user_id?: number;
  app_id?: string;
  app_slug?: string;
  repositories_url?: string;
}
