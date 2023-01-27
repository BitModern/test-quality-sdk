/**
 * Copyright (C) 2021 BitModern, Inc - All Rights Reserved
 */

import { KeyedModel } from '../../models/KeyedModel';

export interface SignupOption extends KeyedModel {
  created_by: number;
  updated_at: string;
  updated_by: number;
  epoch: number;
  id: number;
  created_at: string;
  client_id: number;
  signup_type: number;
  name: string;
}
