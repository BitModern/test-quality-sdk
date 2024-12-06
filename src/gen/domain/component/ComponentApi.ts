/**
 * Copyright (C) 2021 BitModern, Inc - All Rights Reserved
 */
/* eslint-disable import/no-cycle */
/* eslint-disable @typescript-eslint/no-empty-interface */

import type { Component } from './Component';
import type { ComponentDocTypeApi } from '../component_doc_type/ComponentDocTypeApi';
import type { ComponentDocTemplateApi } from '../component_doc_template/ComponentDocTemplateApi';
import type { ComponentDocApi } from '../component_doc/ComponentDocApi';

export interface ComponentApi extends Component {
  component_doc_type?: ComponentDocTypeApi[];
  component_doc_template?: ComponentDocTemplateApi[];
  component_doc?: ComponentDocApi[];
}
