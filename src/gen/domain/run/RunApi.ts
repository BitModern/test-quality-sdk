/**
 * Copyright (C) 2021 BitModern, Inc - All Rights Reserved
 */
/* eslint-disable import/no-cycle */
/* eslint-disable @typescript-eslint/no-empty-interface */

import type { Run } from './Run';
import type { MilestoneApi } from '../milestone/MilestoneApi';
import type { CheckRunApi } from '../check_run/CheckRunApi';
import type { ProjectApi } from '../project/ProjectApi';
import type { PlanApi } from '../plan/PlanApi';
import type { LabelAssignedApi } from '../label_assigned/LabelAssignedApi';
import type { RunSuiteApi } from '../run_suite/RunSuiteApi';
import type { PullRequestRunApi } from '../pull_request_run/PullRequestRunApi';
import type { RunResultApi } from '../run_result/RunResultApi';
import type { CommentApi } from '../comment/CommentApi';

export interface RunApi extends Run {
  milestone?: MilestoneApi;
  check_run?: CheckRunApi;
  project?: ProjectApi;
  plan?: PlanApi;
  label_assigned?: LabelAssignedApi;
  run_suite?: RunSuiteApi[];
  pull_request_run?: PullRequestRunApi[];
  run_result?: RunResultApi[];
  comment?: CommentApi;
}
