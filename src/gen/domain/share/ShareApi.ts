/**
 * Copyright (C) 2021 BitModern, Inc - All Rights Reserved
 */
/* eslint-disable import/no-cycle */
/* eslint-disable @typescript-eslint/no-empty-interface */

import type { Share } from './Share';
import type { AccessRoleApi } from '../access_role/AccessRoleApi';
import type { ShareUserApi } from '../share_user/ShareUserApi';

export interface ShareApi extends Share {
  access_role?: AccessRoleApi;
  share_user?: ShareUserApi[];
}
