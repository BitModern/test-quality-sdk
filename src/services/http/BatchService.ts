/**
 * Copyright (C) 2020 BitModern, Inc - All Rights Reserved
 */
/* eslint-disable import/no-cycle */

import * as querystring from 'querystring';
import { AxiosError, AxiosResponse, Method } from 'axios';
import { QueryParams } from '../../gen/actions/QueryParams';
import { getHttpResponse } from '../../exceptions/handleHttpError';
import { _client } from '../../ClientSdk';

interface BatchRequest {
  method: Method;
  endpoint: string;
  body?: any;
}

interface BatchResponse {
  method: string;
  endpoint: string;
  status?: number;
  statusText?: string;
  exception?: any;
  data: any;
  processed?: boolean;
}
interface BatchResponses {
  responses: BatchResponse[][];
}

interface BatchRequestContainer {
  request: BatchRequest;
  resolve: (value?: any) => void;
  reject: (reason?: any) => void;
}

export class BatchService {
  private batchContainers: BatchRequestContainer[] = [];

  public addBatch<T>(request: QueryParams) {
    return new Promise<T>((resolve, reject) => {
      const paramsString = request.params
        ? `?${querystring.stringify(request.params)}`
        : '';
      const batchRequestContainer: BatchRequestContainer = {
        request: {
          method: request.method
            ? (request.method.toUpperCase() as Method)
            : 'GET',
          endpoint: `/api${request.url}${paramsString}` || '/',
          body: request.data,
        },
        resolve,
        reject,
      };
      this.batchContainers.push(batchRequestContainer);
    });
  }

  public executeBatch(client = _client): Promise<BatchResponses> {
    const requests = this.batchContainers.map((c) => c.request);
    if (requests.length === 0) {
      return Promise.resolve({ responses: [] });
    }
    return new Promise<BatchResponses>((resolve, reject) => {
      client.api.post<BatchResponses>('/batch', { requests }).then(
        (response) => {
          if (!response || !response.data || !response.data.responses) {
            const error = new Error('Batch has no data');
            this.failAll(error);
            return reject(error);
          }
          const responses = response.data.responses[0];
          this.batchContainers.forEach((batchContainer) => {
            const res = responses.find(
              (r) =>
                r.method === batchContainer.request.method &&
                r.endpoint === batchContainer.request.endpoint &&
                !r.processed
            );
            if (res) {
              res.processed = true;
              if (res.status === 200 || res.status === 201) {
                batchContainer.resolve(res.data);
              } else {
                batchContainer.reject(
                  getHttpResponse(res as unknown as AxiosResponse)
                );
              }
            } else {
              batchContainer.reject({
                status: 500,
                statusText:
                  `Endpoint mismatch, req: ${batchContainer.request.method}` +
                  `: ${batchContainer.request.endpoint}`,
              });
            }
          });
          return resolve(response.data);
        },
        (error) => {
          this.failAll(error);
          reject(error);
        }
      );
    });
  }

  private failAll(error: AxiosError | Error) {
    this.batchContainers.forEach((c) => {
      if ('response' in error) {
        c.reject(error.response);
      } else {
        c.reject(error);
      }
    });
  }
}
