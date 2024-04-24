/**
 * Copyright (C) 2021 BitModern, Inc - All Rights Reserved
 */
/* eslint-disable import/no-cycle */
/* eslint-disable @typescript-eslint/no-empty-interface */

import type { Integration } from './Integration';
import type { BaseIntegrationApi } from '../base_integration/BaseIntegrationApi';
import type { IntegrationUserApi } from '../integration_user/IntegrationUserApi';
import type { UserApi } from '../user/UserApi';
import type { CapabilityIntegrationApi } from '../capability_integration/CapabilityIntegrationApi';
import type { CapabilityApi } from '../capability/CapabilityApi';
import type { IntegrationProjectApi } from '../integration_project/IntegrationProjectApi';
import type { ProjectApi } from '../project/ProjectApi';

export interface IntegrationApi extends Integration {
  base_integration?: BaseIntegrationApi;
  user?: UserApi[];
  user_id?: number;
  capability?: CapabilityApi[];
  capability_id?: number;
  project?: ProjectApi[];
  pivot?: IntegrationUserApi | CapabilityIntegrationApi | IntegrationProjectApi;
  integration_user?: Partial<IntegrationUserApi>;
  capability_integration?: Partial<CapabilityIntegrationApi>;
  integration_project?: Partial<IntegrationProjectApi>;
}
