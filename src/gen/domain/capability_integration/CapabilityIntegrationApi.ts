/**
 * Copyright (C) 2021 BitModern, Inc - All Rights Reserved
 */
/* eslint-disable import/no-cycle */
/* eslint-disable @typescript-eslint/no-empty-interface */

import type { CapabilityIntegration } from './CapabilityIntegration';
import type { CapabilityApi } from '../capability/CapabilityApi';
import type { IntegrationApi } from '../integration/IntegrationApi';
import type { IntegrationTemplateApi } from '../integration_template/IntegrationTemplateApi';

export interface CapabilityIntegrationApi extends CapabilityIntegration {
  capability?: CapabilityApi;
  integration?: IntegrationApi;
  integration_template?: IntegrationTemplateApi[];
}
