/**
 * Copyright (C) 2021 BitModern, Inc - All Rights Reserved
 */
/* eslint-disable import/no-cycle */
/* eslint-disable @typescript-eslint/no-empty-interface */

import { TestQuality } from './TestQuality';
import { TestQualityTypeApi } from '../test_quality_type/TestQualityTypeApi';
import { LabelAssignedApi } from '../label_assigned/LabelAssignedApi';
import { TestApi } from '../test/TestApi';

export interface TestQualityApi extends TestQuality {
  test_quality_type?: TestQualityTypeApi;
  label_assigned?: LabelAssignedApi;
  test?: TestApi[];
}
