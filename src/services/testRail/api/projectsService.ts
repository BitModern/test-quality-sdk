import { _client } from '../../../ClientSdk';
import { getResponse, type QueryParams } from '../../../gen/actions';
import { type Mapping } from '../interfaces/Mapping';
import { type TestRailParams } from '../interfaces/TestRailParams';
import { type TestRailProjects } from '../interfaces/TestRailProjects';

export const getProjects = (
  queryParams?: QueryParams<TestRailParams>,
): Promise<TestRailProjects> => {
  const config: QueryParams<TestRailParams> = {
    method: 'get',
    url: '/testrail/projects',
    cancelToken: queryParams?.cancelToken,
    params: queryParams?.params,
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<TestRailProjects>(config)
    : getResponse<TestRailProjects, TestRailParams>(
        queryParams?.api ?? _client?.api,
        config,
      );
};

export const postImportProject = (
  testRailProjectId: number,
  tqProjectId?: number,
  mapping?: Mapping,
  queryParams?: Omit<QueryParams<void>, 'url' | 'params' | 'data'>,
): Promise<{ job_id: string }> => {
  const config: QueryParams<{
    projectId: number;
    tqProjectId?: number;
    entitiesMapping?: Mapping;
  }> = {
    method: 'post',
    url: '/testrail/projects/import',
    cancelToken: queryParams?.cancelToken,
    data: {
      projectId: testRailProjectId,
      tqProjectId,
      entitiesMapping: mapping,
    },
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<{ job_id: string }>(config)
    : getResponse<
        { job_id: string },
        {
          projectId: number;
          tqProjectId?: number;
          entitiesMapping?: Mapping;
        }
      >(queryParams?.api ?? _client?.api, config);
};
