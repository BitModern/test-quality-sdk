/**
 * Copyright (C) 2021 BitModern, Inc - All Rights Reserved
 */

/* eslint-disable import/no-cycle */
/* eslint-disable @typescript-eslint/no-empty-interface */

import { User } from './User';
import { IntegrationUserApi } from '../integration_user/IntegrationUserApi';
import { IntegrationApi } from '../integration/IntegrationApi';
import { AccessRoleUserApi } from '../access_role_user/AccessRoleUserApi';
import { AccessRoleApi } from '../access_role/AccessRoleApi';
import { NotificationsApi } from '../notifications/NotificationsApi';

export interface UserApi extends User {
  integration?: IntegrationApi[];
  access_role?: AccessRoleApi[];
  access_role_id?: number; // This field is required during create
  notifications?: NotificationsApi;
  pivot?: IntegrationUserApi | AccessRoleUserApi;
}
