/**
 * Copyright (C) 2021 BitModern, Inc - All Rights Reserved
 */
/* eslint-disable import/no-cycle */
/* eslint-disable @typescript-eslint/no-empty-interface */

import type { CaseTypeProject } from './CaseTypeProject';
import type { ProjectApi } from '../project/ProjectApi';
import type { CaseTypeApi } from '../case_type/CaseTypeApi';

export interface CaseTypeProjectApi extends CaseTypeProject {
  project?: ProjectApi;
  case_type?: CaseTypeApi;
}
