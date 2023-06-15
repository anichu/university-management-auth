import cors from 'cors';
import express, { Application, Request, Response } from 'express';
import morgan from 'morgan';
import globalErrorHandler from './app/middlewares/globalErrorHandler';
import { academicSemesterRouter } from './app/modules/academicSemester/academicSemester.route';
import usersRoutes from './app/modules/user/user.route';
import config from './config';

const app: Application = express();

app.use(cors());
if (config.node_env === 'development') {
  app.use(morgan('dev'));
}
// TODO:: BODY PARSER
app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);
// Application routes
app.use('/api/v1/users', usersRoutes);
app.use('/api/v1/academic-semesters', academicSemesterRouter.router);
app.get('/', async (req: Request, res: Response) => {
  res.send('Hello');
});
app.use(globalErrorHandler);

export default app;
