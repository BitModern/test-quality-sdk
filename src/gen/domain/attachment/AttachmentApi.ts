/**
 * Copyright (C) 2021 BitModern, Inc - All Rights Reserved
 */
/* eslint-disable import/no-cycle */
/* eslint-disable @typescript-eslint/no-empty-interface */

import type { Attachment } from './Attachment';
import type { PlanApi } from '../plan/PlanApi';
import type { ProjectApi } from '../project/ProjectApi';
import type { InvoiceApi } from '../invoice/InvoiceApi';
import type { RequirementApi } from '../requirement/RequirementApi';
import type { DefectApi } from '../defect/DefectApi';
import type { TestApi } from '../test/TestApi';
import type { RunResultApi } from '../run_result/RunResultApi';
import type { RunResultStepApi } from '../run_result_step/RunResultStepApi';

export interface AttachmentApi extends Attachment {
  plan?: PlanApi;
  project?: ProjectApi;
  invoice?: InvoiceApi;
  requirement?: RequirementApi;
  defect?: DefectApi;
  test?: TestApi;
  run_result?: RunResultApi;
  run_result_step?: RunResultStepApi;
}
