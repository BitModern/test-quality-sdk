/**
 * Copyright (C) 2021 BitModern, Inc - All Rights Reserved
 */

/* eslint-disable import/no-cycle */
/* eslint-disable @typescript-eslint/no-empty-interface */

import { CaseType } from './CaseType';
import { LabelAssignedApi } from '../label_assigned/LabelAssignedApi';
import { TestApi } from '../test/TestApi';

export interface CaseTypeApi extends CaseType {
  label_assigned?: LabelAssignedApi;
  test?: TestApi[];
}
