/**
 * Copyright (C) 2021 BitModern, Inc - All Rights Reserved
 */

import type { DefaultAttributes } from '../../models/DefaultAttributes';

export interface ComponentDocType extends DefaultAttributes {
  id: number;
  created_by: number;
  created_at: string;
  updated_by: number;
  updated_at: string;
  epoch: number;
  is_recommended: boolean;
  sequence: number;
  doc_type_id: number;
  component_id: number;
}
