/**
 * Copyright (C) 2021 BitModern, Inc - All Rights Reserved
 */

/* eslint-disable import/no-cycle */
/* eslint-disable @typescript-eslint/no-empty-interface */

import { AccessRole } from './AccessRole';
import { PolicyApi } from '../policy/PolicyApi';
import { ProjectApi } from '../project/ProjectApi';
import { AccessRoleUserApi } from '../access_role_user/AccessRoleUserApi';
import { UserApi } from '../user/UserApi';

export interface AccessRoleApi extends AccessRole {
  policy?: PolicyApi[];
  project?: ProjectApi[];
  user?: UserApi[];
  pivot?: AccessRoleUserApi;
}
