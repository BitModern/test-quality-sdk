export interface TestRailConfigurationGroup {
  id: number;
  name: string;
  projectId: number;
  configurations: Configuration[];
}

interface Configuration {
  id: number;
  name: string;
}
