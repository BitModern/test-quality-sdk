/**
 * Copyright (C) 2021 BitModern, Inc - All Rights Reserved
 */
/* eslint-disable import/no-cycle */
/* eslint-disable @typescript-eslint/no-empty-interface */

import { Step } from './Step';
import { SharedStepApi } from '../shared_step/SharedStepApi';
import { TestApi } from '../test/TestApi';
import { ProjectApi } from '../project/ProjectApi';
import { LabelAssignedApi } from '../label_assigned/LabelAssignedApi';
import { RunResultStepApi } from '../run_result_step/RunResultStepApi';
import { CommentApi } from '../comment/CommentApi';

export interface StepApi extends Step {
  shared_step?: SharedStepApi;
  test?: TestApi;
  project?: ProjectApi;
  label_assigned?: LabelAssignedApi;
  run_result_step?: RunResultStepApi[];
  comment?: CommentApi;
}
