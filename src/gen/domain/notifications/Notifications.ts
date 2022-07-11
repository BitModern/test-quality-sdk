/**
 * Copyright (C) 2021 BitModern, Inc - All Rights Reserved
 */

import { CustomAttributes } from '../../models/CustomAttributes';

export interface Notifications extends CustomAttributes {
  read_at?: string;
  id: string;
  notifiable_id?: number;
  created_by: number;
  created_at: string;
  updated_by: number;
  updated_at: string;
  epoch: number;
  /**
   * The name of the case_priority.
   */
  type: string;
  client_id: number;
  notifiable_type: string;
  data: string;
}
