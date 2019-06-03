export /* for testing */ abstract class AbstractError extends Error {
  constructor(public message = '') {
    super(message)

    this.name = new.target.name

    Object.setPrototypeOf(this, new.target.prototype)
  }
}

// tslint:disable:max-classes-per-file
export class LogicError extends AbstractError {}
export class UnreachableError extends AbstractError {}
export class ValidationError extends AbstractError {}
