/**
 * Copyright (C) 2021 BitModern, Inc - All Rights Reserved
 */
/* eslint-disable import/no-cycle */
/* eslint-disable @typescript-eslint/no-empty-interface */

import type { BaseCapability } from './BaseCapability';
import type { CapabilityApi } from '../capability/CapabilityApi';
import type { BaseCapabilityBaseIntegrationApi } from '../base_capability_base_integration/BaseCapabilityBaseIntegrationApi';
import type { BaseIntegrationApi } from '../base_integration/BaseIntegrationApi';

export interface BaseCapabilityApi extends BaseCapability {
  capability?: CapabilityApi[];
  base_integration?: BaseIntegrationApi[];
  base_integration_id?: number; // This field is required during create
  pivot?: BaseCapabilityBaseIntegrationApi;
  base_capability_base_integration?: Partial<BaseCapabilityBaseIntegrationApi>;
}
