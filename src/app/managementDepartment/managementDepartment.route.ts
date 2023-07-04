import express from 'express';
import validateRequest from '../middlewares/validateRequest';
import { ManagementDepartmentController } from './ManagementDepartment.controller';
import { ManagementDepartmentValidation } from './managementDepartment.validation';

const router = express.Router();

router
  .route('/create-management')
  .post(
    validateRequest(
      ManagementDepartmentValidation.createManagementDepartmentZodSchema
    ),
    ManagementDepartmentController.createDepartment
  );
router.route('/').get(ManagementDepartmentController.getAllDepartments);
router
  .route('/:id')
  .delete(ManagementDepartmentController.deleteDepartment)
  .get(ManagementDepartmentController.getSingleDepartment)
  .patch(ManagementDepartmentController.updateDepartment);

export const manageDepartmentRouter = router;
