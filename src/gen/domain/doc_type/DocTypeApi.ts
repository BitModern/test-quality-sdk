/**
 * Copyright (C) 2021 BitModern, Inc - All Rights Reserved
 */
/* eslint-disable import/no-cycle */
/* eslint-disable @typescript-eslint/no-empty-interface */

import type { DocType } from './DocType';
import type { DocTemplateApi } from '../doc_template/DocTemplateApi';
import type { DocApi } from '../doc/DocApi';

export interface DocTypeApi extends DocType {
  doc_template?: DocTemplateApi[];
  doc?: DocApi[];
}
