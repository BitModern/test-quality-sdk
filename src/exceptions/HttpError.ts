export class HttpError extends Error {
  public id?: string;
  public title?: string;
  public status?: number;
  public code?: string;
  public trace?: string[];

  constructor(
    message: string,
    id?: string,
    title?: string,
    status?: number,
    code?: string,
    trace?: string[]
  ) {
    super(message);
    // super wipes out passed in data, so must reset
    this.id = id;
    this.title = title;
    this.status = status;
    this.code = code;
    this.trace = trace;
  }
}
