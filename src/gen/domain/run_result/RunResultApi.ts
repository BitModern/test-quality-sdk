/**
 * Copyright (C) 2021 BitModern, Inc - All Rights Reserved
 */
/* eslint-disable import/no-cycle */
/* eslint-disable @typescript-eslint/no-empty-interface */

import type { RunResult } from './RunResult';
import type { StatusApi } from '../status/StatusApi';
import type { TestApi } from '../test/TestApi';
import type { SuiteApi } from '../suite/SuiteApi';
import type { AppVersionPlatVersionApi } from '../app_version_plat_version/AppVersionPlatVersionApi';
import type { ProjectApi } from '../project/ProjectApi';
import type { RunApi } from '../run/RunApi';
import type { LabelAssignedApi } from '../label_assigned/LabelAssignedApi';
import type { DefectRunResultApi } from '../defect_run_result/DefectRunResultApi';
import type { DefectApi } from '../defect/DefectApi';
import type { RunResultStepApi } from '../run_result_step/RunResultStepApi';
import type { AttachmentApi } from '../attachment/AttachmentApi';
import type { CommentApi } from '../comment/CommentApi';

export interface RunResultApi extends RunResult {
  status?: StatusApi;
  test?: TestApi;
  suite?: SuiteApi;
  app_version_plat_version?: AppVersionPlatVersionApi;
  project?: ProjectApi;
  run?: RunApi;
  label_assigned?: LabelAssignedApi;
  defect?: DefectApi[];
  run_result_step?: RunResultStepApi[];
  attachment?: AttachmentApi;
  comment?: CommentApi;
  pivot?: DefectRunResultApi;
  defect_run_result?: Partial<DefectRunResultApi>;
}
