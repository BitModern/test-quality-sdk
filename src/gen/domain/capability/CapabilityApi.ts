/**
 * Copyright (C) 2021 BitModern, Inc - All Rights Reserved
 */

/* eslint-disable import/no-cycle */
/* eslint-disable @typescript-eslint/no-empty-interface */

import { Capability } from './Capability';
import { BaseCapabilityApi } from '../base_capability/BaseCapabilityApi';
import { CapabilityIntegrationApi } from '../capability_integration/CapabilityIntegrationApi';
import { IntegrationApi } from '../integration/IntegrationApi';

export interface CapabilityApi extends Capability {
  base_capability?: BaseCapabilityApi;
  integration?: IntegrationApi[];
  pivot?: CapabilityIntegrationApi;
}
