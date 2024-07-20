import morgan from 'morgan';
import { Request } from 'express';

export default function morganConfig(): void {
  morgan.token('req-body', (req: Request) => {
    const { password, ...body } = req.body;

    return `Body: ${JSON.stringify(body)}`;
  });

  morgan.format('log-format', `:req-body`);
}