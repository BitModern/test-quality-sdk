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
import { TestApi } from '../test/TestApi';

export interface RequirementApi extends Requirement {
  project?: ProjectApi;
  defect_status?: DefectStatusApi;
  defect_res?: DefectResApi;
  test?: TestApi[];
  pivot?: RequirementTestApi;
}
