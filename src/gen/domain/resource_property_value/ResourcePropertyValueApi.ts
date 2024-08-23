/**
 * Copyright (C) 2021 BitModern, Inc - All Rights Reserved
 */
/* eslint-disable import/no-cycle */
/* eslint-disable @typescript-eslint/no-empty-interface */

import type { ResourcePropertyValue } from './ResourcePropertyValue';
import type { ResourceValueApi } from '../resource_value/ResourceValueApi';
import type { ResourcePropertyApi } from '../resource_property/ResourcePropertyApi';
import type { EnvironmentResourceApi } from '../environment_resource/EnvironmentResourceApi';

export interface ResourcePropertyValueApi extends ResourcePropertyValue {
  resource_value?: ResourceValueApi;
  resource_property?: ResourcePropertyApi;
  environment_resource?: EnvironmentResourceApi[];
}
