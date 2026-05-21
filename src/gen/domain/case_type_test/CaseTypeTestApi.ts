/**
 * Copyright (C) 2021 BitModern, Inc - All Rights Reserved
 */
/* eslint-disable import/no-cycle */
/* eslint-disable @typescript-eslint/no-empty-interface */

import type { CaseTypeTest } from './CaseTypeTest';
import type { CaseTypeApi } from '../case_type/CaseTypeApi';
import type { TestApi } from '../test/TestApi';

export interface CaseTypeTestApi extends CaseTypeTest {
  case_type?: CaseTypeApi;
  test?: TestApi;
}
