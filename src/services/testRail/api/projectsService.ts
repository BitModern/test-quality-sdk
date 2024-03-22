import { _client } from '../../../ClientSdk';
import { getResponse, QueryParams } from '../../../gen/actions';
import { Project } from '../../../gen/domain';
import { TestRailProject } from '../interfaces/TestRailProject';
import { Mapping } from '../interfaces/Mapping';

export const getProjects = (
  queryParams?: Omit<QueryParams<void>, 'url' | 'params'>,
): Promise<TestRailProject[]> => {
  const config: QueryParams<void> = {
    method: 'get',
    url: '/testrail/projects',
    cancelToken: queryParams?.cancelToken,
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<TestRailProject[]>(config)
    : getResponse<TestRailProject[], void>(
        queryParams?.api || _client?.api,
        config,
      );
};

export const postImportProject = (
  testRailProjectId: number | string,
  mapping: Mapping,
  queryParams?: Omit<QueryParams<void>, 'url' | 'params' | 'data'>,
) => {
  const config: QueryParams<{
    projectId: number | string;
    entitiesMapping: Mapping;
  }> = {
    method: 'post',
    url: '/testrail/projects/import',
    cancelToken: queryParams?.cancelToken,
    data: { projectId: testRailProjectId, entitiesMapping: mapping },
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<Project>(config)
    : getResponse<
        Project,
        {
          projectId: number | string;
          entitiesMapping: Mapping;
        }
      >(queryParams?.api || _client?.api, config);
};
