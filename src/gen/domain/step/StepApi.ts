/**
 * Copyright (C) 2021 BitModern, Inc - All Rights Reserved
 */
/* eslint-disable import/no-cycle */
/* eslint-disable @typescript-eslint/no-empty-interface */

import type { Step } from './Step';
import type { TestApi } from '../test/TestApi';
import type { ProjectApi } from '../project/ProjectApi';
import type { SharedStepApi } from '../shared_step/SharedStepApi';
import type { LabelAssignedApi } from '../label_assigned/LabelAssignedApi';
import type { RunResultStepApi } from '../run_result_step/RunResultStepApi';
import type { CommentApi } from '../comment/CommentApi';

export interface StepApi extends Step {
  test?: TestApi;
  project?: ProjectApi;
  shared_step?: SharedStepApi;
  label_assigned?: LabelAssignedApi;
  run_result_step?: RunResultStepApi[];
  comment?: CommentApi;
}
