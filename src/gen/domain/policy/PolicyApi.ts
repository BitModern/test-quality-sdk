/**
 * Copyright (C) 2021 BitModern, Inc - All Rights Reserved
 */

/* eslint-disable import/no-cycle */
/* eslint-disable @typescript-eslint/no-empty-interface */

import { Policy } from './Policy';
import { AccessRoleApi } from '../access_role/AccessRoleApi';

export interface PolicyApi extends Policy {
  access_role?: AccessRoleApi;
}
