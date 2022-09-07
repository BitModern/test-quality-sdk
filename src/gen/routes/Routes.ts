/**
 * Copyright (C) 2021 BitModern, Inc - All Rights Reserved
 */

export const AccessRoleRoute = (): string => `/access_role`;
export const AccessRolePolicyRoute = (access_role_id: number): string =>
  `/access_role/${access_role_id}/policy`;
export const AccessRoleProjectRoute = (access_role_id: number): string =>
  `/access_role/${access_role_id}/project`;
export const AccessRoleUserRoute = (access_role_id: number): string =>
  `/access_role/${access_role_id}/user`;
export const AppRoute = (): string => `/app`;
export const AppAppVersionRoute = (app_id: number): string =>
  `/app/${app_id}/app_version`;
export const AppLabelAssignedRoute = (app_id: number): string =>
  `/app/${app_id}/label_assigned`;
export const AppVersionRoute = (): string => `/app_version`;
export const AppVersionAppVersionPlatVersionRoute = (
  app_version_id: number
): string => `/app_version/${app_version_id}/app_version_plat_version`;
export const AppVersionLabelAssignedRoute = (app_version_id: number): string =>
  `/app_version/${app_version_id}/label_assigned`;
export const AppVersionPlatVersionRoute = (): string =>
  `/app_version_plat_version`;
export const AppVersionPlatVersionLabelAssignedRoute = (
  app_version_plat_version_id: number
): string =>
  `/app_version_plat_version/${app_version_plat_version_id}/label_assigned`;
export const AppVersionPlatVersionPlanRoute = (
  app_version_plat_version_id: number
): string => `/app_version_plat_version/${app_version_plat_version_id}/plan`;
export const AppVersionPlatVersionRunResultRoute = (
  app_version_plat_version_id: number
): string =>
  `/app_version_plat_version/${app_version_plat_version_id}/run_result`;
export const AttachmentRoute = (): string => `/attachment`;
export const BaseCapabilityRoute = (): string => `/base_capability`;
export const BaseCapabilityBaseIntegrationRoute = (
  base_capability_id: number
): string => `/base_capability/${base_capability_id}/base_integration`;
export const BaseCapabilityCapabilityRoute = (
  base_capability_id: number
): string => `/base_capability/${base_capability_id}/capability`;
export const BaseIntegrationRoute = (): string => `/base_integration`;
export const BaseIntegrationBaseCapabilityRoute = (
  base_integration_id: number
): string => `/base_integration/${base_integration_id}/base_capability`;
export const BaseIntegrationIntegrationRoute = (
  base_integration_id: number
): string => `/base_integration/${base_integration_id}/integration`;
export const BillingContactRoute = (): string => `/billing_contact`;
export const CapabilityRoute = (): string => `/capability`;
export const CapabilityIntegrationRoute = (capability_id: number): string =>
  `/capability/${capability_id}/integration`;
export const CapabilityProjectCapabilityDefaultRoute = (
  capability_id: number
): string => `/capability/${capability_id}/project_capability_default`;
export const CasePriorityRoute = (): string => `/case_priority`;
export const CasePriorityLabelAssignedRoute = (
  case_priority_id: number
): string => `/case_priority/${case_priority_id}/label_assigned`;
export const CasePriorityTestRoute = (case_priority_id: number): string =>
  `/case_priority/${case_priority_id}/test`;
export const CaseTypeRoute = (): string => `/case_type`;
export const CaseTypeLabelAssignedRoute = (case_type_id: number): string =>
  `/case_type/${case_type_id}/label_assigned`;
export const CaseTypeTestRoute = (case_type_id: number): string =>
  `/case_type/${case_type_id}/test`;
export const ClientRoute = (): string => `/client`;
export const ClientKeyRoute = (client_id: number): string =>
  `/client/${client_id}/key`;
export const ClientVirtualRoute = (client_id: number): string =>
  `/client/${client_id}/virtual`;
export const CommentRoute = (): string => `/comment`;
export const DefectRoute = (): string => `/defect`;
export const DefectComponentRoute = (): string => `/defect_component`;
export const DefectComponentDefectRoute = (
  defect_component_id: number
): string => `/defect_component/${defect_component_id}/defect`;
export const DefectLabelRoute = (): string => `/defect_label`;
export const DefectLabelDefectRoute = (defect_label_id: number): string =>
  `/defect_label/${defect_label_id}/defect`;
export const DefectPriorityRoute = (): string => `/defect_priority`;
export const DefectPriorityDefectRoute = (defect_priority_id: number): string =>
  `/defect_priority/${defect_priority_id}/defect`;
export const DefectResRoute = (): string => `/defect_res`;
export const DefectResDefectRoute = (defect_res_id: number): string =>
  `/defect_res/${defect_res_id}/defect`;
export const DefectResNativeDefectResRoute = (defect_res_id: number): string =>
  `/defect_res/${defect_res_id}/native_defect_res`;
export const DefectResRequirementRoute = (defect_res_id: number): string =>
  `/defect_res/${defect_res_id}/requirement`;
export const DefectStatusRoute = (): string => `/defect_status`;
export const DefectStatusDefectRoute = (defect_status_id: number): string =>
  `/defect_status/${defect_status_id}/defect`;
export const DefectStatusNativeDefectStatusRoute = (
  defect_status_id: number
): string => `/defect_status/${defect_status_id}/native_defect_status`;
export const DefectStatusRequirementRoute = (
  defect_status_id: number
): string => `/defect_status/${defect_status_id}/requirement`;
export const DefectUserRoute = (): string => `/defect_user`;
export const DefectUserDefectRoute = (defect_user_id: number): string =>
  `/defect_user/${defect_user_id}/defect`;
export const FilterRoute = (): string => `/filter`;
export const IntegrationRoute = (): string => `/integration`;
export const IntegrationCapabilityRoute = (integration_id: number): string =>
  `/integration/${integration_id}/capability`;
export const IntegrationProjectRoute = (integration_id: number): string =>
  `/integration/${integration_id}/project`;
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
export const MilestoneRoute = (): string => `/milestone`;
export const MilestoneCommentRoute = (milestone_id: number): string =>
  `/milestone/${milestone_id}/comment`;
export const MilestoneLabelAssignedRoute = (milestone_id: number): string =>
  `/milestone/${milestone_id}/label_assigned`;
export const MilestoneRunRoute = (milestone_id: number): string =>
  `/milestone/${milestone_id}/run`;
export const MilestoneTargetRoute = (milestone_id: number): string =>
  `/milestone/${milestone_id}/target`;
export const NativeDefectResRoute = (): string => `/native_defect_res`;
export const NativeDefectResDefectResRoute = (
  native_defect_res_id: number
): string => `/native_defect_res/${native_defect_res_id}/defect_res`;
export const NativeDefectResLabelAssignedRoute = (
  native_defect_res_id: number
): string => `/native_defect_res/${native_defect_res_id}/label_assigned`;
export const NativeDefectStatusRoute = (): string => `/native_defect_status`;
export const NativeDefectStatusDefectStatusRoute = (
  native_defect_status_id: number
): string => `/native_defect_status/${native_defect_status_id}/defect_status`;
export const NativeDefectStatusLabelAssignedRoute = (
  native_defect_status_id: number
): string => `/native_defect_status/${native_defect_status_id}/label_assigned`;
export const NotificationsRoute = (): string => `/notifications`;
export const PlanRoute = (): string => `/plan`;
export const PlanAppVersionPlatVersionRoute = (plan_id: number): string =>
  `/plan/${plan_id}/app_version_plat_version`;
export const PlanAttachmentRoute = (plan_id: number): string =>
  `/plan/${plan_id}/attachment`;
export const PlanCommentRoute = (plan_id: number): string =>
  `/plan/${plan_id}/comment`;
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
export const PlatRoute = (): string => `/plat`;
export const PlatLabelAssignedRoute = (plat_id: number): string =>
  `/plat/${plat_id}/label_assigned`;
export const PlatPlatVersionRoute = (plat_id: number): string =>
  `/plat/${plat_id}/plat_version`;
export const PlatVersionRoute = (): string => `/plat_version`;
export const PlatVersionAppVersionPlatVersionRoute = (
  plat_version_id: number
): string => `/plat_version/${plat_version_id}/app_version_plat_version`;
export const PlatVersionLabelAssignedRoute = (
  plat_version_id: number
): string => `/plat_version/${plat_version_id}/label_assigned`;
export const PolicyRoute = (): string => `/policy`;
export const PolicyPolicyRowsRoute = (policy_id: number): string =>
  `/policy/${policy_id}/policy_rows`;
export const PolicyRowsRoute = (): string => `/policy_rows`;
export const ProductRoute = (): string => `/product`;
export const ProductCouponRoute = (product_id: number): string =>
  `/product/${product_id}/coupon`;
export const ProductMarketplaceRoute = (product_id: number): string =>
  `/product/${product_id}/marketplace`;
export const ProductQuoteItemRoute = (product_id: number): string =>
  `/product/${product_id}/quote_item`;
export const ProductSubscriptionsRoute = (product_id: number): string =>
  `/product/${product_id}/subscriptions`;
export const ProjectRoute = (): string => `/project`;
export const ProjectAttachmentRoute = (project_id: number): string =>
  `/project/${project_id}/attachment`;
export const ProjectCodeRoute = (project_id: number): string =>
  `/project/${project_id}/code`;
export const ProjectCommentRoute = (project_id: number): string =>
  `/project/${project_id}/comment`;
export const ProjectDefectRoute = (project_id: number): string =>
  `/project/${project_id}/defect`;
export const ProjectFilterRoute = (project_id: number): string =>
  `/project/${project_id}/filter`;
export const ProjectIntegrationRoute = (project_id: number): string =>
  `/project/${project_id}/integration`;
export const ProjectLabelAssignedRoute = (project_id: number): string =>
  `/project/${project_id}/label_assigned`;
export const ProjectMilestoneRoute = (project_id: number): string =>
  `/project/${project_id}/milestone`;
export const ProjectPlanRoute = (project_id: number): string =>
  `/project/${project_id}/plan`;
export const ProjectPlanSuiteTestIncludeRoute = (project_id: number): string =>
  `/project/${project_id}/plan_suite_test_include`;
export const ProjectProjectCapabilityDefaultRoute = (
  project_id: number
): string => `/project/${project_id}/project_capability_default`;
export const ProjectRequirementRoute = (project_id: number): string =>
  `/project/${project_id}/requirement`;
export const ProjectRunRoute = (project_id: number): string =>
  `/project/${project_id}/run`;
export const ProjectRunResultRoute = (project_id: number): string =>
  `/project/${project_id}/run_result`;
export const ProjectRunResultStepRoute = (project_id: number): string =>
  `/project/${project_id}/run_result_step`;
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
export const PurposeRoute = (): string => `/purpose`;
export const PurposeLabelAssignedRoute = (purpose_id: number): string =>
  `/purpose/${purpose_id}/label_assigned`;
export const PurposePlanRoute = (purpose_id: number): string =>
  `/purpose/${purpose_id}/plan`;
export const RequirementRoute = (): string => `/requirement`;
export const RequirementTestRoute = (requirement_id: number): string =>
  `/requirement/${requirement_id}/test`;
export const RunRoute = (): string => `/run`;
export const RunCommentRoute = (run_id: number): string =>
  `/run/${run_id}/comment`;
export const RunLabelAssignedRoute = (run_id: number): string =>
  `/run/${run_id}/label_assigned`;
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
  run_result_step_id: number
): string => `/run_result_step/${run_result_step_id}/attachment`;
export const RunResultStepCommentRoute = (run_result_step_id: number): string =>
  `/run_result_step/${run_result_step_id}/comment`;
export const RunResultStepLabelAssignedRoute = (
  run_result_step_id: number
): string => `/run_result_step/${run_result_step_id}/label_assigned`;
export const RunRunResultRoute = (run_id: number): string =>
  `/run/${run_id}/run_result`;
export const StatusRoute = (): string => `/status`;
export const StatusLabelAssignedRoute = (status_id: number): string =>
  `/status/${status_id}/label_assigned`;
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
export const SubscriptionUserRoute = (): string => `/subscription_user`;
export const SubscriptionsRoute = (): string => `/subscriptions`;
export const SubscriptionsBillingContactRoute = (
  subscriptions_id: number
): string => `/subscriptions/${subscriptions_id}/billing_contact`;
export const SubscriptionsQuoteItemRoute = (subscriptions_id: number): string =>
  `/subscriptions/${subscriptions_id}/quote_item`;
export const SubscriptionsSubscriptionUserRoute = (
  subscriptions_id: number
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
export const TestCodeRoute = (test_id: number): string =>
  `/test/${test_id}/code`;
export const TestCommentRoute = (test_id: number): string =>
  `/test/${test_id}/comment`;
export const TestLabelAssignedRoute = (test_id: number): string =>
  `/test/${test_id}/label_assigned`;
export const TestPlanSuiteTestIncludeRoute = (test_id: number): string =>
  `/test/${test_id}/plan_suite_test_include`;
export const TestQualityRoute = (): string => `/test_quality`;
export const TestQualityLabelAssignedRoute = (
  test_quality_id: number
): string => `/test_quality/${test_quality_id}/label_assigned`;
export const TestQualityTestRoute = (test_quality_id: number): string =>
  `/test_quality/${test_quality_id}/test`;
export const TestQualityTypeRoute = (): string => `/test_quality_type`;
export const TestQualityTypeLabelAssignedRoute = (
  test_quality_type_id: number
): string => `/test_quality_type/${test_quality_type_id}/label_assigned`;
export const TestQualityTypeTestQualityRoute = (
  test_quality_type_id: number
): string => `/test_quality_type/${test_quality_type_id}/test_quality`;
export const TestRequirementRoute = (test_id: number): string =>
  `/test/${test_id}/requirement`;
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
export const UserBillingContactRoute = (user_id: number): string =>
  `/user/${user_id}/billing_contact`;
export const UserExportRoute = (user_id: number): string =>
  `/user/${user_id}/export`;
export const UserFeatureUserRoute = (user_id: number): string =>
  `/user/${user_id}/feature_user`;
export const UserIntegrationRoute = (user_id: number): string =>
  `/user/${user_id}/integration`;
export const UserNotificationsRoute = (user_id: number): string =>
  `/user/${user_id}/notifications`;
export const UserQuoteRoute = (user_id: number): string =>
  `/user/${user_id}/quote`;
export const UserReportRoute = (user_id: number): string =>
  `/user/${user_id}/report`;
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
