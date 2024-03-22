import { _client } from '../../../ClientSdk';
import { getResponse, QueryParams } from '../../../gen/actions';
import { TestRailCredentials } from '../interfaces/TestRailCredentials';

export const clearCredentials = (
  queryParams?: Omit<QueryParams<void>, 'url' | 'params'>,
): Promise<any> => {
  const config: QueryParams<void> = {
    method: 'delete',
    url: '/testrail/credentials',
    cancelToken: queryParams?.cancelToken,
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<any>(config)
    : getResponse<any, void>(queryParams?.api || _client?.api, config);
};

export const getCredentials = (
  queryParams?: Omit<QueryParams<void>, 'url' | 'params'>,
): Promise<TestRailCredentials | null> => {
  const config: QueryParams<void> = {
    method: 'get',
    url: '/testrail/credentials',
    cancelToken: queryParams?.cancelToken,
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<TestRailCredentials | null>(config)
    : getResponse<TestRailCredentials | null, void>(
        queryParams?.api || _client?.api,
        config,
      );
};

export const postCredentials = (
  queryParams: Required<Pick<QueryParams<TestRailCredentials>, 'data'>> &
    Omit<QueryParams<TestRailCredentials>, 'url' | 'params'>,
) => {
  const config: QueryParams<TestRailCredentials> = {
    method: 'post',
    url: '/testrail/credentials',
    cancelToken: queryParams?.cancelToken,
    data: queryParams.data,
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<TestRailCredentials>(config)
    : getResponse<any, TestRailCredentials>(
        queryParams?.api || _client?.api,
        config,
      );
};
