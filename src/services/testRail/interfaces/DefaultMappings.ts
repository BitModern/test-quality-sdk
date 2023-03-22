export interface DefaultMappings {
  priorities: {
    Low: number | null;
    Medium: number | null;
    High: number | null;
    Critical: number | null;
  };
  statuses: {
    passed: number | null;
    blocked: number | null;
    untested: number | null;
    retest: number | null;
    failed: number | null;
  };
  roles: {
    'No Access': number | null;
    'Read-only': number | null;
    Tester: number | null;
    Designer: number | null;
    Lead: number | null;
  };
  caseTypes: {
    Acceptance: number | null;
    Accessibility: number | null;
    Automated: number | null;
    Compatibility: number | null;
    Destructive: number | null;
    Functional: number | null;
    Other: number | null;
    Performance: number | null;
    Regression: number | null;
    Security: number | null;
    'Smoke & Sanity': number | null;
    Usability: number | null;
  };
}
