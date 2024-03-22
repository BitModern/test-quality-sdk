/**
 * Copyright (C) 2021 BitModern, Inc - All Rights Reserved
 */
/* eslint-disable import/no-cycle */
/* eslint-disable @typescript-eslint/no-empty-interface */

import { Attachment } from './Attachment';
import { PlanApi } from '../plan/PlanApi';
import { ProjectApi } from '../project/ProjectApi';
import { InvoiceApi } from '../invoice/InvoiceApi';
import { RequirementApi } from '../requirement/RequirementApi';
import { DefectApi } from '../defect/DefectApi';
import { TestApi } from '../test/TestApi';
import { RunResultApi } from '../run_result/RunResultApi';
import { RunResultStepApi } from '../run_result_step/RunResultStepApi';

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
