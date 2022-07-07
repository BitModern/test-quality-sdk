/**
 * Copyright (C) 2021 BitModern, Inc - All Rights Reserved
 */

import { _client } from '../../../ClientSdk';
import { getResponse } from '../../actions/getResponse';
import { QueryParams } from '../../actions/QueryParams';
import { MessageResponse } from '../../actions/MessageResponse';
import { ResourceList } from '../../models/ResourceList';
import { RequirementRoute, SuiteRoute } from '../../routes/Routes';
import { Suite } from '../suite/Suite';
import { Requirement } from '../requirement/Requirement';
import { RequirementTest } from './RequirementTest';
import { RequirementTestApi } from './RequirementTestApi';

export const requirementTestDetach = (
  data: Partial<RequirementTest>,
  queryParams?: QueryParams<RequirementTest>
): Promise<MessageResponse> => {
  if (data.id === undefined) {
    return Promise.reject(new Error('Must supply id'));
  }
  const config: QueryParams<RequirementTest> = {
    method: 'delete',
    url: `/requirement_test/${data.id}`,
    params: queryParams?.params,
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<MessageResponse>(config)
    : getResponse<MessageResponse, RequirementTest>(
        queryParams?.api || _client?.api,
        config
      );
};

export const requirementTestUpdateOne = (
  id: number,
  data: Partial<RequirementTest>,
  queryParams?: QueryParams<RequirementTest>
): Promise<Requirement> => {
  const config: QueryParams<RequirementTest> = {
    method: 'put',
    url: `/requirement_test/${id}`,
    params: queryParams?.params,
    data,
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<Requirement>(config)
    : getResponse<Requirement, Partial<RequirementTest>>(
        queryParams?.api || _client?.api,
        config
      );
};

export const requirementTestGetMany = (
  queryParams?: QueryParams<RequirementTest>
): Promise<ResourceList<RequirementTestApi>> => {
  const config: QueryParams<RequirementTest> = {
    method: 'get',
    url: queryParams?.url || `/requirement_test`,
    params: queryParams?.params,
    cancelToken: queryParams?.cancelToken,
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<ResourceList<RequirementTestApi>>(config)
    : getResponse<ResourceList<RequirementTestApi>, RequirementTest>(
        queryParams?.api || _client?.api,
        config
      );
};

export const requirementTestGetOne = (
  id: number,
  queryParams?: QueryParams<RequirementTest>
): Promise<RequirementTestApi> => {
  const config: QueryParams<RequirementTest> = {
    method: 'get',
    url: `${queryParams?.url || `/requirement_test/${id}`}`,
    params: queryParams?.params,
    cancelToken: queryParams?.cancelToken,
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<RequirementTestApi>(config)
    : getResponse<RequirementTestApi, RequirementTest>(
        queryParams?.api || _client?.api,
        config
      );
};

/**
 * requirementAttachManySuite
 * This will remove any associations not in the list.
 * @param requirementId
 * @param list of children to associate
 * @param queryParams
 */
export const requirementAttachManySuite = (
  requirementId: number,
  list: Partial<Suite>[],
  queryParams?: QueryParams<Requirement>
): Promise<Requirement> => {
  const config: QueryParams<Requirement & { suite: Partial<Suite>[] }> = {
    method: 'put',
    url: `${RequirementRoute()}/${requirementId}`,
    params: queryParams?.params,
    data: {
      suite: list,
    },
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<Requirement>(config)
    : getResponse<Requirement>(queryParams?.api || _client?.api, config);
};

/**
 * suiteAttachManyRequirement
 * This will remove any associations not in the list.
 * @param suiteId
 * @param list of children to associate
 * @param queryParams
 */
export const suiteAttachManyRequirement = (
  suiteId: number,
  list: Partial<Requirement>[],
  queryParams?: QueryParams<Suite>
): Promise<Suite> => {
  const config: QueryParams<Suite & { requirement: Partial<Requirement>[] }> = {
    method: 'put',
    url: `${SuiteRoute()}/${suiteId}`,
    params: queryParams?.params,
    data: {
      requirement: list,
    },
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<Suite>(config)
    : getResponse<Suite>(queryParams?.api || _client?.api, config);
};

export const requirementAttachSuite = (
  requirementId: number,
  suiteId: number,
  requirementTest?: Partial<RequirementTest>,
  queryParams?: QueryParams
): Promise<Requirement> => {
  const config: QueryParams<{
    id: number;
    suite_id: number;
    requirement_test?: Partial<RequirementTest>;
  }> = {
    method: 'put',
    url: `${RequirementRoute()}/${requirementId}`,
    params: queryParams?.params,
    data: {
      id: requirementId,
      suite_id: suiteId,
      requirement_test: requirementTest,
    },
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<Requirement>(config)
    : getResponse<
        Requirement,
        {
          id: number;
          suite_id: number;
          requirement_test?: Partial<RequirementTest>;
        }
      >(queryParams?.api || _client?.api, config);
};

export const requirementCreateWithSuite = (
  suiteId: number,
  data: Partial<Requirement>,
  requirementTest?: Partial<RequirementTest>,
  queryParams?: QueryParams
): Promise<Requirement> => {
  const config: QueryParams<
    Requirement & {
      suite_id: number;
      requirement_test?: Partial<RequirementTest>;
    }
  > = {
    method: 'post',
    url: RequirementRoute(),
    params: queryParams?.params,
    data: {
      ...data,
      suite_id: suiteId,
      requirement_test: requirementTest,
    },
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<Requirement>(config)
    : getResponse<
        Requirement,
        Requirement & {
          suite_id: number;
          requirement_test?: Partial<RequirementTest>;
        }
      >(queryParams?.api || _client?.api, config);
};

export const suiteAttachRequirement = (
  suiteId: number,
  requirementId: number,
  requirementTest?: Partial<RequirementTest>,
  queryParams?: QueryParams
): Promise<Suite> => {
  const config: QueryParams<{
    id: number;
    requirement_id: number;
    requirement_test?: Partial<RequirementTest>;
  }> = {
    method: 'put',
    url: `${SuiteRoute()}/${suiteId}`,
    params: queryParams?.params,
    data: {
      id: suiteId,
      requirement_id: requirementId,
      requirement_test: requirementTest,
    },
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<Suite>(config)
    : getResponse<
        Suite,
        {
          id: number;
          requirement_id: number;
          requirement_test: Partial<RequirementTest>;
        }
      >(queryParams?.api || _client?.api, config);
};

export const suiteCreateWithRequirement = (
  requirementId: number,
  data: Partial<Suite>,
  requirementTest?: Partial<RequirementTest>,
  queryParams?: QueryParams
): Promise<Suite> => {
  const config: QueryParams<
    Suite & {
      requirement_id: number;
      requirement_test?: Partial<RequirementTest>;
    }
  > = {
    method: 'post',
    url: SuiteRoute(),
    params: queryParams?.params,
    data: {
      ...data,
      requirement_id: requirementId,
      requirement_test: requirementTest,
    },
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<Suite>(config)
    : getResponse<
        Suite,
        Suite & {
          requirement_id: number;
          requirement_test?: Partial<RequirementTest>;
        }
      >(queryParams?.api || _client?.api, config);
};
