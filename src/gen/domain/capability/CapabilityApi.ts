/**
 * Copyright (C) 2021 BitModern, Inc - All Rights Reserved
 */
/* eslint-disable import/no-cycle */
/* eslint-disable @typescript-eslint/no-empty-interface */

import type { Capability } from './Capability';
import type { BaseCapabilityApi } from '../base_capability/BaseCapabilityApi';
import type { CapabilityIntegrationApi } from '../capability_integration/CapabilityIntegrationApi';
import type { IntegrationApi } from '../integration/IntegrationApi';

export interface CapabilityApi extends Capability {
  base_capability?: BaseCapabilityApi;
  integration?: IntegrationApi[];
  pivot?: CapabilityIntegrationApi;
  capability_integration?: Partial<CapabilityIntegrationApi>;
}
