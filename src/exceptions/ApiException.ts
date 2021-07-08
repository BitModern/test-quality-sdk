export interface TraceFile {
  file: string;
  line: number;
  function: string;
  class: string;
  type: string;
  args: any[];
}

export interface ApiException {
  exception_class: string;
  message: string;
  code: string;
  trace: TraceFile[];
}
