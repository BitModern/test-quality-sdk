/**
 * Copyright (C) 2021 BitModern, Inc - All Rights Reserved
 */
/* eslint-disable import/no-cycle */
/* eslint-disable @typescript-eslint/no-empty-interface */

import type { Filter } from './Filter';
import type { ProjectApi } from '../project/ProjectApi';

export interface FilterApi extends Filter {
  project?: ProjectApi;
}
