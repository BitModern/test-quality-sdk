/**
 * Copyright (C) 2021 BitModern, Inc - All Rights Reserved
 */

/* eslint-disable import/no-cycle */
/* eslint-disable @typescript-eslint/no-empty-interface */

import { BaseIntegration } from './BaseIntegration';
import { IntegrationApi } from '../integration/IntegrationApi';
import { BaseCapabilityBaseIntegrationApi } from '../base_capability_base_integration/BaseCapabilityBaseIntegrationApi';
import { BaseCapabilityApi } from '../base_capability/BaseCapabilityApi';

export interface BaseIntegrationApi extends BaseIntegration {
  integration?: IntegrationApi[];
  base_capability?: BaseCapabilityApi[];
  pivot?: BaseCapabilityBaseIntegrationApi;
  base_capability_base_integration?: Partial<BaseCapabilityBaseIntegrationApi>;
}
