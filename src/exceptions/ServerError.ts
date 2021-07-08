export interface ServerError {
  message: string;
  name: string;
  stack: string;
  signal: string;
  code?: string;
  exception?: string;
  trace?: string;
  statusCode?: number;
}
