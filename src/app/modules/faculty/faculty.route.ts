import express from 'express';
import validateRequest from '../../middlewares/validateRequest';
import { FacultyController } from './faculty.controller';
import { FacultyValidation } from './faculty.validation';

const facultyRouter = express.Router();

facultyRouter.route('/').get(FacultyController.getAllFaculties);
facultyRouter
  .route('/:id')
  .get(FacultyController.getSingleFaculty)
  .delete(FacultyController.deleteFaculty)
  .patch(
    validateRequest(FacultyValidation.updateFacultyZodSchema),
    FacultyController.updateFaculty
  );

export { facultyRouter };
