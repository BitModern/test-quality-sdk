import { getResponse, QueryParams } from '../gen/actions';
import { _client } from '../ClientSdk';
import { JiraServerInfo } from './JiraServerInfo';

export interface RegisterJiraPayload {
  user: string;
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
}

export const registerJira = (
  data: Partial<RegisterJiraPayload>,
  queryParams?: QueryParams<RegisterJiraPayload>
): Promise<RegisterJiraResponse> => {
  const config: QueryParams<RegisterJiraPayload> = {
    method: 'post',
    url: queryParams?.url || '/register_jira',
    params: queryParams?.params,
    data,
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<RegisterJiraResponse>(config)
    : getResponse<RegisterJiraResponse, RegisterJiraPayload>(
        queryParams?.api || _client?.api,
        config
      );
};
