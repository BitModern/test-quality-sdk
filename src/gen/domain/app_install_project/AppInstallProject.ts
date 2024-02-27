/**
 * Copyright (C) 2021 BitModern, Inc - All Rights Reserved
 */

import { KeyedModel } from '../../models/KeyedModel';

export interface AppInstallProject extends KeyedModel {
  id: number;
  app_install_id: number;
  external_reference_id: string;
  name: string;
  is_private?: boolean;
  full_name?: string;
  description?: string;
  created_at: string;
  created_by: number;
  updated_at: string;
  updated_by: number;
  epoch: number;
  client_id: number;
}
