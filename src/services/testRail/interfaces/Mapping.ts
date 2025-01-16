export type TestRailEntity =
  | 'caseTypes'
  | 'priorities'
  | 'statuses'
  | 'caseFields'
  | 'roles';

export type Mapping = {
  [key in TestRailEntity]: Record<number, number | string | null>;
};
