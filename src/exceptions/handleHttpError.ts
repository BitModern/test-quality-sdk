import { type AxiosResponse } from 'axios';
import { HttpError } from './HttpError';
import { _client } from '../ClientSdk';

export const UNKNOWN_ERROR = 'UNKNOWN_ERROR';
export const NO_REFRESH_TOKEN = 'NO_REFRESH_TOKEN';
export const UNAUTHORIZED = 'UNAUTHORIZED';
export const VALIDATION_ERROR = 'VALIDATION_ERROR';
export const EMAIL_VERIFICATION_ERROR = 'EMAIL_VERIFICATION_ERROR';
export const EXPIRED_USER_EXCEPTION = 'EXPIRED_USER_EXCEPTION';
export const CHANGE_PASSWORD_FAILURE_EXCEPTION =
  'CHANGE_PASSWORD_FAILURE_EXCEPTION';
export const CLIENT_ID_INMUTABLE_EXCEPTION = 'CLIENT_ID_INMUTABLE_EXCEPTION';
export const CREATED_BY_INMUTABLE_EXCEPTION = 'CREATED_BY_INMUTABLE_EXCEPTION';
export const GITHUB_PURCHASE_ALREADY_ALLOCATED_EXCEPTION =
  'GITHUB_PURCHASE_ALREADY_ALLOCATED_EXCEPTION';
export const INTEGRATION_AUTH_EXCEPTION = 'INTEGRATION_AUTH_EXCEPTION';
export const INTEGRATION_EXCEPTION = 'INTEGRATION_EXCEPTION';
export const INTEGRATION_JIRA_EXCEPTION = 'INTEGRATION_JIRA_EXCEPTION';
export const INVALID_TOKEN_EXCEPTION = 'INVALID_TOKEN_EXCEPTION';
export const MAIL_CHIMP_EXCEPTION = 'MAIL_CHIMP_EXCEPTION';
export const NO_TOKEN_EXCEPTION = 'NO_TOKEN_EXCEPTION';
export const PASSWORD_STRENGTH_EXCEPTION = 'PASSWORD_STRENGTH_EXCEPTION';
export const PRIMARY_KEY_VIOLATION_EXCEPTION =
  'PRIMARY_KEY_VIOLATION_EXCEPTION';
export const RESOURCE_STORE_FAILED_EXCEPTION =
  'RESOURCE_STORE_FAILED_EXCEPTION';
export const RUN_CREATE_EXCEPTION = 'RUN_CREATE_EXCEPTION';
export const UPDATE_EXCEPTION = 'UPDATE_EXCEPTION';
export const USER_CREATE_EXCEPTION = 'USER_CREATE_EXCEPTION';
export const USER_NOT_AUTHORIZED_EXCEPTION = 'USER_NOT_AUTHORIZED_EXCEPTION';
export const USER_NOT_FOUND_EXCEPTION = 'USER_NOT_FOUND_EXCEPTION';
export const VALIDATION_FAILED_EXCEPTION = 'VALIDATION_FAILED_EXCEPTION';

export function getHttpResponse(response: AxiosResponse): HttpError {
  if (response === undefined || response.status === -1) {
    if (response === undefined || response.data === null) {
      return new HttpError(
        'Oops, Could not obtain data from server due to network problem.',
        UNKNOWN_ERROR,
        'Network Error',
        500,
        undefined,
        response?.config?.url,
      );
    }
  } else if (response.status === 400 && response.data?.validation_errors) {
    return new HttpError(
      getMessage(response),
      VALIDATION_ERROR,
      response.data.validation_errors,
      response.status,
      response.data.code,
      response?.config?.url,
      response.data.trace,
    );
  }
  return new HttpError(
    getMessage(response),
    response?.data?.id,
    response?.data?.title,
    response?.status,
    response?.data?.code,
    response?.config?.url,
    response?.data?.trace,
  );
}

export function showNotificationError(newError: HttpError, client = _client) {
  if (!client) {
    throw new Error('No global client has been set up');
  }
  client.errorHandler(newError);
  // can't return Promise.reject here as it will trigger unhandled rejection
  return newError;
}

function getMessage(error: any): string {
  if (!error)
    return 'Trouble communicating with server, please try again later.';
  let message = '';
  if (error.exception && !error.data) {
    error.data = error.exception;
  }
  if (error.status === 404 && !error?.data?.message) {
    message = 'Resource Not Found.';
  } else if (error.status === -1 && error.data === null) {
    message = 'Oops, Could not obtain data from server due to network problem.';
  } else if (error.data?.code === '23505') {
    // duplicate
    error.data.title = 'Duplicate';
    message = 'Name already exists, try a different name.';
  } else if (error.data?.validation_errors?.email) {
    if (Array.isArray(error.data.validation_errors.email)) {
      message = error.data.validation_errors.email.join(', \n');
    } else {
      message = error.data.validation_errors.email;
    }
  } else if (error.data?.message) {
    if (typeof error.data.message === 'string') {
      message = error.data.message;
    } else if (typeof error.data.message === 'object') {
      for (const key in error.data.message) {
        if (Object.prototype.hasOwnProperty.call(error.data.message, key)) {
          if (Array.isArray(error.data.message[key])) {
            message = error.data.message[key].join(', \n');
          } else {
            message = error.data.message[key];
          }
        }
      }
    } else {
      message = JSON.stringify(error.data.message);
    }
    if (error.data.errors) {
      message += Object.entries(error.data.errors)
        // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
        .map(([, value]) => `\n${value}`)
        .join('');
    }
  } else if (error.data?.error) {
    message = error.data.error;
  } else if (error.data?.detail) {
    message = error.data.detail;
  } else if (error.statusText) {
    message = error.statusText;
  } else if (error.message) {
    message = error.message;
  } else if (error.status === 401) {
    message = 'Failed to authenticate.';
  } else {
    message = 'Something went wrong';
  }
  return message;
}
