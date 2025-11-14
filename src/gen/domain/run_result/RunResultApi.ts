/**
 * Copyright (C) 2021 BitModern, Inc - All Rights Reserved
 */
/* eslint-disable import/no-cycle */
/* eslint-disable @typescript-eslint/no-empty-interface */

import type { RunResult } from './RunResult';
import type { StatusApi } from '../status/StatusApi';
import type { EnvironmentApi } from '../environment/EnvironmentApi';
import type { TestApi } from '../test/TestApi';
import type { SuiteApi } from '../suite/SuiteApi';
import type { ProjectApi } from '../project/ProjectApi';
import type { RunApi } from '../run/RunApi';
import type { LabelAssignedApi } from '../label_assigned/LabelAssignedApi';
import type { RunResultStepApi } from '../run_result_step/RunResultStepApi';
import type { AttachmentApi } from '../attachment/AttachmentApi';
import type { CommentApi } from '../comment/CommentApi';
import type { DefectRunResultApi } from '../defect_run_result/DefectRunResultApi';
import type { DefectApi } from '../defect/DefectApi';

export interface RunResultApi extends RunResult {
  status?: StatusApi;
  environment?: EnvironmentApi;
  test?: TestApi;
  suite?: SuiteApi;
  project?: ProjectApi;
  run?: RunApi;
  label_assigned?: LabelAssignedApi;
  run_result_step?: RunResultStepApi[];
  attachment?: AttachmentApi;
  comment?: CommentApi;
  defect?: DefectApi[];
  pivot?: DefectRunResultApi;
  defect_run_result?: Partial<DefectRunResultApi>;
}
