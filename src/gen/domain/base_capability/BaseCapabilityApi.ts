/**
 * Copyright (C) 2021 BitModern, Inc - All Rights Reserved
 */

/* eslint-disable import/no-cycle */
/* eslint-disable @typescript-eslint/no-empty-interface */

import { BaseCapability } from './BaseCapability';
import { BaseCapabilityBaseIntegrationApi } from '../base_capability_base_integration/BaseCapabilityBaseIntegrationApi';
import { BaseIntegrationApi } from '../base_integration/BaseIntegrationApi';

export interface BaseCapabilityApi extends BaseCapability {
  base_integration?: BaseIntegrationApi[];
  base_integration_id?: number; // This field is required during create
  pivot?: BaseCapabilityBaseIntegrationApi;
}
