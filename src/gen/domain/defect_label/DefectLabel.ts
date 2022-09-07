/**
 * Copyright (C) 2021 BitModern, Inc - All Rights Reserved
 */

import { DefaultAttributes } from '../../models/DefaultAttributes';

export interface DefectLabel extends DefaultAttributes {
  id: number;
  name: string;
  description?: string;
  color?: string;
  integration_project_id?: number;
}
