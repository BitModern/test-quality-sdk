/**
 * Copyright (C) 2021 BitModern, Inc - All Rights Reserved
 */
/* eslint-disable import/no-cycle */
/* eslint-disable @typescript-eslint/no-empty-interface */

import type { Doc } from './Doc';
import type { DocTemplateApi } from '../doc_template/DocTemplateApi';
import type { TestPlanApi } from '../test_plan/TestPlanApi';
import type { ComponentDocApi } from '../component_doc/ComponentDocApi';

export interface DocApi extends Doc {
  doc_template?: DocTemplateApi;
  test_plan?: TestPlanApi[];
  component_doc?: ComponentDocApi[];
}
