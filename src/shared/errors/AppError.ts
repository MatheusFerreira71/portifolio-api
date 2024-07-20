export default class AppError {
  public readonly message: string;

  public readonly context?: string;

  public readonly statusCode: number;

  constructor(message: string, statusCode = 400, context?: string) {
    this.message = message;
    this.context = context;
    this.statusCode = statusCode;
  }
}