/**
 * Copyright (C) 2021 BitModern, Inc - All Rights Reserved
 */
/* eslint-disable import/no-cycle */
/* eslint-disable @typescript-eslint/no-empty-interface */

import { Attachment } from './Attachment';
import { PlanApi } from '../plan/PlanApi';
import { TestApi } from '../test/TestApi';
import { RunResultApi } from '../run_result/RunResultApi';
import { RunResultStepApi } from '../run_result_step/RunResultStepApi';
import { InvoiceApi } from '../invoice/InvoiceApi';
import { ProjectApi } from '../project/ProjectApi';
import { RequirementApi } from '../requirement/RequirementApi';
import { DefectApi } from '../defect/DefectApi';

export interface AttachmentApi extends Attachment {
  plan?: PlanApi;
  test?: TestApi;
  run_result?: RunResultApi;
  run_result_step?: RunResultStepApi;
  invoice?: InvoiceApi;
  project?: ProjectApi;
  requirement?: RequirementApi;
  defect?: DefectApi;
}
