/**
 * Copyright (C) 2021 BitModern, Inc - All Rights Reserved
 */
/* eslint-disable import/no-cycle */
/* eslint-disable @typescript-eslint/no-empty-interface */

import { SuiteTest } from './SuiteTest';
import { SuiteApi } from '../suite/SuiteApi';
import { TestApi } from '../test/TestApi';

export interface SuiteTestApi extends SuiteTest {
  suite?: SuiteApi;
  test?: TestApi;
}
