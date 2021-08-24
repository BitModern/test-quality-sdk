/**
 * Copyright (C) 2021 BitModern, Inc - All Rights Reserved
 */

import { TenantScopedModel } from '../../models/TenantScopedModel';

export interface IntegrationUser extends TenantScopedModel {
  user_id?: number;
  id: number;
  /**
   * The username for the rest API for the external system for a specific BitModern user.
   */
  username?: string;
  /**
   * The password for the rest API for the external system for a specific BitModern user.
   */
  password?: string;
  created_at: string;
  updated_at: string;
  client_id: number;
  integration_id?: number;
  key: number;
  created_by: number;
  updated_by: number;
  epoch: number;
  access_token?: string;
  external_reference_id?: string;
  app_version?: number;
}
