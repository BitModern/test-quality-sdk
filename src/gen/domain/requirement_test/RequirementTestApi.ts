/**
 * Copyright (C) 2021 BitModern, Inc - All Rights Reserved
 */
/* eslint-disable import/no-cycle */
/* eslint-disable @typescript-eslint/no-empty-interface */

import type { RequirementTest } from './RequirementTest';
import type { RequirementApi } from '../requirement/RequirementApi';
import type { TestApi } from '../test/TestApi';
import type { SuiteApi } from '../suite/SuiteApi';

export interface RequirementTestApi extends RequirementTest {
  requirement?: RequirementApi;
  test?: TestApi;
  suite?: SuiteApi;
}
