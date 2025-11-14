/**
 * Copyright (C) 2021 BitModern, Inc - All Rights Reserved
 */

import type { TenantScopedModel } from '../../models/TenantScopedModel';

export interface IntegrationProject extends TenantScopedModel {
  id: number;
  project_id?: number;
  integration_id?: number;
  /**
   * The username for the rest API for the external system. This username should have global permission for the project
   */
  username?: string;
  /**
   * The username for the rest API for the external system. The username should have global permission for the project
   */
  password?: string;
  created_at: string;
  updated_at: string;
  client_id: number;
  /**
   * Contains the ID of the linked project in the external system.
   */
  project_reference_id: string;
  /**
   * The URL to the rest API for the external system.
   */
  url: string;
  /**
   * Use basic HTTP authentication.
   */
  is_basic_authentication: boolean;
  /**
   * Use oAuth2 authentication.
   */
  is_oauth2_authentication: boolean;
  /**
   * If the target application supports a reported by capability then the credentials in this entity are used to authenticate and the user details from
   * integration_user are used for reported by.
   */
  is_reported_by: boolean;
  use_master_login: boolean;
  requirement_fields?: string;
  key: number;
  app_url: string;
  created_by: number;
  updated_by: number;
  epoch: number;
  webhook_url?: string;
  org?: string;
  project_reference_name?: string;
  app_install_project_id?: number;
  org_id?: string;
  enable_pull_request_testing: boolean;
  plan_id?: number;
}
