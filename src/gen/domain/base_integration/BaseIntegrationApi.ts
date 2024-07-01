/**
 * Copyright (C) 2021 BitModern, Inc - All Rights Reserved
 */
/* eslint-disable import/no-cycle */
/* eslint-disable @typescript-eslint/no-empty-interface */

import type { BaseIntegration } from './BaseIntegration';
import type { AppConfigApi } from '../app_config/AppConfigApi';
import type { IntegrationApi } from '../integration/IntegrationApi';
import type { BaseCapabilityBaseIntegrationApi } from '../base_capability_base_integration/BaseCapabilityBaseIntegrationApi';
import type { BaseCapabilityApi } from '../base_capability/BaseCapabilityApi';

export interface BaseIntegrationApi extends BaseIntegration {
  app_config?: AppConfigApi[];
  integration?: IntegrationApi[];
  base_capability?: BaseCapabilityApi[];
  pivot?: BaseCapabilityBaseIntegrationApi;
  base_capability_base_integration?: Partial<BaseCapabilityBaseIntegrationApi>;
}
