/**
 * Copyright (C) 2021 BitModern, Inc - All Rights Reserved
 */
import { type Subscriptions } from '../gen/domain';

// From testQuality App/Models/SubscriptionEntitlement
export interface SubscriptionEntitlement {
  is_expired?: boolean;
  subscription: Subscriptions;
  subscription_ends_at?: string;
  temporary: string[];
  trial_ends_at?: string;
  unavailable: string[];
}

// From testQuality App/Models/AccessToken
export interface AccessToken extends SubscriptionEntitlement {
  access_token: string;
  beta_mode?: boolean;
  expires_in: number;
  client_id?: number;
  client_name?: string;
  client_type?: number;
  failures?: ReturnTokenFailure[];
  github_open_source_subscription_invalid?: boolean;
  refresh_token: string;
  subscription_ended_at?: string;
  token_type: string;
  trial_ended_at?: string;
  user_id?: number;
  verification_ends_at?: string;
}

export interface ReturnTokenFailure {
  project_id?: number;
  project_name?: string;
  message: string;
}

// TODO @david
// check Auth.setPat - it sets a token with just access_token
// this forces us to set all fixed properties from testQuality as optional
// Perhaps we could have a separate type, ie. PatToken
// or have token='PAT' and have token be ReturnToken | { access_token }

export interface ReturnToken extends Partial<AccessToken> {
  access_token: string; // mandatory in both token types
  // From Unknown
  expires_at?: string; // added in Auth.setToken
  message?: string;
  url?: string;
  verification_ended_at?: string;
}

export enum ClientTypeEnum {
  TestManagement = 1,
  Internal = 2,
  TestPlan = 3,
  Trial = 4,
}
