export interface Trace {
  function: string; // The current function name.
  line: number; //The current line number.
  file: string; // The current file name.
  class: string; // The current class name.
  type: string; // The current call type. If a method call, "->" is returned. If a static method call, "::" is returned. If a function call, nothing is returned.
  args: any[]; // If inside a function, this lists the functions arguments. If inside an included file, this lists the included file name(s).
}

export class HttpError extends Error {
  public id?: string;
  public title?: string;
  public status?: number;
  public code?: string;
  public url?: string;
  public trace?: Trace[];

  constructor(
    message: string,
    id?: string,
    title?: string,
    status?: number,
    code?: string,
    url?: string,
    trace?: Trace[],
  ) {
    super(message);
    // super wipes out passed in data, so must reset
    this.id = id;
    this.title = title;
    this.status = status;
    this.code = code;
    this.url = url;
    this.trace = trace;
  }
}
