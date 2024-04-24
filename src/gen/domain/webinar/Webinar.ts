/**
 * Copyright (C) 2021 BitModern, Inc - All Rights Reserved
 */

import { DefaultAttributes } from '../../models/DefaultAttributes';

export interface Webinar extends DefaultAttributes {
  id: number;
  created_at: string;
  created_by: number;
  updated_at: string;
  updated_by: number;
  epoch: number;
  name: string;
  register_rul: string;
  live_url?: string;
  is_active: boolean;
  start_time: string;
  end_time: string;
  description?: string;
}
