/**
 * Copyright (C) 2021 BitModern, Inc - All Rights Reserved
 */

/* eslint-disable import/no-cycle */
/* eslint-disable @typescript-eslint/no-empty-interface */

import { Notifications } from './Notifications';
import { UserApi } from '../user/UserApi';

export interface NotificationsApi extends Notifications {
  user?: UserApi;
}
