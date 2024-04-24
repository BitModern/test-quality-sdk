import { type LoggerInterface } from './LoggerInterface';

/**
 * core.Log
 * ------------------------------------------------
 *
 * This is the main LoggerBase Object. You can create a scope logger
 * or directly use the static log methods.
 *
 * By Default it uses the debug-adapter, but you are able to change
 * this in the start up process in the core/index.ts file.
 */
export abstract class LoggerBase implements LoggerInterface {
  public static DEFAULT_SCOPE = 'app';

  public static parsePathToScope(filepath: string): string {
    if (filepath) {
      const sp = filepath.split('/');
      const len = sp.length;
      const filename = sp[len - 1];
      return filename;
    }
    return filepath;
  }

  protected scope?: string;

  constructor(scope?: string) {
    this.scope = LoggerBase.parsePathToScope(scope ?? LoggerBase.DEFAULT_SCOPE);
  }

  public debug(message: string, ...args: any[]): void {
    this.log('debug', message, ...args);
  }

  public info(message: string, ...args: any[]): void {
    this.log('info', message, ...args);
  }

  public warn(message: string, ...args: any[]): void {
    this.log('warn', message, ...args);
  }

  public error(message: string, ...args: any[]): void {
    this.log('error', message, ...args);
  }

  protected abstract log(level: string, message: string, ...meta: any[]): void;

  protected formatScope(): string {
    return this.scope !== undefined ? `[${this.scope}]` : '';
  }
}
