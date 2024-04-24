/**
 * Copyright (C) 2021 BitModern, Inc - All Rights Reserved
 */
/* eslint-disable import/no-cycle */
/* eslint-disable @typescript-eslint/no-empty-interface */

import type { Policy } from './Policy';
import type { AccessRoleApi } from '../access_role/AccessRoleApi';
import type { PolicyRowsApi } from '../policy_rows/PolicyRowsApi';

export interface PolicyApi extends Policy {
  access_role?: AccessRoleApi;
  policy_rows?: PolicyRowsApi[];
}
