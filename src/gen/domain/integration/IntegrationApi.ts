/**
 * Copyright (C) 2021 BitModern, Inc - All Rights Reserved
 */

/* eslint-disable import/no-cycle */
/* eslint-disable @typescript-eslint/no-empty-interface */

import { Integration } from './Integration';
import { BaseIntegrationApi } from '../base_integration/BaseIntegrationApi';
import { IntegrationUserApi } from '../integration_user/IntegrationUserApi';
import { UserApi } from '../user/UserApi';
import { CapabilityIntegrationApi } from '../capability_integration/CapabilityIntegrationApi';
import { CapabilityApi } from '../capability/CapabilityApi';
import { IntegrationProjectApi } from '../integration_project/IntegrationProjectApi';
import { ProjectApi } from '../project/ProjectApi';
import { AppInstallApi } from '../app_install/AppInstallApi';

export interface IntegrationApi extends Integration {
  base_integration?: BaseIntegrationApi;
  user?: UserApi[];
  user_id?: number;
  capability?: CapabilityApi[];
  capability_id?: number;
  project?: ProjectApi[];
  app_install?: AppInstallApi[];
  pivot?: IntegrationUserApi | CapabilityIntegrationApi | IntegrationProjectApi;
  integration_user?: Partial<IntegrationUserApi>;
  capability_integration?: Partial<CapabilityIntegrationApi>;
  integration_project?: Partial<IntegrationProjectApi>;
}
