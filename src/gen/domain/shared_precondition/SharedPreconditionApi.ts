/**
 * Copyright (C) 2021 BitModern, Inc - All Rights Reserved
 */
/* eslint-disable import/no-cycle */
/* eslint-disable @typescript-eslint/no-empty-interface */

import type { SharedPrecondition } from './SharedPrecondition';
import type { TestApi } from '../test/TestApi';

export interface SharedPreconditionApi extends SharedPrecondition {
  test?: TestApi[];
}
