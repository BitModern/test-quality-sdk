/**
 * Copyright (C) 2021 BitModern, Inc - All Rights Reserved
 */
/* eslint-disable import/no-cycle */
/* eslint-disable @typescript-eslint/no-empty-interface */

import type { PlanSuiteTestInclude } from './PlanSuiteTestInclude';
import type { PlanApi } from '../plan/PlanApi';
import type { SuiteApi } from '../suite/SuiteApi';
import type { TestApi } from '../test/TestApi';
import type { ProjectApi } from '../project/ProjectApi';

export interface PlanSuiteTestIncludeApi extends PlanSuiteTestInclude {
  plan?: PlanApi;
  suite?: SuiteApi;
  test?: TestApi;
  project?: ProjectApi;
}
