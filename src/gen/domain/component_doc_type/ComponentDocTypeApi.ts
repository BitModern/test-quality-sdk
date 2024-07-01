/**
 * Copyright (C) 2021 BitModern, Inc - All Rights Reserved
 */
/* eslint-disable import/no-cycle */
/* eslint-disable @typescript-eslint/no-empty-interface */

import type { ComponentDocType } from './ComponentDocType';
import type { DocTypeApi } from '../doc_type/DocTypeApi';
import type { ComponentApi } from '../component/ComponentApi';

export interface ComponentDocTypeApi extends ComponentDocType {
  doc_type?: DocTypeApi;
  component?: ComponentApi;
}
