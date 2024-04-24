/**
 * Copyright (C) 2021 BitModern, Inc - All Rights Reserved
 */

import type { DefaultAttributes } from '../../models/DefaultAttributes';

export interface DefectComponent extends DefaultAttributes {
  id: number;
  name: string;
  description?: string;
  integration_project_id?: number;
}
