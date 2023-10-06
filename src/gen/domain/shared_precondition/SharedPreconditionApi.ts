/**
 * Copyright (C) 2021 BitModern, Inc - All Rights Reserved
 */

/* eslint-disable import/no-cycle */
/* eslint-disable @typescript-eslint/no-empty-interface */

import { SharedPrecondition } from './SharedPrecondition';
import { TestApi } from '../test/TestApi';

export interface SharedPreconditionApi extends SharedPrecondition {
  test?: TestApi[];
}
