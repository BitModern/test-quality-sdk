/**
 * Copyright (C) 2021 BitModern, Inc - All Rights Reserved
 */
/* eslint-disable import/no-cycle */
/* eslint-disable @typescript-eslint/no-empty-interface */

import type { EnvironmentResource } from './EnvironmentResource';
import type { EnvironmentApi } from '../environment/EnvironmentApi';
import type { ResourceApi } from '../resource/ResourceApi';
import type { ResourceValueApi } from '../resource_value/ResourceValueApi';

export interface EnvironmentResourceApi extends EnvironmentResource {
  environment?: EnvironmentApi;
  resource?: ResourceApi;
  resource_value?: ResourceValueApi;
}
