import Debug from 'debug';
import {
  BatchRequest,
  ClientSdk,
  QueryParams,
  ReturnToken,
  setGlobalClient,
} from '../..';
import { APIWorkerSdkOptions, APIWorkerEventData } from './APIWorker';

let debugEnabled = false;
let globalClient: ClientSdk;

function createDebug(data: APIWorkerEventData) {
  let debug = Debug('tq:sdk:apiworker:thread');
  if (data.id) {
    debug = debug.extend(data.id.split('-')[0]);
  }
  debug.enabled = debugEnabled;
  return debug;
}

async function handler(e: MessageEvent<APIWorkerEventData>) {
  const debug = createDebug(e.data);
  debug('handler', e.data);

  const { id, action, payload } = e.data || {};
  if (!id || !action || !payload) {
    postMessage({ messageError: 'Bad data format', payload: e.data });
    return;
  }

  let result: Partial<Record<'response' | 'error', string>>;
  try {
    if (!actions[action]) {
      throw new Error(`Unknown action ${action}`);
    }
    result = {
      response: JSON.stringify(
        await actions[action].bind({ ...actions, debug })(payload)
      ),
    };
  } catch (err: any) {
    result = { error: JSON.stringify(err) };
  }

  debug('handler end');
  postMessage({ id, ...result });
}

const actions: Record<string, any> = {
  async setClient(payload: {
    options: APIWorkerSdkOptions;
    token?: ReturnToken;
    debug?: boolean;
  }) {
    this.debug('setClient');
    if (globalClient) {
      return;
    }
    const { options, token, debug: debugWorker } = payload;
    globalClient = new ClientSdk({ ...options, enableAPIWorker: false });
    setGlobalClient(globalClient);
    if (token) {
      await this.setToken(token);
    }
    debugEnabled = !!debugWorker;
    this.debug('setClient ok');
    return { ok: 1 };
  },

  async setToken(token: ReturnToken) {
    this.debug('setToken');
    if (!globalClient) {
      throw new Error('client has not been set');
    }
    globalClient.getAuth().setToken(token, false);
    this.debug('setToken ok');
  },

  async postBatch(requests: BatchRequest[]) {
    this.debug('postBatch');
    if (!globalClient) {
      throw new Error('client has not been set');
    }
    const res = await globalClient.api.post('/batch', { requests });
    this.debug('postBatch ok');
    return res;
  },

  async request(request: QueryParams) {
    this.debug('request');
    if (!globalClient) {
      throw new Error('client has not been set');
    }
    const res = await globalClient.api.request(request);
    this.debug('request ok');
    return res;
  },
};

onmessage = handler;
