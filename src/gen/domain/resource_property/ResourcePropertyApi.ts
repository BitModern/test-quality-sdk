/**
 * Copyright (C) 2021 BitModern, Inc - All Rights Reserved
 */
/* eslint-disable import/no-cycle */
/* eslint-disable @typescript-eslint/no-empty-interface */

import type { ResourceProperty } from './ResourceProperty';
import type { ResourceApi } from '../resource/ResourceApi';
import type { ResourcePropertyValueApi } from '../resource_property_value/ResourcePropertyValueApi';
import type { EnvironmentResourceApi } from '../environment_resource/EnvironmentResourceApi';

export interface ResourcePropertyApi extends ResourceProperty {
  resource?: ResourceApi;
  resource_property_value?: ResourcePropertyValueApi[];
  environment_resource?: EnvironmentResourceApi[];
}
