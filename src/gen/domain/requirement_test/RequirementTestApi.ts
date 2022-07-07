/**
 * Copyright (C) 2021 BitModern, Inc - All Rights Reserved
 */

/* eslint-disable import/no-cycle */
/* eslint-disable @typescript-eslint/no-empty-interface */

import { RequirementTest } from './RequirementTest';
import { RequirementApi } from '../requirement/RequirementApi';
import { TestApi } from '../test/TestApi';
import { SuiteApi } from '../suite/SuiteApi';

export interface RequirementTestApi extends RequirementTest {
  requirement?: RequirementApi;
  test?: TestApi;
  suite?: SuiteApi;
}
