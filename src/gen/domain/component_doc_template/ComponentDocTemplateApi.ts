/**
 * Copyright (C) 2021 BitModern, Inc - All Rights Reserved
 */
/* eslint-disable import/no-cycle */
/* eslint-disable @typescript-eslint/no-empty-interface */

import type { ComponentDocTemplate } from './ComponentDocTemplate';
import type { DocTemplateApi } from '../doc_template/DocTemplateApi';
import type { ComponentApi } from '../component/ComponentApi';

export interface ComponentDocTemplateApi extends ComponentDocTemplate {
  doc_template?: DocTemplateApi;
  component?: ComponentApi;
}
