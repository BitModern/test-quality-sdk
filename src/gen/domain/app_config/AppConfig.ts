/**
 * Copyright (C) 2021 BitModern, Inc - All Rights Reserved
 */

import { DefaultAttributes } from '../../models/DefaultAttributes';

export interface AppConfig extends DefaultAttributes {
  id: number;
  base_integration_id?: number;
  remote_host?: string;
  app_id: string;
  app_client_id: string;
  app_client_secret: string;
  webhook_secret?: string;
  pem?: string;
  created_at: string;
  created_by: number;
  updated_at: string;
  updated_by: number;
  epoch: number;
}
