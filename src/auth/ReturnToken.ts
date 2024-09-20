/**
 * Copyright (C) 2021 BitModern, Inc - All Rights Reserved
 */

export interface ReturnTokenFailure {
  project_id?: number;
  project_name?: string;
  message: string;
}

export interface ReturnToken {
  access_token: string;
  client_id: number;
  client_name: string;
  client_type: number;
  expires_at: string;
  expires_in: number;
  failures: ReturnTokenFailure[];
  github_open_source_subscription_invalid: boolean;
  is_expired: boolean;
  message: string;
  refresh_token?: string;
  subscription_ended_at: string;
  subscription_ends_at: string;
  token_type: string;
  trial_ended_at: string;
  trial_ends_at: string;
  user_id: number;
  verification_ended_at: string;
  verification_ends_at: string;
}

export enum ClientTypeEnum {
  TestManagement = 1,
  Internal = 2,
  TestPlan = 3,
  Trial = 4,
}
