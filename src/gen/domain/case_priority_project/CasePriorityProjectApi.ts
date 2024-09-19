/**
 * Copyright (C) 2021 BitModern, Inc - All Rights Reserved
 */
/* eslint-disable import/no-cycle */
/* eslint-disable @typescript-eslint/no-empty-interface */

import type { CasePriorityProject } from './CasePriorityProject';
import type { ProjectApi } from '../project/ProjectApi';
import type { CasePriorityApi } from '../case_priority/CasePriorityApi';

export interface CasePriorityProjectApi extends CasePriorityProject {
  project?: ProjectApi;
  case_priority?: CasePriorityApi;
}
