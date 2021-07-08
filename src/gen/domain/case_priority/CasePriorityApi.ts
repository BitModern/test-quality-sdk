/**
 * Copyright (C) 2021 BitModern, Inc - All Rights Reserved
 */

/* eslint-disable import/no-cycle */
/* eslint-disable @typescript-eslint/no-empty-interface */

import { CasePriority } from './CasePriority';
import { LabelAssignedApi } from '../label_assigned/LabelAssignedApi';
import { TestApi } from '../test/TestApi';

export interface CasePriorityApi extends CasePriority {
  label_assigned?: LabelAssignedApi;
  test?: TestApi[];
}
