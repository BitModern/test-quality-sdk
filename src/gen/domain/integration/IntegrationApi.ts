/**
 * Copyright (C) 2021 BitModern, Inc - All Rights Reserved
 */

/* eslint-disable import/no-cycle */
/* eslint-disable @typescript-eslint/no-empty-interface */

import { Integration } from './Integration';
import { BaseIntegrationApi } from '../base_integration/BaseIntegrationApi';
import { IntegrationProjectApi } from '../integration_project/IntegrationProjectApi';
import { ProjectApi } from '../project/ProjectApi';
import { IntegrationUserApi } from '../integration_user/IntegrationUserApi';
import { UserApi } from '../user/UserApi';
import { CapabilityIntegrationApi } from '../capability_integration/CapabilityIntegrationApi';
import { CapabilityApi } from '../capability/CapabilityApi';
import { AppInstallApi } from '../app_install/AppInstallApi';

export interface IntegrationApi extends Integration {
  base_integration?: BaseIntegrationApi;
  project?: ProjectApi[];
  user?: UserApi[];
  user_id?: number;
  capability?: CapabilityApi[];
  capability_id?: number;
  app_install?: AppInstallApi[];
  pivot?: IntegrationProjectApi | IntegrationUserApi | CapabilityIntegrationApi;
  integration_project?: Partial<IntegrationProjectApi>;
  integration_user?: Partial<IntegrationUserApi>;
  capability_integration?: Partial<CapabilityIntegrationApi>;
}
