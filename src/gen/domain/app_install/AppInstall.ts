/**
 * Copyright (C) 2021 BitModern, Inc - All Rights Reserved
 */

import { DefaultAttributes } from '../../models/DefaultAttributes';

export interface AppInstall extends DefaultAttributes {
  id: number;
  integration_id?: number;
  app_config_id?: number;
  external_reference_id: string;
  user_reference_id?: string;
  username: string;
  type?: string;
  created_at: string;
  created_by: number;
  updated_at: string;
  updated_by: number;
  epoch: number;
}
