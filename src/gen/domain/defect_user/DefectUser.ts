/**
 * Copyright (C) 2021 BitModern, Inc - All Rights Reserved
 */

import { DefaultAttributes } from '../../models/DefaultAttributes';

export interface DefectUser extends DefaultAttributes {
  integration_project_id?: number;
  id: number;
  name: string;
  email?: string;
  external_reference_id?: string;
  avatar_url?: string;
}
