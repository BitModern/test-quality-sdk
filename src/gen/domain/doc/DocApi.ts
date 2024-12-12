/**
 * Copyright (C) 2021 BitModern, Inc - All Rights Reserved
 */
/* eslint-disable import/no-cycle */
/* eslint-disable @typescript-eslint/no-empty-interface */

import type { Doc } from './Doc';
import type { DocTemplateApi } from '../doc_template/DocTemplateApi';
import type { DocTypeApi } from '../doc_type/DocTypeApi';
import type { ProjectApi } from '../project/ProjectApi';
import type { TestPlanApi } from '../test_plan/TestPlanApi';
import type { ComponentDocApi } from '../component_doc/ComponentDocApi';
import type { AttachmentApi } from '../attachment/AttachmentApi';

export interface DocApi extends Doc {
  doc_template?: DocTemplateApi;
  doc_type?: DocTypeApi;
  project?: ProjectApi;
  test_plan?: TestPlanApi[];
  component_doc?: ComponentDocApi[];
  attachment?: AttachmentApi;
}
