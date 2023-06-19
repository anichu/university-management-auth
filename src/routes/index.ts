import express from 'express';
import { academicFacultyRouter } from '../app/modules/academicFaculty/academicfaculty.route';
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
  {
    path: '/academic-faculty',
    route: academicFacultyRouter,
  },
];

moduleRoutes.forEach(route => router.use(route.path, route.route));

export { router };
