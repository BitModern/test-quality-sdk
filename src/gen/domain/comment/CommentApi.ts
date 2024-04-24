/**
 * Copyright (C) 2021 BitModern, Inc - All Rights Reserved
 */
/* eslint-disable import/no-cycle */
/* eslint-disable @typescript-eslint/no-empty-interface */

import type { Comment } from './Comment';
import type { TestApi } from '../test/TestApi';
import type { StepApi } from '../step/StepApi';
import type { SuiteApi } from '../suite/SuiteApi';
import type { PlanApi } from '../plan/PlanApi';
import type { MilestoneApi } from '../milestone/MilestoneApi';
import type { ProjectApi } from '../project/ProjectApi';
import type { RunResultApi } from '../run_result/RunResultApi';
import type { RunApi } from '../run/RunApi';
import type { RunResultStepApi } from '../run_result_step/RunResultStepApi';

export interface CommentApi extends Comment {
  test?: TestApi;
  step?: StepApi;
  suite?: SuiteApi;
  plan?: PlanApi;
  milestone?: MilestoneApi;
  project?: ProjectApi;
  run_result?: RunResultApi;
  run?: RunApi;
  run_result_step?: RunResultStepApi;
}
