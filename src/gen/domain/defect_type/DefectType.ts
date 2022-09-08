/**
 * Copyright (C) 2021 BitModern, Inc - All Rights Reserved
 */

import { DefaultAttributes } from '../../models/DefaultAttributes';

export interface DefectType extends DefaultAttributes {
  id: number;
  name: string;
  external_reference_id?: string;
  icon_url?: string;
  integration_project_id?: number;
  description?: string;
  is_subtask?: boolean;
}
