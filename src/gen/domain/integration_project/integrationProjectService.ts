/**
 * Copyright (C) 2021 BitModern, Inc - All Rights Reserved
 */

import { _client } from '../../../ClientSdk';
import { getResponse } from '../../actions/getResponse';
import { QueryParams } from '../../actions/QueryParams';
import { MessageResponse } from '../../actions/MessageResponse';
import { ResourceList } from '../../models/ResourceList';
import { IntegrationRoute, ProjectRoute } from '../../routes/Routes';
import { Project } from '../project/Project';
import { Integration } from '../integration/Integration';
import { IntegrationProject } from './IntegrationProject';
import { IntegrationProjectApi } from './IntegrationProjectApi';

export const integrationProjectDetach = (
  data: Partial<IntegrationProject>,
  queryParams?: QueryParams<IntegrationProject>
): Promise<MessageResponse> => {
  if (data.id === undefined) {
    return Promise.reject(new Error('Must supply id'));
  }
  const config: QueryParams<IntegrationProject> = {
    method: 'delete',
    url: `/integration_project/${data.id}`,
    params: queryParams?.params,
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<MessageResponse>(config)
    : getResponse<MessageResponse, IntegrationProject>(
        queryParams?.api || _client?.api,
        config
      );
};

export const integrationProjectUpdateOne = (
  id: number,
  data: Partial<IntegrationProject>,
  queryParams?: QueryParams<IntegrationProject>
): Promise<Integration> => {
  const config: QueryParams<IntegrationProject> = {
    method: 'put',
    url: `/integration_project/${id}`,
    params: queryParams?.params,
    data,
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<Integration>(config)
    : getResponse<Integration, Partial<IntegrationProject>>(
        queryParams?.api || _client?.api,
        config
      );
};

export const integrationProjectGetMany = (
  queryParams?: QueryParams<IntegrationProject>
): Promise<ResourceList<IntegrationProjectApi>> => {
  const config: QueryParams<IntegrationProject> = {
    method: 'get',
    url: queryParams?.url || `/integration_project`,
    params: queryParams?.params,
    cancelToken: queryParams?.cancelToken,
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<ResourceList<IntegrationProjectApi>>(config)
    : getResponse<ResourceList<IntegrationProjectApi>, IntegrationProject>(
        queryParams?.api || _client?.api,
        config
      );
};

export const integrationProjectGetOne = (
  id: number,
  queryParams?: QueryParams<IntegrationProject>
): Promise<IntegrationProjectApi> => {
  const config: QueryParams<IntegrationProject> = {
    method: 'get',
    url: `${queryParams?.url || `/integration_project/${id}`}`,
    params: queryParams?.params,
    cancelToken: queryParams?.cancelToken,
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<IntegrationProjectApi>(config)
    : getResponse<IntegrationProjectApi, IntegrationProject>(
        queryParams?.api || _client?.api,
        config
      );
};

/**
 * integrationAttachManyProject
 * This will remove any associations not in the list.
 * @param integrationId
 * @param list of children to associate
 * @param queryParams
 */
export const integrationAttachManyProject = (
  integrationId: number,
  list: Partial<Project>[],
  queryParams?: QueryParams<Integration>
): Promise<Integration> => {
  const config: QueryParams<Integration & { project: Partial<Project>[] }> = {
    method: 'put',
    url: `${IntegrationRoute()}/${integrationId}`,
    params: queryParams?.params,
    data: {
      project: list,
    },
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<Integration>(config)
    : getResponse<Integration>(queryParams?.api || _client?.api, config);
};

/**
 * projectAttachManyIntegration
 * This will remove any associations not in the list.
 * @param projectId
 * @param list of children to associate
 * @param queryParams
 */
export const projectAttachManyIntegration = (
  projectId: number,
  list: Partial<Integration>[],
  queryParams?: QueryParams<Project>
): Promise<Project> => {
  const config: QueryParams<Project & { integration: Partial<Integration>[] }> =
    {
      method: 'put',
      url: `${ProjectRoute()}/${projectId}`,
      params: queryParams?.params,
      data: {
        integration: list,
      },
    };

  return queryParams?.batch
    ? queryParams.batch.addBatch<Project>(config)
    : getResponse<Project>(queryParams?.api || _client?.api, config);
};

export const integrationAttachProject = (
  integrationId: number,
  projectId: number,
  integrationProject?: Partial<IntegrationProject>,
  queryParams?: QueryParams
): Promise<Integration> => {
  const config: QueryParams<{
    id: number;
    project_id: number;
    integration_project?: Partial<IntegrationProject>;
  }> = {
    method: 'put',
    url: IntegrationRoute(),
    params: queryParams?.params,
    data: {
      id: integrationId,
      project_id: projectId,
      integration_project: integrationProject,
    },
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<Integration>(config)
    : getResponse<
        Integration,
        {
          id: number;
          project_id: number;
          integration_project?: Partial<IntegrationProject>;
        }
      >(queryParams?.api || _client?.api, config);
};

export const integrationCreateWithProject = (
  projectId: number,
  data: Partial<Integration>,
  integrationProject?: Partial<IntegrationProject>,
  queryParams?: QueryParams
): Promise<Integration> => {
  const config: QueryParams<
    Integration & {
      project_id: number;
      integration_project?: Partial<IntegrationProject>;
    }
  > = {
    method: 'post',
    url: IntegrationRoute(),
    params: queryParams?.params,
    data: {
      ...data,
      project_id: projectId,
      integration_project: integrationProject,
    },
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<Integration>(config)
    : getResponse<
        Integration,
        Integration & {
          project_id: number;
          integration_project?: Partial<IntegrationProject>;
        }
      >(queryParams?.api || _client?.api, config);
};

export const projectAttachIntegration = (
  projectId: number,
  integrationId: number,
  integrationProject?: Partial<IntegrationProject>,
  queryParams?: QueryParams
): Promise<Project> => {
  const config: QueryParams<{
    id: number;
    integration_id: number;
    integration_project?: Partial<IntegrationProject>;
  }> = {
    method: 'put',
    url: ProjectRoute(),
    params: queryParams?.params,
    data: {
      id: projectId,
      integration_id: integrationId,
      integration_project: integrationProject,
    },
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<Project>(config)
    : getResponse<
        Project,
        {
          id: number;
          integration_id: number;
          integration_project: Partial<IntegrationProject>;
        }
      >(queryParams?.api || _client?.api, config);
};

export const projectCreateWithIntegration = (
  integrationId: number,
  data: Partial<Project>,
  integrationProject?: Partial<IntegrationProject>,
  queryParams?: QueryParams
): Promise<Project> => {
  const config: QueryParams<
    Project & {
      integration_id: number;
      integration_project?: Partial<IntegrationProject>;
    }
  > = {
    method: 'post',
    url: ProjectRoute(),
    params: queryParams?.params,
    data: {
      ...data,
      integration_id: integrationId,
      integration_project: integrationProject,
    },
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<Project>(config)
    : getResponse<
        Project,
        Project & {
          integration_id: number;
          integration_project?: Partial<IntegrationProject>;
        }
      >(queryParams?.api || _client?.api, config);
};
