/**
 * Copyright (C) 2021 BitModern, Inc - All Rights Reserved
 */
/* eslint-disable import/no-cycle */
/* eslint-disable @typescript-eslint/no-empty-interface */

import type { BaseIntegration } from './BaseIntegration';
import type { IntegrationApi } from '../integration/IntegrationApi';
import type { BaseCapabilityBaseIntegrationApi } from '../base_capability_base_integration/BaseCapabilityBaseIntegrationApi';
import type { BaseCapabilityApi } from '../base_capability/BaseCapabilityApi';
import type { AppConfigApi } from '../app_config/AppConfigApi';

export interface BaseIntegrationApi extends BaseIntegration {
  integration?: IntegrationApi[];
  base_capability?: BaseCapabilityApi[];
  app_config?: AppConfigApi[];
  pivot?: BaseCapabilityBaseIntegrationApi;
  base_capability_base_integration?: Partial<BaseCapabilityBaseIntegrationApi>;
}
