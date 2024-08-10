import 'express-async-errors';
import express, { NextFunction, Request, Response } from 'express';
import 'dotenv/config';
import cors from 'cors';
import path from 'path';

import morgan from 'morgan';

import AppError from './shared/errors/AppError';
import morganConfig from './config/morgan';
import routes from './routes';

const app = express();

app.use(express.json({ limit: '50mb' }));
app.use(express.urlencoded({ limit: '50mb', extended: false }));

morganConfig();

app.use(morgan('dev'));
app.use(morgan('log-format'));

app.use(cors(), (req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,POST,PUT,PATCH,DELETE');
  next();
});

app.use('/uploads', express.static(path.resolve(__dirname, '..', 'uploads')));

app.use(routes);

app.use((err: Error, req: Request, res: Response, _: NextFunction) => {
  if (err instanceof AppError) {
    return res.status(err.statusCode).json({
      status: 'error',
      message: err.message,
    });
  }

  console.trace(err);

  return res.status(500).json({
    status: 'error',
    message: 'Internal server error',
  });
});

export default app;