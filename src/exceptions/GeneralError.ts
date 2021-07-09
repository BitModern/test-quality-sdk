/**
 * Copyright (C) 2020 BitModern, Inc - All Rights Reserved
 */
import { HttpError } from './HttpError';

export const VERIFICATION = '1001';
export const AUTH = '1002';

export class GeneralError extends HttpError {
  constructor(message: string, code: string) {
    super(message);
    this.code = code;
  }
}
