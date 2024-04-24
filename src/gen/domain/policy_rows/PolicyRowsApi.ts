/**
 * Copyright (C) 2021 BitModern, Inc - All Rights Reserved
 */
/* eslint-disable import/no-cycle */
/* eslint-disable @typescript-eslint/no-empty-interface */

import type { PolicyRows } from './PolicyRows';
import type { PolicyApi } from '../policy/PolicyApi';

export interface PolicyRowsApi extends PolicyRows {
  policy?: PolicyApi;
}
