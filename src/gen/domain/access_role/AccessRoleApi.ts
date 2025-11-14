/**
 * Copyright (C) 2021 BitModern, Inc - All Rights Reserved
 */
/* eslint-disable import/no-cycle */
/* eslint-disable @typescript-eslint/no-empty-interface */

import type { AccessRole } from './AccessRole';
import type { ShareApi } from '../share/ShareApi';
import type { PolicyApi } from '../policy/PolicyApi';
import type { AccessRoleUserApi } from '../access_role_user/AccessRoleUserApi';
import type { UserApi } from '../user/UserApi';

export interface AccessRoleApi extends AccessRole {
  share?: ShareApi[];
  policy?: PolicyApi[];
  user?: UserApi[];
  pivot?: AccessRoleUserApi;
  access_role_user?: Partial<AccessRoleUserApi>;
}
