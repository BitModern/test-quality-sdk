/**
 * Copyright (C) 2021 BitModern, Inc - All Rights Reserved
 */

/* eslint-disable import/no-cycle */
/* eslint-disable @typescript-eslint/no-empty-interface */

import { Run } from './Run';
import { MilestoneApi } from '../milestone/MilestoneApi';
import { ProjectApi } from '../project/ProjectApi';
import { PlanApi } from '../plan/PlanApi';
import { CheckRunApi } from '../check_run/CheckRunApi';
import { LabelAssignedApi } from '../label_assigned/LabelAssignedApi';
import { CommentApi } from '../comment/CommentApi';
import { RunResultApi } from '../run_result/RunResultApi';
import { RunSuiteApi } from '../run_suite/RunSuiteApi';

export interface RunApi extends Run {
  milestone?: MilestoneApi;
  project?: ProjectApi;
  plan?: PlanApi;
  check_run?: CheckRunApi;
  label_assigned?: LabelAssignedApi;
  comment?: CommentApi;
  run_result?: RunResultApi[];
  run_suite?: RunSuiteApi[];
}
