/**
 * Copyright (C) 2021 BitModern, Inc - All Rights Reserved
 */
/* eslint-disable import/no-cycle */
/* eslint-disable @typescript-eslint/no-empty-interface */

import type { ComponentDoc } from './ComponentDoc';
import type { DocApi } from '../doc/DocApi';
import type { ComponentApi } from '../component/ComponentApi';
import type { ProjectApi } from '../project/ProjectApi';

export interface ComponentDocApi extends ComponentDoc {
  doc?: DocApi;
  component?: ComponentApi;
  project?: ProjectApi;
}
