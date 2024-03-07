/**
 * Copyright (C) 2021 BitModern, Inc - All Rights Reserved
 */
/* eslint-disable import/no-cycle */
/* eslint-disable @typescript-eslint/no-empty-interface */

import { Run } from './Run';
import { MilestoneApi } from '../milestone/MilestoneApi';
import { CheckRunApi } from '../check_run/CheckRunApi';
import { ProjectApi } from '../project/ProjectApi';
import { PlanApi } from '../plan/PlanApi';
import { LabelAssignedApi } from '../label_assigned/LabelAssignedApi';
import { CommentApi } from '../comment/CommentApi';
import { RunSuiteApi } from '../run_suite/RunSuiteApi';
import { RunResultApi } from '../run_result/RunResultApi';

export interface RunApi extends Run {
  milestone?: MilestoneApi;
  check_run?: CheckRunApi;
  project?: ProjectApi;
  plan?: PlanApi;
  label_assigned?: LabelAssignedApi;
  comment?: CommentApi;
  run_suite?: RunSuiteApi[];
  run_result?: RunResultApi[];
}
