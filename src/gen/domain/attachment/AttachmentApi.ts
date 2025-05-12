/**
 * Copyright (C) 2021 BitModern, Inc - All Rights Reserved
 */
/* eslint-disable import/no-cycle */
/* eslint-disable @typescript-eslint/no-empty-interface */

import type { Attachment } from './Attachment';
import type { DocApi } from '../doc/DocApi';
import type { UserApi } from '../user/UserApi';
import type { TestApi } from '../test/TestApi';
import type { RunResultApi } from '../run_result/RunResultApi';
import type { RunResultStepApi } from '../run_result_step/RunResultStepApi';
import type { PlanApi } from '../plan/PlanApi';
import type { InvoiceApi } from '../invoice/InvoiceApi';
import type { ProjectApi } from '../project/ProjectApi';
import type { RequirementApi } from '../requirement/RequirementApi';
import type { DefectApi } from '../defect/DefectApi';

export interface AttachmentApi extends Attachment {
  doc?: DocApi;
  user?: UserApi;
  test?: TestApi;
  run_result?: RunResultApi;
  run_result_step?: RunResultStepApi;
  plan?: PlanApi;
  invoice?: InvoiceApi;
  project?: ProjectApi;
  requirement?: RequirementApi;
  defect?: DefectApi;
}
