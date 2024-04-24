/**
 * Copyright (C) 2021 BitModern, Inc - All Rights Reserved
 */
/* eslint-disable import/no-cycle */
/* eslint-disable @typescript-eslint/no-empty-interface */

import type { SuiteTest } from './SuiteTest';
import type { SuiteApi } from '../suite/SuiteApi';
import type { TestApi } from '../test/TestApi';

export interface SuiteTestApi extends SuiteTest {
  suite?: SuiteApi;
  test?: TestApi;
}
