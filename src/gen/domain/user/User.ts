/**
 * Copyright (C) 2021 BitModern, Inc - All Rights Reserved
 */

import type { KeyedModel } from '../../models/KeyedModel';

export interface User extends KeyedModel {
  id: number;
  created_by: number;
  created_at: string;
  updated_by: number;
  updated_at: string;
  epoch: number;
  given_name?: string;
  family_name?: string;
  email: string;
  picture?: string;
  client_id: number;
  remember_token?: string;
  password: string;
  settings?: any;
  color?: string;
  last_login?: string;
  stripe_id?: string;
  card_brand?: string;
  card_last_four?: string;
  trial_ends_at?: string;
  verified: boolean;
  verification_token?: string;
  /**
   * If set this user is a system user with god permission.
   */
  is_system?: boolean;
  old_password?: string;
  is_expired: boolean;
  signup_type?: number;
  slack_webhook_url?: string;
  cli_token?: string;
  cli_expires_at?: string;
  cli_name?: string;
  current_project_id?: number;
  jira_token?: string;
  jira_expires_at?: string;
  jira_name?: string;
}
