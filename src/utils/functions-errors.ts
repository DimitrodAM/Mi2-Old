export class AccessDeniedError extends Error {
  constructor(message = 'Access denied.') {
    super(message);
    this.name = 'AccessDeniedError';
  }
}
