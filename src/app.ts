import cors from 'cors';
import express, { Application, NextFunction, Request, Response } from 'express';
import httpStatus from 'http-status';
import morgan from 'morgan';
import globalErrorHandler from './app/middlewares/globalErrorHandler';
import config from './config';
import { router } from './routes';

const app: Application = express();

app.use(cors());
if (config.node_env === 'development') {
  app.use(morgan('dev'));
}
// TODO:: BODY PARSER
app.use(express.json());

app.use('/api/v1', router);
app.use(
  express.urlencoded({
    extended: true,
  })
);
// Application routes

app.get('/', async (req: Request, res: Response) => {
  res.send('Hello');
});

app.use(globalErrorHandler);

//TODO:: Handle not Found

app.use((req: Request, res: Response, next: NextFunction) => {
  res.status(httpStatus.NOT_FOUND).json({
    success: false,
    message: 'Not Found',
    errorMessages: [
      {
        path: req.originalUrl,
        message: 'Api Not Found',
      },
    ],
  });
  //next();
});

export default app;
