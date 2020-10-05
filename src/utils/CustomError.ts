export default class CustomError extends Error {
  code = '';
  errors: { [key: string]: string[] } = {};
  length = 0;

  constructor(message: string, code: string) {
    super(message);
    this.code = code;
  }
  setError = (key: string, message: string) => {
    if (this.errors[key]) {
      this.errors[key] = [...this.errors[key], message];
    } else {
      this.length++;
      this.errors[key] = [message];
    }
  };
}
