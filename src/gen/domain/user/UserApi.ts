/**
 * Copyright (C) 2021 BitModern, Inc - All Rights Reserved
 */

/* eslint-disable import/no-cycle */
/* eslint-disable @typescript-eslint/no-empty-interface */

import { User } from './User';
import { AccessRoleUserApi } from '../access_role_user/AccessRoleUserApi';
import { AccessRoleApi } from '../access_role/AccessRoleApi';
import { IntegrationUserApi } from '../integration_user/IntegrationUserApi';
import { IntegrationApi } from '../integration/IntegrationApi';
import { NotificationsApi } from '../notifications/NotificationsApi';

export interface UserApi extends User {
  access_role?: AccessRoleApi[];
  access_role_id?: number; // This field is required during create
  integration?: IntegrationApi[];
  notifications?: NotificationsApi;
  pivot?: AccessRoleUserApi | IntegrationUserApi;
}
