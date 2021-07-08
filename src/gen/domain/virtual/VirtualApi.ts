/**
 * Copyright (C) 2021 BitModern, Inc - All Rights Reserved
 */

/* eslint-disable import/no-cycle */
/* eslint-disable @typescript-eslint/no-empty-interface */

import { Virtual } from './Virtual';
import { ClientApi } from '../client/ClientApi';

export interface VirtualApi extends Virtual {
  client?: ClientApi;
}
