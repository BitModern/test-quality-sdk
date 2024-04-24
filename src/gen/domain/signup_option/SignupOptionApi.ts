/**
 * Copyright (C) 2021 BitModern, Inc - All Rights Reserved
 */
/* eslint-disable import/no-cycle */
/* eslint-disable @typescript-eslint/no-empty-interface */

import type { SignupOption } from './SignupOption';
import type { ClientApi } from '../client/ClientApi';

export interface SignupOptionApi extends SignupOption {
  client?: ClientApi;
}
