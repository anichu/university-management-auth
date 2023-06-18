import express from 'express';
import validateRequest from '../../middlewares/validateRequest';
import { AcademicSemesterController } from './academicSemester.controller';
import { AcademicSemesterValidation } from './academicSemester.validation';

const academicSemesterRouter = express.Router();

academicSemesterRouter
  .route('/')
  .get(AcademicSemesterController.getAllSemesters);
academicSemesterRouter
  .route('/create-semester')
  .post(
    validateRequest(AcademicSemesterValidation.createAcademicSemesterZodSchema),
    AcademicSemesterController.createAcademicSemester
  );
academicSemesterRouter
  .route('/:id')
  .get(AcademicSemesterController.getSingleSemester)
  .patch(
    validateRequest(AcademicSemesterValidation.updateAcademicSemesterZodSchema),
    AcademicSemesterController.updateSemester
  )
  .delete(AcademicSemesterController.deleteSemester);

export { academicSemesterRouter };
