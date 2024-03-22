/**
 * Copyright (C) 2021 BitModern, Inc - All Rights Reserved
 */

import { DefaultAttributes } from '../../models/DefaultAttributes';

export interface DefectPriority extends DefaultAttributes {
  name: string;
  description?: string;
  id: number;
  integration_project_id?: number;
}
