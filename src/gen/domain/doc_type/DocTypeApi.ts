/**
 * Copyright (C) 2021 BitModern, Inc - All Rights Reserved
 */
/* eslint-disable import/no-cycle */
/* eslint-disable @typescript-eslint/no-empty-interface */

import type { DocType } from './DocType';
import type { DocTemplateApi } from '../doc_template/DocTemplateApi';

export interface DocTypeApi extends DocType {
  doc_template?: DocTemplateApi[];
}
