/**
 * Copyright (C) 2021 BitModern, Inc - All Rights Reserved
 */

/* eslint-disable import/no-cycle */
/* eslint-disable @typescript-eslint/no-empty-interface */

import { Step } from './Step';
import { ProjectApi } from '../project/ProjectApi';
import { TestApi } from '../test/TestApi';
import { LabelAssignedApi } from '../label_assigned/LabelAssignedApi';
import { RunResultStepApi } from '../run_result_step/RunResultStepApi';
import { CommentApi } from '../comment/CommentApi';

export interface StepApi extends Step {
  project?: ProjectApi;
  test?: TestApi;
  label_assigned?: LabelAssignedApi;
  run_result_step?: RunResultStepApi[];
  comment?: CommentApi;
}
