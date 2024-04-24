/**
 * Copyright (C) 2021 BitModern, Inc - All Rights Reserved
 */

import type { DefaultAttributes } from '../../models/DefaultAttributes';

export interface DefectPriority extends DefaultAttributes {
  id: number;
  name: string;
  description?: string;
  integration_project_id?: number;
}
