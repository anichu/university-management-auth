import express from 'express';
import validateRequest from '../../middlewares/validateRequest';
import { AdminController } from './admin.controller';
import { AdminValidation } from './admin.validation';

const adminRouter = express.Router();

adminRouter.route('/').get(AdminController.getAllAdmins);
adminRouter
  .route('/:id')
  .get(AdminController.getSingleAdmin)
  .delete(AdminController.deleteAdmin)
  .patch(
    validateRequest(AdminValidation.updateAdminZodSchema),
    AdminController.updateAdmin
  );

export { adminRouter };
