/**
 * Copyright (C) 2021 BitModern, Inc - All Rights Reserved
 */

/* eslint-disable import/no-cycle */
/* eslint-disable @typescript-eslint/no-empty-interface */

import { RunResult } from './RunResult';
import { StatusApi } from '../status/StatusApi';
import { TestApi } from '../test/TestApi';
import { SuiteApi } from '../suite/SuiteApi';
import { AppVersionPlatVersionApi } from '../app_version_plat_version/AppVersionPlatVersionApi';
import { ProjectApi } from '../project/ProjectApi';
import { RunApi } from '../run/RunApi';
import { LabelAssignedApi } from '../label_assigned/LabelAssignedApi';
import { RunResultStepApi } from '../run_result_step/RunResultStepApi';
import { AttachmentApi } from '../attachment/AttachmentApi';
import { CommentApi } from '../comment/CommentApi';
import { DefectApi } from '../defect/DefectApi';

export interface RunResultApi extends RunResult {
  status?: StatusApi;
  test?: TestApi;
  suite?: SuiteApi;
  app_version_plat_version?: AppVersionPlatVersionApi;
  project?: ProjectApi;
  run?: RunApi;
  label_assigned?: LabelAssignedApi;
  run_result_step?: RunResultStepApi[];
  attachment?: AttachmentApi;
  comment?: CommentApi;
  defect?: DefectApi;
}
