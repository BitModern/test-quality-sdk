/**
 * Copyright (C) 2021 BitModern, Inc - All Rights Reserved
 */
/* eslint-disable import/no-cycle */
/* eslint-disable @typescript-eslint/no-empty-interface */

import type { Run } from './Run';
import type { ProjectApi } from '../project/ProjectApi';
import type { PlanApi } from '../plan/PlanApi';
import type { MilestoneApi } from '../milestone/MilestoneApi';
import type { CheckRunApi } from '../check_run/CheckRunApi';
import type { LabelAssignedApi } from '../label_assigned/LabelAssignedApi';
import type { PullRequestRunApi } from '../pull_request_run/PullRequestRunApi';
import type { AttachmentApi } from '../attachment/AttachmentApi';
import type { RunResultApi } from '../run_result/RunResultApi';
import type { CommentApi } from '../comment/CommentApi';
import type { RunSuiteApi } from '../run_suite/RunSuiteApi';

export interface RunApi extends Run {
  project?: ProjectApi;
  plan?: PlanApi;
  milestone?: MilestoneApi;
  check_run?: CheckRunApi;
  label_assigned?: LabelAssignedApi;
  pull_request_run?: PullRequestRunApi[];
  attachment?: AttachmentApi;
  run_result?: RunResultApi[];
  comment?: CommentApi;
  run_suite?: RunSuiteApi[];
}
