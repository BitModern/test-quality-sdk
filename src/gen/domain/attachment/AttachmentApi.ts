/**
 * Copyright (C) 2021 BitModern, Inc - All Rights Reserved
 */
/* eslint-disable import/no-cycle */
/* eslint-disable @typescript-eslint/no-empty-interface */

import type { Attachment } from './Attachment';
import type { DefectApi } from '../defect/DefectApi';
import type { InvoiceApi } from '../invoice/InvoiceApi';
import type { DocApi } from '../doc/DocApi';
import type { ProjectApi } from '../project/ProjectApi';
import type { UserApi } from '../user/UserApi';
import type { RunApi } from '../run/RunApi';
import type { TestApi } from '../test/TestApi';
import type { RunResultApi } from '../run_result/RunResultApi';
import type { RunResultStepApi } from '../run_result_step/RunResultStepApi';
import type { PlanApi } from '../plan/PlanApi';
import type { RequirementApi } from '../requirement/RequirementApi';

export interface AttachmentApi extends Attachment {
  defect?: DefectApi;
  invoice?: InvoiceApi;
  doc?: DocApi;
  project?: ProjectApi;
  user?: UserApi;
  run?: RunApi;
  test?: TestApi;
  run_result?: RunResultApi;
  run_result_step?: RunResultStepApi;
  plan?: PlanApi;
  requirement?: RequirementApi;
}
