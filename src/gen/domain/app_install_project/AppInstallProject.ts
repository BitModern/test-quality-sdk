/**
 * Copyright (C) 2021 BitModern, Inc - All Rights Reserved
 */

import { DefaultAttributes } from '../../models/DefaultAttributes';

export interface AppInstallProject extends DefaultAttributes {
  id: number;
  app_install_id: number;
  integration_project_id?: number;
  external_reference_id: string;
  owner: string;
  name?: string;
  type?: string;
  is_private?: boolean;
  full_name?: string;
  description?: string;
  user_reference_id?: string;
  created_at: string;
  created_by: number;
  updated_at: string;
  updated_by: number;
  epoch: number;
}
