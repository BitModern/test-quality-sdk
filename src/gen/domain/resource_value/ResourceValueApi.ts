/**
 * Copyright (C) 2021 BitModern, Inc - All Rights Reserved
 */
/* eslint-disable import/no-cycle */
/* eslint-disable @typescript-eslint/no-empty-interface */

import type { ResourceValue } from './ResourceValue';
import type { ResourceApi } from '../resource/ResourceApi';
import type { EnvironmentResourceApi } from '../environment_resource/EnvironmentResourceApi';

export interface ResourceValueApi extends ResourceValue {
  resource?: ResourceApi;
  environment_resource?: EnvironmentResourceApi[];
}
