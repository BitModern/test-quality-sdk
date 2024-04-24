/**
 * Copyright (C) 2021 BitModern, Inc - All Rights Reserved
 */
/* eslint-disable import/no-cycle */
/* eslint-disable @typescript-eslint/no-empty-interface */

import type { BaseCapabilityBaseIntegration } from './BaseCapabilityBaseIntegration';
import type { BaseIntegrationApi } from '../base_integration/BaseIntegrationApi';
import type { BaseCapabilityApi } from '../base_capability/BaseCapabilityApi';

export interface BaseCapabilityBaseIntegrationApi
  extends BaseCapabilityBaseIntegration {
  base_integration?: BaseIntegrationApi;
  base_capability?: BaseCapabilityApi;
}
