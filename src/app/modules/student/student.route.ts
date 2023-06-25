import express from 'express';
import validateRequest from '../../middlewares/validateRequest';
import { StudentController } from './student.controller';
import { StudentValidation } from './student.validation';

const studentRouter = express.Router();

studentRouter.route('/').get(StudentController.getAllStudents);
studentRouter
  .route('/:id')
  .get(StudentController.getSingleStudent)
  .delete(StudentController.deleteStudent)
  .patch(
    validateRequest(StudentValidation.updateStudentZodSchema),
    StudentController.updateStudent
  );

export { studentRouter };
