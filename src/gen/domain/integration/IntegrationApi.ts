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

export interface IntegrationApi extends Integration {
  base_integration?: BaseIntegrationApi;
  user?: UserApi[];
  user_id?: number;
  capability?: CapabilityApi[];
  capability_id?: number;
  project?: ProjectApi[];
  pivot?: IntegrationUserApi | CapabilityIntegrationApi | IntegrationProjectApi;
}
