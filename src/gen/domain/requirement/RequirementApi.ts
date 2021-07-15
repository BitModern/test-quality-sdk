/**
 * Copyright (C) 2021 BitModern, Inc - All Rights Reserved
 */

/* eslint-disable import/no-cycle */
/* eslint-disable @typescript-eslint/no-empty-interface */

import { Requirement } from './Requirement';
import { TestApi } from '../test/TestApi';
import { ProjectApi } from '../project/ProjectApi';

export interface RequirementApi extends Requirement {
  test?: TestApi;
  project?: ProjectApi;
}
