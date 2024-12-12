import { type TestRailList } from './TestRailList';
import { type TestRailProject } from './TestRailProject';

export interface TestRailProjects extends TestRailList {
  projects: TestRailProject[];
}
