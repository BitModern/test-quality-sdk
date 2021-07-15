/**
 * Copyright (C) 2021 BitModern, Inc - All Rights Reserved
 */

/* eslint-disable import/no-cycle */
/* eslint-disable @typescript-eslint/no-empty-interface */

import { AccessRoleUser } from './AccessRoleUser';
import { AccessRoleApi } from '../access_role/AccessRoleApi';
import { UserApi } from '../user/UserApi';

export interface AccessRoleUserApi extends AccessRoleUser {
  access_role?: AccessRoleApi;
  user?: UserApi;
}
