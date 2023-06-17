import express from 'express';
import validateRequest from '../../middlewares/validateRequest';
import { AcademicSemesterController } from './academicSemester.controller';
import { AcademicSemesterValidation } from './academicSemester.validation';

const academicSemesterRouter = express.Router();

academicSemesterRouter
  .route('/create-semester')
  .post(
    validateRequest(AcademicSemesterValidation.createAcademicSemesterZodSchema),
    AcademicSemesterController.createAcademicSemester
  );
academicSemesterRouter
  .route('/')
  .get(AcademicSemesterController.getAllSemesters);
export { academicSemesterRouter };
