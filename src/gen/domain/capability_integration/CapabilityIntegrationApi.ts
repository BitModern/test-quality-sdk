/**
 * Copyright (C) 2021 BitModern, Inc - All Rights Reserved
 */
/* eslint-disable import/no-cycle */
/* eslint-disable @typescript-eslint/no-empty-interface */

import { CapabilityIntegration } from './CapabilityIntegration';
import { CapabilityApi } from '../capability/CapabilityApi';
import { IntegrationApi } from '../integration/IntegrationApi';
import { IntegrationTemplateApi } from '../integration_template/IntegrationTemplateApi';

export interface CapabilityIntegrationApi extends CapabilityIntegration {
  capability?: CapabilityApi;
  integration?: IntegrationApi;
  integration_template?: IntegrationTemplateApi[];
}
