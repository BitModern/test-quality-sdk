/**
 * Copyright (C) 2021 BitModern, Inc - All Rights Reserved
 */
/* eslint-disable import/no-cycle */
/* eslint-disable @typescript-eslint/no-empty-interface */

import { PolicyRows } from './PolicyRows';
import { PolicyApi } from '../policy/PolicyApi';

export interface PolicyRowsApi extends PolicyRows {
  policy?: PolicyApi;
}
