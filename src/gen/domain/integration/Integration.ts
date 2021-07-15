/**
 * Copyright (C) 2021 BitModern, Inc - All Rights Reserved
 */

import { KeyedModel } from '../../models/KeyedModel';

export interface Integration extends KeyedModel {
  id: number;
  client_id: number;
  /**
   * The default URL to the rest API for the external system.
   */
  default_url: string;
  created_at: string;
  created_by: number;
  updated_at: string;
  updated_by: number;
  epoch: number;
  /**
   * Is this row a system row? A system row cannot be modified or deleted.
   */
  is_system?: boolean;
  /**
   * The name of the integration such as Jira Cloud, Jira Server.
   */
  name: string;
  is_project_default: boolean;
  is_basic_authentication: boolean;
  is_oauth2_authentication: boolean;
  is_reported_by: boolean;
  password?: string;
  username?: string;
  use_master_login?: boolean;
  logo?: string;
  description?: string;
  key: number;
  default_app_url?: string;
  base_integration_id?: number;
  settings?: any;
  org: string;
}
