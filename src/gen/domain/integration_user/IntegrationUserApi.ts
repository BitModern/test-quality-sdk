/**
 * Copyright (C) 2021 BitModern, Inc - All Rights Reserved
 */

/* eslint-disable import/no-cycle */
/* eslint-disable @typescript-eslint/no-empty-interface */

import { IntegrationUser } from './IntegrationUser';
import { IntegrationApi } from '../integration/IntegrationApi';
import { UserApi } from '../user/UserApi';

export interface IntegrationUserApi extends IntegrationUser {
  integration?: IntegrationApi;
  user?: UserApi;
}
