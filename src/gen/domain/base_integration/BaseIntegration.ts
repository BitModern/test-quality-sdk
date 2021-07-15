/**
 * Copyright (C) 2021 BitModern, Inc - All Rights Reserved
 */

import { DefaultAttributes } from '../../models/DefaultAttributes';

export interface BaseIntegration extends DefaultAttributes {
  id: number;
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
  is_oauth2_authentication: boolean;
  is_reported_by: boolean;
  use_master_login?: boolean;
  logo?: string;
  description?: string;
  default_app_url?: string;
  is_basic_authentication: boolean;
}
