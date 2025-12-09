import { getResponse, type QueryParams } from '../gen/actions';
import { _client } from '../ClientSdk';
import { type JiraServerInfo } from './JiraServerInfo';

export interface RegisterJiraPayload {
  email: string;
  accountId: string;
  clientKey: string;
  accessToken: string;
  localBaseUrl: string;
  serverInfo: JiraServerInfo;
}

export interface RegisterJiraResponse {
  access_token: string;
  expires_at: string;
  user_id: number;
  client_id: number;
  integration_id: number;
  org: string;
}

export const registerJira = (
  data: Partial<RegisterJiraPayload>,
  queryParams?: QueryParams<Partial<RegisterJiraPayload>>,
): Promise<RegisterJiraResponse> => {
  const config: QueryParams<Partial<RegisterJiraPayload>> = {
    method: 'post',
    url: queryParams?.url ?? '/register_jira',
    params: queryParams?.params,
    data,
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<RegisterJiraResponse>(config)
    : getResponse<RegisterJiraResponse, Partial<RegisterJiraPayload>>(
        queryParams?.api ?? _client?.api,
        config,
      );
};
