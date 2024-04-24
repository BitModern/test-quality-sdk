/**
 * Copyright (C) 2021 BitModern, Inc - All Rights Reserved
 */
/* eslint-disable import/no-cycle */
/* eslint-disable @typescript-eslint/no-empty-interface */

import type { Requirement } from './Requirement';
import type { ProjectApi } from '../project/ProjectApi';
import type { DefectStatusApi } from '../defect_status/DefectStatusApi';
import type { DefectResApi } from '../defect_res/DefectResApi';
import type { RequirementTestApi } from '../requirement_test/RequirementTestApi';
import type { AttachmentApi } from '../attachment/AttachmentApi';
import type { PullRequestRequirementApi } from '../pull_request_requirement/PullRequestRequirementApi';

export interface RequirementApi extends Requirement {
  project?: ProjectApi;
  defect_status?: DefectStatusApi;
  defect_res?: DefectResApi;
  requirement_test?: RequirementTestApi[];
  attachment?: AttachmentApi;
  pull_request_requirement?: PullRequestRequirementApi[];
}
