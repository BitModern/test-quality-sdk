import { AxiosResponse, AxiosRequestConfig } from 'axios';
import { isBrowser } from 'browser-or-node';
import Debug from 'debug';
import { v4 as uuidV4 } from 'uuid';
import {
  BatchRequest,
  BatchResponses,
  APIWorkerInterface,
  ReturnToken,
} from '../..';

const debug = Debug('tq:sdk:apiworker');

enum APIWorkerState {
  Updating = 'updating',
  Active = 'active',
}

export interface APIWorkerSdkOptions {
  baseUrl?: string;
  clientId: string;
  clientSecret: string;
  debug?: boolean;
}

export interface APIWorkerEventData {
  id: string;
  action: string;
  payload: any;
  response?: string;
  error?: string;
  messageError?: string;
}

function createDebug(data: APIWorkerEventData) {
  return data.id ? debug.extend(data.id.split('-')[0]) : debug;
}

export class APIWorker implements APIWorkerInterface {
  private readonly worker: Worker;
  private readonly pendingActions: Record<string, any> = {};
  private readonly messageQueue: any[] = [];
  private state = APIWorkerState.Updating;

  constructor(clientOptions: APIWorkerSdkOptions, private token?: ReturnToken) {
    if (!isBrowser || !Worker) {
      throw new Error(
        'This class is only available for browsers with web worker API support'
      );
    }
    debug('constructor', { clientOptions, token });
    this.worker = new Worker(new URL('APIWorkerThread.js', import.meta.url));
    this.worker.onmessage = this.messageHandler.bind(this);
    this.worker.onmessageerror = this.messageErrorHandler;
    this.worker.onerror = this.errorHandler;
    this.setClient(clientOptions, token);
  }

  private setClient(options: APIWorkerSdkOptions, token?: ReturnToken) {
    debug('setClient');
    this.postMessage('setClient', {
      options,
      token: token,
      debug: debug.enabled,
    }).then(() => {
      this.stateUpdateHandler(APIWorkerState.Active);
    });
  }

  private postMessage<T>(action: string, payload: any) {
    const id = uuidV4();
    debug('postMessage', { id, action, state: this.state, payload });
    return new Promise<T>((resolve, reject) => {
      this.pendingActions[id] = {
        id,
        action,
        payload,
        resolve,
        reject,
      };
      const message = { id, action, payload };
      if (this.state !== APIWorkerState.Active && action !== 'setClient') {
        debug('queueing %s %s', action, id);
        this.messageQueue.push(message);
      } else {
        debug('sending %s %s', action, id);
        this.worker.postMessage(message);
      }
    });
  }

  private stateUpdateHandler(newState: APIWorkerState) {
    debug('stateUpdateHandler', { currentState: this.state, newState });
    if (this.state === newState) {
      return;
    }
    this.state = newState;
    switch (newState) {
      case APIWorkerState.Active:
        this.processMessageQueue();
        break;
      default:
    }
  }

  private processMessageQueue() {
    debug('processMessageQueue: %d', this.messageQueue.length);
    while (this.messageQueue.length) {
      // avoid potential race condition errors
      const message = this.messageQueue.shift();
      if (message) {
        debug('sending queued %s %s', message.action, message.id);
        this.worker.postMessage(message);
      } else {
        break;
      }
    }
  }

  private messageHandler(e: MessageEvent<APIWorkerEventData>) {
    const debugMsg = createDebug(e.data);
    debugMsg('messageHandler', e.data);

    const { id, response, error, messageError } = e.data || {};
    if (messageError) {
      debugMsg('WARN: unable to process message', e.data.payload);
    }

    if (!id || (!response && !error)) {
      debugMsg(`WARN: bad message format`);
      return;
    }

    const { resolve, reject } = this.pendingActions[id] || {};
    if (!resolve || !reject) {
      debugMsg(`WARN: unable to find pending action ${id}`);
      return;
    }

    if (error) {
      const err = JSON.parse(error);
      debugMsg('WARN: error from worker', err);
      reject(err);
    } else {
      const res = JSON.parse(response || '{"ok":1}');
      debugMsg('response from worker', res);
      resolve(res);
    }
    delete this.pendingActions[id];
  }

  private messageErrorHandler(e: MessageEvent) {
    debug('messageErrorHandler:', e);
  }

  private errorHandler(e: ErrorEvent) {
    debug('errorHandler:', e);
  }

  public setToken(token: ReturnToken) {
    debug('setToken');
    if (this.token && this.token.access_token === token.access_token) {
      return;
    }
    this.state = APIWorkerState.Updating;
    this.postMessage('setToken', token).then(() => {
      this.token = token;
      this.stateUpdateHandler(APIWorkerState.Active);
    });
  }

  public postBatch(
    requests: BatchRequest[]
  ): Promise<AxiosResponse<BatchResponses>> {
    debug('postBatch');
    return this.postMessage('postBatch', requests);
  }

  public request<T = any, R = AxiosResponse<T>, D = any>(
    config: AxiosRequestConfig<D>
  ) {
    debug('request');
    return this.postMessage<R>('request', config);
  }
}
