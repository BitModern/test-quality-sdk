/**
 * Copyright (C) 2021 BitModern, Inc - All Rights Reserved
 */

export const AccessRoleRoute = (): string => `/access_role`;
export const AccessRolePolicyRoute = (access_role_id: number): string =>
  `/access_role/${access_role_id}/policy`;
export const AccessRoleProjectRoute = (access_role_id: number): string =>
  `/access_role/${access_role_id}/project`;
export const AccessRoleShareRoute = (access_role_id: number): string =>
  `/access_role/${access_role_id}/share`;
export const AccessRoleUserRoute = (access_role_id: number): string =>
  `/access_role/${access_role_id}/user`;
export const AppConfigRoute = (): string => `/app_config`;
export const AppConfigAppInstallRoute = (app_config_id: number): string =>
  `/app_config/${app_config_id}/app_install`;
export const AppInstallRoute = (): string => `/app_install`;
export const AppInstallAppInstallIntegrationRoute = (
  app_install_id: number,
): string => `/app_install/${app_install_id}/app_install_integration`;
export const AppInstallAppInstallProjectRoute = (
  app_install_id: number,
): string => `/app_install/${app_install_id}/app_install_project`;
export const AppInstallProjectRoute = (): string => `/app_install_project`;
export const AppInstallProjectBranchRoute = (
  app_install_project_id: number,
): string => `/app_install_project/${app_install_project_id}/branch`;
export const AppInstallProjectCheckRunRoute = (
  app_install_project_id: number,
): string => `/app_install_project/${app_install_project_id}/check_run`;
export const AppInstallProjectCheckSuiteRoute = (
  app_install_project_id: number,
): string => `/app_install_project/${app_install_project_id}/check_suite`;
export const AppInstallProjectIntegrationProjectRoute = (
  app_install_project_id: number,
): string =>
  `/app_install_project/${app_install_project_id}/integration_project`;
export const AppInstallProjectPullRequestRoute = (
  app_install_project_id: number,
): string => `/app_install_project/${app_install_project_id}/pull_request`;
export const AppUserRoute = (): string => `/app_user`;
export const AppUserAppInstallRoute = (app_user_id: number): string =>
  `/app_user/${app_user_id}/app_install`;
export const AppUserBranchRoute = (app_user_id: number): string =>
  `/app_user/${app_user_id}/branch`;
export const AppUserPullRequestRoute = (app_user_id: number): string =>
  `/app_user/${app_user_id}/pull_request`;
export const AttachmentRoute = (): string => `/attachment`;
export const BaseCapabilityRoute = (): string => `/base_capability`;
export const BaseCapabilityBaseIntegrationRoute = (
  base_capability_id: number,
): string => `/base_capability/${base_capability_id}/base_integration`;
export const BaseCapabilityCapabilityRoute = (
  base_capability_id: number,
): string => `/base_capability/${base_capability_id}/capability`;
export const BaseIntegrationRoute = (): string => `/base_integration`;
export const BaseIntegrationAppConfigRoute = (
  base_integration_id: number,
): string => `/base_integration/${base_integration_id}/app_config`;
export const BaseIntegrationBaseCapabilityRoute = (
  base_integration_id: number,
): string => `/base_integration/${base_integration_id}/base_capability`;
export const BaseIntegrationIntegrationRoute = (
  base_integration_id: number,
): string => `/base_integration/${base_integration_id}/integration`;
export const BillingContactRoute = (): string => `/billing_contact`;
export const CapabilityRoute = (): string => `/capability`;
export const CapabilityIntegrationRoute = (capability_id: number): string =>
  `/capability/${capability_id}/integration`;
export const CapabilityProjectCapabilityDefaultRoute = (
  capability_id: number,
): string => `/capability/${capability_id}/project_capability_default`;
export const CasePriorityRoute = (): string => `/case_priority`;
export const CasePriorityCasePriorityProjectRoute = (
  case_priority_id: number,
): string => `/case_priority/${case_priority_id}/case_priority_project`;
export const CasePriorityLabelAssignedRoute = (
  case_priority_id: number,
): string => `/case_priority/${case_priority_id}/label_assigned`;
export const CasePriorityTestRoute = (case_priority_id: number): string =>
  `/case_priority/${case_priority_id}/test`;
export const CaseTypeRoute = (): string => `/case_type`;
export const CaseTypeCaseTypeProjectRoute = (case_type_id: number): string =>
  `/case_type/${case_type_id}/case_type_project`;
export const CaseTypeLabelAssignedRoute = (case_type_id: number): string =>
  `/case_type/${case_type_id}/label_assigned`;
export const CaseTypeTestRoute = (case_type_id: number): string =>
  `/case_type/${case_type_id}/test`;
export const CheckListRoute = (): string => `/check_list`;
export const CheckListCheckListItemRoute = (check_list_id: number): string =>
  `/check_list/${check_list_id}/check_list_item`;
export const CheckListItemRoute = (): string => `/check_list_item`;
export const CheckListItemCheckListItemUserRoute = (
  check_list_item_id: number,
): string => `/check_list_item/${check_list_item_id}/check_list_item_user`;
export const CheckRunRoute = (): string => `/check_run`;
export const CheckRunRunRoute = (check_run_id: number): string =>
  `/check_run/${check_run_id}/run`;
export const CheckSuiteRoute = (): string => `/check_suite`;
export const CheckSuiteCheckRunRoute = (check_suite_id: number): string =>
  `/check_suite/${check_suite_id}/check_run`;
export const CheckSuiteCheckSuitePullRequestRoute = (
  check_suite_id: number,
): string => `/check_suite/${check_suite_id}/check_suite_pull_request`;
export const ClientRoute = (): string => `/client`;
export const ClientKeyRoute = (client_id: number): string =>
  `/client/${client_id}/key`;
export const ClientSignupOptionRoute = (client_id: number): string =>
  `/client/${client_id}/signup_option`;
export const ClientVirtualRoute = (client_id: number): string =>
  `/client/${client_id}/virtual`;
export const CommentRoute = (): string => `/comment`;
export const ComponentRoute = (): string => `/component`;
export const ComponentComponentDocRoute = (component_id: number): string =>
  `/component/${component_id}/component_doc`;
export const ComponentComponentDocTemplateRoute = (
  component_id: number,
): string => `/component/${component_id}/component_doc_template`;
export const ComponentComponentDocTypeRoute = (component_id: number): string =>
  `/component/${component_id}/component_doc_type`;
export const ComponentDocRoute = (): string => `/component_doc`;
export const ComponentDocTemplateRoute = (): string =>
  `/component_doc_template`;
export const ComponentDocTypeRoute = (): string => `/component_doc_type`;
export const CouponRoute = (): string => `/coupon`;
export const CouponSubscriptionsRoute = (coupon_id: number): string =>
  `/coupon/${coupon_id}/subscriptions`;
export const DataSetRoute = (): string => `/data_set`;
export const DataSetTestRoute = (data_set_id: number): string =>
  `/data_set/${data_set_id}/test`;
export const DefectRoute = (): string => `/defect`;
export const DefectAttachmentRoute = (defect_id: number): string =>
  `/defect/${defect_id}/attachment`;
export const DefectComponentRoute = (): string => `/defect_component`;
export const DefectDefectExplorationItemRoute = (defect_id: number): string =>
  `/defect/${defect_id}/defect_exploration_item`;
export const DefectLabelRoute = (): string => `/defect_label`;
export const DefectPriorityRoute = (): string => `/defect_priority`;
export const DefectResRoute = (): string => `/defect_res`;
export const DefectResDefectRoute = (defect_res_id: number): string =>
  `/defect_res/${defect_res_id}/defect`;
export const DefectResNativeDefectResRoute = (defect_res_id: number): string =>
  `/defect_res/${defect_res_id}/native_defect_res`;
export const DefectResRequirementRoute = (defect_res_id: number): string =>
  `/defect_res/${defect_res_id}/requirement`;
export const DefectRunResultRoute = (defect_id: number): string =>
  `/defect/${defect_id}/run_result`;
export const DefectStatusRoute = (): string => `/defect_status`;
export const DefectStatusDefectRoute = (defect_status_id: number): string =>
  `/defect_status/${defect_status_id}/defect`;
export const DefectStatusNativeDefectStatusRoute = (
  defect_status_id: number,
): string => `/defect_status/${defect_status_id}/native_defect_status`;
export const DefectStatusRequirementRoute = (
  defect_status_id: number,
): string => `/defect_status/${defect_status_id}/requirement`;
export const DefectTypeRoute = (): string => `/defect_type`;
export const DefectUserRoute = (): string => `/defect_user`;
export const DocRoute = (): string => `/doc`;
export const DocAttachmentRoute = (doc_id: number): string =>
  `/doc/${doc_id}/attachment`;
export const DocComponentDocRoute = (doc_id: number): string =>
  `/doc/${doc_id}/component_doc`;
export const DocTemplateRoute = (): string => `/doc_template`;
export const DocTemplateComponentDocTemplateRoute = (
  doc_template_id: number,
): string => `/doc_template/${doc_template_id}/component_doc_template`;
export const DocTemplateDocRoute = (doc_template_id: number): string =>
  `/doc_template/${doc_template_id}/doc`;
export const DocTypeRoute = (): string => `/doc_type`;
export const DocTypeComponentDocTypeRoute = (doc_type_id: number): string =>
  `/doc_type/${doc_type_id}/component_doc_type`;
export const DocTypeDocRoute = (doc_type_id: number): string =>
  `/doc_type/${doc_type_id}/doc`;
export const DocTypeDocTemplateRoute = (doc_type_id: number): string =>
  `/doc_type/${doc_type_id}/doc_template`;
export const EnvironmentRoute = (): string => `/environment`;
export const EnvironmentEnvironmentExplorationRoute = (
  environment_id: number,
): string => `/environment/${environment_id}/environment_exploration`;
export const EnvironmentEnvironmentPlanRoute = (
  environment_id: number,
): string => `/environment/${environment_id}/environment_plan`;
export const EnvironmentEnvironmentProjectRoute = (
  environment_id: number,
): string => `/environment/${environment_id}/environment_project`;
export const EnvironmentEnvironmentResourceRoute = (
  environment_id: number,
): string => `/environment/${environment_id}/environment_resource`;
export const EnvironmentExplorationItemRoute = (
  environment_id: number,
): string => `/environment/${environment_id}/exploration_item`;
export const EnvironmentRunResultRoute = (environment_id: number): string =>
  `/environment/${environment_id}/run_result`;
export const ExplorationRoute = (): string => `/exploration`;
export const ExplorationEnvironmentExplorationRoute = (
  exploration_id: number,
): string => `/exploration/${exploration_id}/environment_exploration`;
export const ExplorationExplorationItemRoute = (
  exploration_id: number,
): string => `/exploration/${exploration_id}/exploration_item`;
export const ExplorationItemRoute = (): string => `/exploration_item`;
export const ExplorationItemDefectExplorationItemRoute = (
  exploration_item_id: number,
): string => `/exploration_item/${exploration_item_id}/defect_exploration_item`;
export const ExplorationItemLabelAssignedRoute = (
  exploration_item_id: number,
): string => `/exploration_item/${exploration_item_id}/label_assigned`;
export const ExplorationLabelAssignedRoute = (exploration_id: number): string =>
  `/exploration/${exploration_id}/label_assigned`;
export const FilterRoute = (): string => `/filter`;
export const IntegrationRoute = (): string => `/integration`;
export const IntegrationAppInstallIntegrationRoute = (
  integration_id: number,
): string => `/integration/${integration_id}/app_install_integration`;
export const IntegrationCapabilityRoute = (integration_id: number): string =>
  `/integration/${integration_id}/capability`;
export const IntegrationProjectRoute = (integration_id: number): string =>
  `/integration/${integration_id}/project`;
export const IntegrationStatusTypeRoute = (): string =>
  `/integration_status_type`;
export const IntegrationStatusTypeNativeDefectStatusRoute = (
  integration_status_type_id: number,
): string =>
  `/integration_status_type/${integration_status_type_id}/native_defect_status`;
export const IntegrationTemplateRoute = (): string => `/integration_template`;
export const IntegrationUserRoute = (integration_id: number): string =>
  `/integration/${integration_id}/user`;
export const InvoiceRoute = (): string => `/invoice`;
export const InvoiceAttachmentRoute = (invoice_id: number): string =>
  `/invoice/${invoice_id}/attachment`;
export const InvoiceDisputeRoute = (invoice_id: number): string =>
  `/invoice/${invoice_id}/dispute`;
export const InvoicePaymentRoute = (invoice_id: number): string =>
  `/invoice/${invoice_id}/payment`;
export const LabelRoute = (): string => `/label`;
export const LabelAssignedRoute = (): string => `/label_assigned`;
export const LabelLabelAssignedRoute = (label_id: number): string =>
  `/label/${label_id}/label_assigned`;
export const LabelLabelProjectRoute = (label_id: number): string =>
  `/label/${label_id}/label_project`;
export const MilestoneRoute = (): string => `/milestone`;
export const MilestoneCommentRoute = (milestone_id: number): string =>
  `/milestone/${milestone_id}/comment`;
export const MilestoneExplorationRoute = (milestone_id: number): string =>
  `/milestone/${milestone_id}/exploration`;
export const MilestoneLabelAssignedRoute = (milestone_id: number): string =>
  `/milestone/${milestone_id}/label_assigned`;
export const MilestoneRunRoute = (milestone_id: number): string =>
  `/milestone/${milestone_id}/run`;
export const MilestoneTargetRoute = (milestone_id: number): string =>
  `/milestone/${milestone_id}/target`;
export const NativeDefectResRoute = (): string => `/native_defect_res`;
export const NativeDefectResDefectResRoute = (
  native_defect_res_id: number,
): string => `/native_defect_res/${native_defect_res_id}/defect_res`;
export const NativeDefectResLabelAssignedRoute = (
  native_defect_res_id: number,
): string => `/native_defect_res/${native_defect_res_id}/label_assigned`;
export const NativeDefectStatusRoute = (): string => `/native_defect_status`;
export const NativeDefectStatusDefectStatusRoute = (
  native_defect_status_id: number,
): string => `/native_defect_status/${native_defect_status_id}/defect_status`;
export const NativeDefectStatusLabelAssignedRoute = (
  native_defect_status_id: number,
): string => `/native_defect_status/${native_defect_status_id}/label_assigned`;
export const NotificationsRoute = (): string => `/notifications`;
export const PlanRoute = (): string => `/plan`;
export const PlanAttachmentRoute = (plan_id: number): string =>
  `/plan/${plan_id}/attachment`;
export const PlanCommentRoute = (plan_id: number): string =>
  `/plan/${plan_id}/comment`;
export const PlanEnvironmentPlanRoute = (plan_id: number): string =>
  `/plan/${plan_id}/environment_plan`;
export const PlanIntegrationProjectRoute = (plan_id: number): string =>
  `/plan/${plan_id}/integration_project`;
export const PlanLabelAssignedRoute = (plan_id: number): string =>
  `/plan/${plan_id}/label_assigned`;
export const PlanPlanSuiteTestIncludeRoute = (plan_id: number): string =>
  `/plan/${plan_id}/plan_suite_test_include`;
export const PlanPurposeRoute = (plan_id: number): string =>
  `/plan/${plan_id}/purpose`;
export const PlanRunRoute = (plan_id: number): string => `/plan/${plan_id}/run`;
export const PlanSuiteRoute = (plan_id: number): string =>
  `/plan/${plan_id}/suite`;
export const PlanSuiteTestIncludeRoute = (): string =>
  `/plan_suite_test_include`;
export const PlanWatchRoute = (plan_id: number): string =>
  `/plan/${plan_id}/watch`;
export const PolicyRoute = (): string => `/policy`;
export const PolicyPolicyRowsRoute = (policy_id: number): string =>
  `/policy/${policy_id}/policy_rows`;
export const PolicyRowsRoute = (): string => `/policy_rows`;
export const PriceRoute = (): string => `/price`;
export const PriceMarketplaceProductRoute = (price_id: number): string =>
  `/price/${price_id}/marketplace_product`;
export const PriceProductRoute = (price_id: number): string =>
  `/price/${price_id}/product`;
export const PriceQuoteItemRoute = (price_id: number): string =>
  `/price/${price_id}/quote_item`;
export const PriceSubscriptionsRoute = (price_id: number): string =>
  `/price/${price_id}/subscriptions`;
export const ProductRoute = (): string => `/product`;
export const ProductMarketplaceRoute = (product_id: number): string =>
  `/product/${product_id}/marketplace`;
export const ProductSubscriptionsRoute = (product_id: number): string =>
  `/product/${product_id}/subscriptions`;
export const ProjectRoute = (): string => `/project`;
export const ProjectAttachmentRoute = (project_id: number): string =>
  `/project/${project_id}/attachment`;
export const ProjectCasePriorityProjectRoute = (project_id: number): string =>
  `/project/${project_id}/case_priority_project`;
export const ProjectCaseTypeProjectRoute = (project_id: number): string =>
  `/project/${project_id}/case_type_project`;
export const ProjectCodeRoute = (project_id: number): string =>
  `/project/${project_id}/code`;
export const ProjectCommentRoute = (project_id: number): string =>
  `/project/${project_id}/comment`;
export const ProjectComponentDocRoute = (project_id: number): string =>
  `/project/${project_id}/component_doc`;
export const ProjectDataSetRoute = (project_id: number): string =>
  `/project/${project_id}/data_set`;
export const ProjectDefectRoute = (project_id: number): string =>
  `/project/${project_id}/defect`;
export const ProjectDocRoute = (project_id: number): string =>
  `/project/${project_id}/doc`;
export const ProjectEnvironmentProjectRoute = (project_id: number): string =>
  `/project/${project_id}/environment_project`;
export const ProjectExplorationRoute = (project_id: number): string =>
  `/project/${project_id}/exploration`;
export const ProjectExplorationItemRoute = (project_id: number): string =>
  `/project/${project_id}/exploration_item`;
export const ProjectFilterRoute = (project_id: number): string =>
  `/project/${project_id}/filter`;
export const ProjectIntegrationRoute = (project_id: number): string =>
  `/project/${project_id}/integration`;
export const ProjectLabelAssignedRoute = (project_id: number): string =>
  `/project/${project_id}/label_assigned`;
export const ProjectLabelProjectRoute = (project_id: number): string =>
  `/project/${project_id}/label_project`;
export const ProjectMilestoneRoute = (project_id: number): string =>
  `/project/${project_id}/milestone`;
export const ProjectPlanRoute = (project_id: number): string =>
  `/project/${project_id}/plan`;
export const ProjectPlanSuiteTestIncludeRoute = (project_id: number): string =>
  `/project/${project_id}/plan_suite_test_include`;
export const ProjectProjectCapabilityDefaultRoute = (
  project_id: number,
): string => `/project/${project_id}/project_capability_default`;
export const ProjectProjectPurposeRoute = (project_id: number): string =>
  `/project/${project_id}/project_purpose`;
export const ProjectProjectStatusRoute = (project_id: number): string =>
  `/project/${project_id}/project_status`;
export const ProjectProjectUserRoute = (project_id: number): string =>
  `/project/${project_id}/project_user`;
export const ProjectRequirementRoute = (project_id: number): string =>
  `/project/${project_id}/requirement`;
export const ProjectRunRoute = (project_id: number): string =>
  `/project/${project_id}/run`;
export const ProjectRunResultRoute = (project_id: number): string =>
  `/project/${project_id}/run_result`;
export const ProjectRunResultStepRoute = (project_id: number): string =>
  `/project/${project_id}/run_result_step`;
export const ProjectRunSuiteRoute = (project_id: number): string =>
  `/project/${project_id}/run_suite`;
export const ProjectStepRoute = (project_id: number): string =>
  `/project/${project_id}/step`;
export const ProjectSuiteRoute = (project_id: number): string =>
  `/project/${project_id}/suite`;
export const ProjectTargetRoute = (project_id: number): string =>
  `/project/${project_id}/target`;
export const ProjectTaskRoute = (project_id: number): string =>
  `/project/${project_id}/task`;
export const ProjectTestRoute = (project_id: number): string =>
  `/project/${project_id}/test`;
export const ProjectWatchRoute = (project_id: number): string =>
  `/project/${project_id}/watch`;
export const PullRequestRoute = (): string => `/pull_request`;
export const PullRequestCheckSuitePullRequestRoute = (
  pull_request_id: number,
): string => `/pull_request/${pull_request_id}/check_suite_pull_request`;
export const PullRequestPullRequestRequirementRoute = (
  pull_request_id: number,
): string => `/pull_request/${pull_request_id}/pull_request_requirement`;
export const PullRequestPullRequestRunRoute = (
  pull_request_id: number,
): string => `/pull_request/${pull_request_id}/pull_request_run`;
export const PurposeRoute = (): string => `/purpose`;
export const PurposeLabelAssignedRoute = (purpose_id: number): string =>
  `/purpose/${purpose_id}/label_assigned`;
export const PurposePlanRoute = (purpose_id: number): string =>
  `/purpose/${purpose_id}/plan`;
export const PurposeProjectPurposeRoute = (purpose_id: number): string =>
  `/purpose/${purpose_id}/project_purpose`;
export const RequirementRoute = (): string => `/requirement`;
export const RequirementAttachmentRoute = (requirement_id: number): string =>
  `/requirement/${requirement_id}/attachment`;
export const RequirementPullRequestRequirementRoute = (
  requirement_id: number,
): string => `/requirement/${requirement_id}/pull_request_requirement`;
export const RequirementRequirementTestRoute = (
  requirement_id: number,
): string => `/requirement/${requirement_id}/requirement_test`;
export const ResourceRoute = (): string => `/resource`;
export const ResourceEnvironmentResourceRoute = (resource_id: number): string =>
  `/resource/${resource_id}/environment_resource`;
export const ResourceResourceValueRoute = (resource_id: number): string =>
  `/resource/${resource_id}/resource_value`;
export const ResourceValueRoute = (): string => `/resource_value`;
export const ResourceValueEnvironmentResourceRoute = (
  resource_value_id: number,
): string => `/resource_value/${resource_value_id}/environment_resource`;
export const RunRoute = (): string => `/run`;
export const RunCommentRoute = (run_id: number): string =>
  `/run/${run_id}/comment`;
export const RunLabelAssignedRoute = (run_id: number): string =>
  `/run/${run_id}/label_assigned`;
export const RunPullRequestRunRoute = (run_id: number): string =>
  `/run/${run_id}/pull_request_run`;
export const RunResultRoute = (): string => `/run_result`;
export const RunResultAttachmentRoute = (run_result_id: number): string =>
  `/run_result/${run_result_id}/attachment`;
export const RunResultCommentRoute = (run_result_id: number): string =>
  `/run_result/${run_result_id}/comment`;
export const RunResultDefectRoute = (run_result_id: number): string =>
  `/run_result/${run_result_id}/defect`;
export const RunResultLabelAssignedRoute = (run_result_id: number): string =>
  `/run_result/${run_result_id}/label_assigned`;
export const RunResultRunResultStepRoute = (run_result_id: number): string =>
  `/run_result/${run_result_id}/run_result_step`;
export const RunResultStepRoute = (): string => `/run_result_step`;
export const RunResultStepAttachmentRoute = (
  run_result_step_id: number,
): string => `/run_result_step/${run_result_step_id}/attachment`;
export const RunResultStepCommentRoute = (run_result_step_id: number): string =>
  `/run_result_step/${run_result_step_id}/comment`;
export const RunResultStepLabelAssignedRoute = (
  run_result_step_id: number,
): string => `/run_result_step/${run_result_step_id}/label_assigned`;
export const RunRunResultRoute = (run_id: number): string =>
  `/run/${run_id}/run_result`;
export const RunRunSuiteRoute = (run_id: number): string =>
  `/run/${run_id}/run_suite`;
export const RunSuiteRoute = (): string => `/run_suite`;
export const ShareRoute = (): string => `/share`;
export const ShareShareUserRoute = (share_id: number): string =>
  `/share/${share_id}/share_user`;
export const SharedPreconditionRoute = (): string => `/shared_precondition`;
export const SharedPreconditionTestRoute = (
  shared_precondition_id: number,
): string => `/shared_precondition/${shared_precondition_id}/test`;
export const SharedStepRoute = (): string => `/shared_step`;
export const SharedStepLabelAssignedRoute = (shared_step_id: number): string =>
  `/shared_step/${shared_step_id}/label_assigned`;
export const SharedStepStepRoute = (shared_step_id: number): string =>
  `/shared_step/${shared_step_id}/step`;
export const SignupOptionRoute = (): string => `/signup_option`;
export const StatusRoute = (): string => `/status`;
export const StatusExplorationRoute = (status_id: number): string =>
  `/status/${status_id}/exploration`;
export const StatusExplorationItemRoute = (status_id: number): string =>
  `/status/${status_id}/exploration_item`;
export const StatusLabelAssignedRoute = (status_id: number): string =>
  `/status/${status_id}/label_assigned`;
export const StatusProjectStatusRoute = (status_id: number): string =>
  `/status/${status_id}/project_status`;
export const StatusRunResultRoute = (status_id: number): string =>
  `/status/${status_id}/run_result`;
export const StatusRunResultStepRoute = (status_id: number): string =>
  `/status/${status_id}/run_result_step`;
export const StatusTypeRoute = (): string => `/status_type`;
export const StatusTypeLabelAssignedRoute = (status_type_id: number): string =>
  `/status_type/${status_type_id}/label_assigned`;
export const StatusTypeStatusRoute = (status_type_id: number): string =>
  `/status_type/${status_type_id}/status`;
export const StepRoute = (): string => `/step`;
export const StepCommentRoute = (step_id: number): string =>
  `/step/${step_id}/comment`;
export const StepLabelAssignedRoute = (step_id: number): string =>
  `/step/${step_id}/label_assigned`;
export const StepRunResultStepRoute = (step_id: number): string =>
  `/step/${step_id}/run_result_step`;
export const StripeProductRoute = (): string => `/stripe_product`;
export const StripeProductPriceRoute = (stripe_product_id: number): string =>
  `/stripe_product/${stripe_product_id}/price`;
export const StripeProductProductRoute = (stripe_product_id: number): string =>
  `/stripe_product/${stripe_product_id}/product`;
export const SubscriptionUserRoute = (): string => `/subscription_user`;
export const SubscriptionsRoute = (): string => `/subscriptions`;
export const SubscriptionsBillingContactRoute = (
  subscriptions_id: number,
): string => `/subscriptions/${subscriptions_id}/billing_contact`;
export const SubscriptionsQuoteItemRoute = (subscriptions_id: number): string =>
  `/subscriptions/${subscriptions_id}/quote_item`;
export const SubscriptionsSubscriptionUserRoute = (
  subscriptions_id: number,
): string => `/subscriptions/${subscriptions_id}/subscription_user`;
export const SuiteRoute = (): string => `/suite`;
export const SuiteCommentRoute = (suite_id: number): string =>
  `/suite/${suite_id}/comment`;
export const SuiteLabelAssignedRoute = (suite_id: number): string =>
  `/suite/${suite_id}/label_assigned`;
export const SuitePlanRoute = (suite_id: number): string =>
  `/suite/${suite_id}/plan`;
export const SuitePlanSuiteTestIncludeRoute = (suite_id: number): string =>
  `/suite/${suite_id}/plan_suite_test_include`;
export const SuiteRequirementTestRoute = (suite_id: number): string =>
  `/suite/${suite_id}/requirement_test`;
export const SuiteRunResultRoute = (suite_id: number): string =>
  `/suite/${suite_id}/run_result`;
export const SuiteTestRoute = (suite_id: number): string =>
  `/suite/${suite_id}/test`;
export const SuiteWatchRoute = (suite_id: number): string =>
  `/suite/${suite_id}/watch`;
export const TestRoute = (): string => `/test`;
export const TestAttachmentRoute = (test_id: number): string =>
  `/test/${test_id}/attachment`;
export const TestCommentRoute = (test_id: number): string =>
  `/test/${test_id}/comment`;
export const TestLabelAssignedRoute = (test_id: number): string =>
  `/test/${test_id}/label_assigned`;
export const TestPlanSuiteTestIncludeRoute = (test_id: number): string =>
  `/test/${test_id}/plan_suite_test_include`;
export const TestQualityRoute = (): string => `/test_quality`;
export const TestQualityLabelAssignedRoute = (
  test_quality_id: number,
): string => `/test_quality/${test_quality_id}/label_assigned`;
export const TestQualityTestRoute = (test_quality_id: number): string =>
  `/test_quality/${test_quality_id}/test`;
export const TestQualityTypeRoute = (): string => `/test_quality_type`;
export const TestQualityTypeLabelAssignedRoute = (
  test_quality_type_id: number,
): string => `/test_quality_type/${test_quality_type_id}/label_assigned`;
export const TestQualityTypeTestQualityRoute = (
  test_quality_type_id: number,
): string => `/test_quality_type/${test_quality_type_id}/test_quality`;
export const TestRequirementTestRoute = (test_id: number): string =>
  `/test/${test_id}/requirement_test`;
export const TestRunResultRoute = (test_id: number): string =>
  `/test/${test_id}/run_result`;
export const TestStepRoute = (test_id: number): string =>
  `/test/${test_id}/step`;
export const TestSuiteRoute = (test_id: number): string =>
  `/test/${test_id}/suite`;
export const TestWatchRoute = (test_id: number): string =>
  `/test/${test_id}/watch`;
export const UserRoute = (): string => `/user`;
export const UserAccessRoleRoute = (user_id: number): string =>
  `/user/${user_id}/access_role`;
export const UserAttachmentRoute = (user_id: number): string =>
  `/user/${user_id}/attachment`;
export const UserBillingContactRoute = (user_id: number): string =>
  `/user/${user_id}/billing_contact`;
export const UserCheckListItemUserRoute = (user_id: number): string =>
  `/user/${user_id}/check_list_item_user`;
export const UserExportRoute = (user_id: number): string =>
  `/user/${user_id}/export`;
export const UserFeatureUserRoute = (user_id: number): string =>
  `/user/${user_id}/feature_user`;
export const UserIntegrationRoute = (user_id: number): string =>
  `/user/${user_id}/integration`;
export const UserNotificationsRoute = (user_id: number): string =>
  `/user/${user_id}/notifications`;
export const UserProjectUserRoute = (user_id: number): string =>
  `/user/${user_id}/project_user`;
export const UserQuoteRoute = (user_id: number): string =>
  `/user/${user_id}/quote`;
export const UserReportRoute = (user_id: number): string =>
  `/user/${user_id}/report`;
export const UserShareUserRoute = (user_id: number): string =>
  `/user/${user_id}/share_user`;
export const UserSubscriptionUserRoute = (user_id: number): string =>
  `/user/${user_id}/subscription_user`;
export const UserSubscriptionsRoute = (user_id: number): string =>
  `/user/${user_id}/subscriptions`;
export const UserSupportRoute = (user_id: number): string =>
  `/user/${user_id}/support`;
export const UserSupportAgentRoute = (user_id: number): string =>
  `/user/${user_id}/support_agent`;
export const UserUserLogRoute = (user_id: number): string =>
  `/user/${user_id}/user_log`;
export const VirtualRoute = (): string => `/virtual`;
export const WatchRoute = (): string => `/watch`;
export const WebinarRoute = (): string => `/webinar`;
