/**
 * Copyright (C) 2021 BitModern, Inc - All Rights Reserved
 */
/* eslint-disable import/no-cycle */
/* eslint-disable @typescript-eslint/no-empty-interface */

import { Comment } from './Comment';
import { TestApi } from '../test/TestApi';
import { StepApi } from '../step/StepApi';
import { SuiteApi } from '../suite/SuiteApi';
import { PlanApi } from '../plan/PlanApi';
import { MilestoneApi } from '../milestone/MilestoneApi';
import { ProjectApi } from '../project/ProjectApi';
import { RunResultApi } from '../run_result/RunResultApi';
import { RunApi } from '../run/RunApi';
import { RunResultStepApi } from '../run_result_step/RunResultStepApi';

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
