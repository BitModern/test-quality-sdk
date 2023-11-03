/**
 * Copyright (C) 2021 BitModern, Inc - All Rights Reserved
 */

import { KeyedModel } from '../../models/KeyedModel';

export interface AppUser extends KeyedModel {
  id: number;
  external_reference_id: string;
  username: string;
  created_at: string;
  created_by: number;
  updated_at: string;
  updated_by: number;
  epoch: number;
  avatar_url?: string;
  html_url?: string;
  client_id: number;
  type?: string;
}
