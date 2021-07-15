/**
 * Copyright (C) 2021 BitModern, Inc - All Rights Reserved
 */

/* eslint-disable import/no-cycle */
/* eslint-disable @typescript-eslint/no-empty-interface */

import { TestQualityType } from './TestQualityType';
import { LabelAssignedApi } from '../label_assigned/LabelAssignedApi';
import { TestQualityApi } from '../test_quality/TestQualityApi';

export interface TestQualityTypeApi extends TestQualityType {
  label_assigned?: LabelAssignedApi;
  test_quality?: TestQualityApi[];
}
