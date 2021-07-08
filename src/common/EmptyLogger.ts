import { LoggerBase } from './LoggerBase';

export class EmptyLogger extends LoggerBase {
  constructor(scope?: string) {
    super(scope);
  }

  protected log(): void {
    // noop
  }
}
