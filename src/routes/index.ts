import express from 'express';
import { academicSemesterRouter } from '../app/modules/academicSemester/academicSemester.route';
import { userRouter } from '../app/modules/user/user.route';
const router = express.Router();

const moduleRoutes = [
  {
    path: '/users',
    route: userRouter,
  },
  {
    path: '/academic-semesters',
    route: academicSemesterRouter,
  },
];

moduleRoutes.forEach(route => router.use(route.path, route.route));

export { router };
