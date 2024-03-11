/**
 * Copyright (C) 2021 BitModern, Inc - All Rights Reserved
 */
/* eslint-disable import/no-cycle */
/* eslint-disable @typescript-eslint/no-empty-interface */

import { RunResult } from './RunResult';
import { SuiteApi } from '../suite/SuiteApi';
import { AppVersionPlatVersionApi } from '../app_version_plat_version/AppVersionPlatVersionApi';
import { ProjectApi } from '../project/ProjectApi';
import { RunApi } from '../run/RunApi';
import { StatusApi } from '../status/StatusApi';
import { TestApi } from '../test/TestApi';
import { LabelAssignedApi } from '../label_assigned/LabelAssignedApi';
import { CommentApi } from '../comment/CommentApi';
import { AttachmentApi } from '../attachment/AttachmentApi';
import { DefectRunResultApi } from '../defect_run_result/DefectRunResultApi';
import { DefectApi } from '../defect/DefectApi';
import { RunResultStepApi } from '../run_result_step/RunResultStepApi';

export interface RunResultApi extends RunResult {
  suite?: SuiteApi;
  app_version_plat_version?: AppVersionPlatVersionApi;
  project?: ProjectApi;
  run?: RunApi;
  status?: StatusApi;
  test?: TestApi;
  label_assigned?: LabelAssignedApi;
  comment?: CommentApi;
  attachment?: AttachmentApi;
  defect?: DefectApi[];
  run_result_step?: RunResultStepApi[];
  pivot?: DefectRunResultApi;
  defect_run_result?: Partial<DefectRunResultApi>;
}
