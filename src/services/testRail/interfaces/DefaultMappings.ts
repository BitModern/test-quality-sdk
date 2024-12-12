export interface MapValue {
  name: string;
  id: number;
  target_id?: number | string;
}

export interface DefaultMappings {
  priorities: MapValue[];
  statuses: MapValue[];
  roles: MapValue[];
  caseTypes: MapValue[];
  caseFields: MapValue[];
}
