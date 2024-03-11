/**
 * Copyright (C) 2021 BitModern, Inc - All Rights Reserved
 */
/* eslint-disable import/no-cycle */
/* eslint-disable @typescript-eslint/no-empty-interface */

import { Run } from './Run';
import { ProjectApi } from '../project/ProjectApi';
import { PlanApi } from '../plan/PlanApi';
import { MilestoneApi } from '../milestone/MilestoneApi';
import { CheckRunApi } from '../check_run/CheckRunApi';
import { LabelAssignedApi } from '../label_assigned/LabelAssignedApi';
import { RunResultApi } from '../run_result/RunResultApi';
import { CommentApi } from '../comment/CommentApi';
import { RunSuiteApi } from '../run_suite/RunSuiteApi';

export interface RunApi extends Run {
  project?: ProjectApi;
  plan?: PlanApi;
  milestone?: MilestoneApi;
  check_run?: CheckRunApi;
  label_assigned?: LabelAssignedApi;
  run_result?: RunResultApi[];
  comment?: CommentApi;
  run_suite?: RunSuiteApi[];
}
