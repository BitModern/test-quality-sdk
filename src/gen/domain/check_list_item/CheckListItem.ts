/**
 * Copyright (C) 2021 BitModern, Inc - All Rights Reserved
 */

import type { DefaultAttributes } from '../../models/DefaultAttributes';

export interface CheckListItem extends DefaultAttributes {
  id: number;
  created_at: string;
  created_by: number;
  updated_at: string;
  updated_by: number;
  epoch: number;
  name: string;
  doc_url?: string;
  video_url?: string;
  is_active: boolean;
  description?: string;
  is_optional: boolean;
  sequence: number;
  check_list_id: number;
}
