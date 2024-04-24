/**
 * Copyright (C) 2021 BitModern, Inc - All Rights Reserved
 */
/* eslint-disable import/no-cycle */
/* eslint-disable @typescript-eslint/no-empty-interface */

import type { Plat } from './Plat';
import type { LabelAssignedApi } from '../label_assigned/LabelAssignedApi';
import type { PlatVersionApi } from '../plat_version/PlatVersionApi';

export interface PlatApi extends Plat {
  label_assigned?: LabelAssignedApi;
  plat_version?: PlatVersionApi[];
}
