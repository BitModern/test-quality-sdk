export type TestRailEntity =
  | 'caseTypes'
  | 'priorities'
  | 'statuses'
  | 'caseFields'
  | 'roles'
  | 'resultFields';

export type Mapping = {
  [key in TestRailEntity]: Record<string, number | string | null>;
};
