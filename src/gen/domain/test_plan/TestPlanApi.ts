/**
 * Copyright (C) 2021 BitModern, Inc - All Rights Reserved
 */
/* eslint-disable import/no-cycle */
/* eslint-disable @typescript-eslint/no-empty-interface */

import type { TestPlan } from './TestPlan';
import type { ProjectApi } from '../project/ProjectApi';
import type { DocApi } from '../doc/DocApi';

export interface TestPlanApi extends TestPlan {
  project?: ProjectApi;
  doc?: DocApi;
}
