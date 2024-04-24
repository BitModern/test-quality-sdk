import { LoggerBase } from './LoggerBase';

export class EmptyLogger extends LoggerBase {
  protected log(): void {
    // noop
  }
}
