/**
 * Copyright (C) 2021 BitModern, Inc - All Rights Reserved
 */
/* eslint-disable import/no-cycle */
/* eslint-disable @typescript-eslint/no-empty-interface */

import type { ProjectPurpose } from './ProjectPurpose';
import type { ProjectApi } from '../project/ProjectApi';
import type { PurposeApi } from '../purpose/PurposeApi';

export interface ProjectPurposeApi extends ProjectPurpose {
  project?: ProjectApi;
  purpose?: PurposeApi;
}
