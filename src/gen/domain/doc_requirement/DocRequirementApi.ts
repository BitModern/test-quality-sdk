/**
 * Copyright (C) 2021 BitModern, Inc - All Rights Reserved
 */
/* eslint-disable import/no-cycle */
/* eslint-disable @typescript-eslint/no-empty-interface */

import type { DocRequirement } from './DocRequirement';
import type { DocApi } from '../doc/DocApi';
import type { RequirementApi } from '../requirement/RequirementApi';

export interface DocRequirementApi extends DocRequirement {
  doc?: DocApi;
  requirement?: RequirementApi;
}
