/**
 * Copyright (C) 2021 BitModern, Inc - All Rights Reserved
 */

import type { KeyedModel } from '../../models/KeyedModel';

export interface Share extends KeyedModel {
  id: number;
  created_at: string;
  created_by: number;
  updated_at: string;
  updated_by: number;
  epoch: number;
  client_id: number;
  token: string;
  is_anyone: boolean;
  related_type: string;
  related_id: number;
  url?: string;
  access_role_id: number;
  link?: string;
  magic_link?: string;
  type?: number;
}
