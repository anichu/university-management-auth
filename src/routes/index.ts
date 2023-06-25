import express from 'express';
import { academicDepartmentRouter } from '../app/modules/academicDepartment/academicDepartment.route';
import { academicFacultyRouter } from '../app/modules/academicFaculty/academicFaculty.route';
import { academicSemesterRouter } from '../app/modules/academicSemester/academicSemester.route';
import { studentRouter } from '../app/modules/student/student.route';
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
    path: '/academic-faculties',
    route: academicFacultyRouter,
  },
  {
    path: '/academic-departments',
    route: academicDepartmentRouter,
  },
  {
    path: '/students',
    route: studentRouter,
  },
];

moduleRoutes.forEach(route => router.use(route.path, route.route));

export { router };
