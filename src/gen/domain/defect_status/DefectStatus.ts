/**
 * Copyright (C) 2021 BitModern, Inc - All Rights Reserved
 */

import { KeyedModel } from '../../models/KeyedModel';

export interface DefectStatus extends KeyedModel {
  created_at: string;
  updated_by: number;
  updated_at: string;
  epoch: number;
  client_id: number;
  id: number;
  name: string;
  description?: string;
  icon_url?: string;
  key: number;
  is_system?: boolean;
  created_by: number;
}
