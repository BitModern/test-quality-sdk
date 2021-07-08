/**
 * Copyright (C) 2021 BitModern, Inc - All Rights Reserved
 */

/* eslint-disable import/no-cycle */
/* eslint-disable @typescript-eslint/no-empty-interface */

import { PlanSuiteTestInclude } from './PlanSuiteTestInclude';
import { PlanApi } from '../plan/PlanApi';
import { SuiteApi } from '../suite/SuiteApi';
import { TestApi } from '../test/TestApi';
import { ProjectApi } from '../project/ProjectApi';

export interface PlanSuiteTestIncludeApi extends PlanSuiteTestInclude {
  plan?: PlanApi;
  suite?: SuiteApi;
  test?: TestApi;
  project?: ProjectApi;
}
