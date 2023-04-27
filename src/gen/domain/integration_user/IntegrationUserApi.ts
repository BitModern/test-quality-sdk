/**
 * Copyright (C) 2021 BitModern, Inc - All Rights Reserved
 */

/* eslint-disable import/no-cycle */
/* eslint-disable @typescript-eslint/no-empty-interface */

import { IntegrationUser } from './IntegrationUser';
import { UserApi } from '../user/UserApi';
import { IntegrationApi } from '../integration/IntegrationApi';

export interface IntegrationUserApi extends IntegrationUser {
  user?: UserApi;
  integration?: IntegrationApi;
}
