/**
 * Copyright (C) 2021 BitModern, Inc - All Rights Reserved
 */
/* eslint-disable import/no-cycle */
/* eslint-disable @typescript-eslint/no-empty-interface */

import type { ShareUser } from './ShareUser';
import type { ShareApi } from '../share/ShareApi';
import type { UserApi } from '../user/UserApi';

export interface ShareUserApi extends ShareUser {
  share?: ShareApi;
  user?: UserApi;
}
