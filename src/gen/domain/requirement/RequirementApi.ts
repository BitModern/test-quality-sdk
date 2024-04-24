/**
 * Copyright (C) 2021 BitModern, Inc - All Rights Reserved
 */
/* eslint-disable import/no-cycle */
/* eslint-disable @typescript-eslint/no-empty-interface */

import { Requirement } from './Requirement';
import { ProjectApi } from '../project/ProjectApi';
import { DefectStatusApi } from '../defect_status/DefectStatusApi';
import { DefectResApi } from '../defect_res/DefectResApi';
import { RequirementTestApi } from '../requirement_test/RequirementTestApi';
import { AttachmentApi } from '../attachment/AttachmentApi';
import { PullRequestRequirementApi } from '../pull_request_requirement/PullRequestRequirementApi';
import { PullRequestApi } from '../pull_request/PullRequestApi';

export interface RequirementApi extends Requirement {
  project?: ProjectApi;
  defect_status?: DefectStatusApi;
  defect_res?: DefectResApi;
  requirement_test?: RequirementTestApi[];
  attachment?: AttachmentApi;
  pull_request?: PullRequestApi[];
  pivot?: PullRequestRequirementApi;
  pull_request_requirement?: Partial<PullRequestRequirementApi>;
}
