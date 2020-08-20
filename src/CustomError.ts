export default class CustomError extends Error {
  code = '';
  errors: { [key: string]: string[] } = {};

  constructor(message: string, code: string, errors?: { [key: string]: string[] }) {
    super(message);
    this.code = code;
    this.errors = errors || {};
  }
}
