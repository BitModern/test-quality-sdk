/**
 * Copyright (C) 2021 BitModern, Inc - All Rights Reserved
 */
/* eslint-disable import/no-cycle */
/* eslint-disable @typescript-eslint/no-empty-interface */

import type { DocTemplate } from './DocTemplate';
import type { DocTypeApi } from '../doc_type/DocTypeApi';
import type { ComponentDocTemplateApi } from '../component_doc_template/ComponentDocTemplateApi';
import type { DocApi } from '../doc/DocApi';

export interface DocTemplateApi extends DocTemplate {
  doc_type?: DocTypeApi;
  component_doc_template?: ComponentDocTemplateApi[];
  doc?: DocApi[];
}
