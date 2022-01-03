/**
 * Copyright (C) 2021 BitModern, Inc - All Rights Reserved
 */

/* eslint-disable import/no-cycle */
/* eslint-disable @typescript-eslint/no-empty-interface */

import { Plat } from './Plat';
import { LabelAssignedApi } from '../label_assigned/LabelAssignedApi';

export interface PlatApi extends Plat {
  label_assigned?: LabelAssignedApi;
}
