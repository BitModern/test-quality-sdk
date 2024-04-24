/**
 * Copyright (C) 2021 BitModern, Inc - All Rights Reserved
 */
/* eslint-disable import/no-cycle */
/* eslint-disable @typescript-eslint/no-empty-interface */

import type { Notifications } from './Notifications';
import type { UserApi } from '../user/UserApi';

export interface NotificationsApi extends Notifications {
  user?: UserApi;
}
