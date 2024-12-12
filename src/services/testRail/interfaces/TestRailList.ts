import { type TestRailLink } from './TestRailLink';

export interface TestRailList {
  offset: number;
  limit: number;
  size: number;
  links: TestRailLink;
}
