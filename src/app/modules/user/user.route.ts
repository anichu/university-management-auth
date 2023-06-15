import express from 'express';
import validateRequest from '../../middlewares/validateRequest';
import { UserController } from './user.controller';
import { UserValidation } from './user.validation';

const userRouter = express.Router();

userRouter
  .route('/create-user')
  .post(
    validateRequest(UserValidation.createUserZodSchema),
    UserController.createUser
  );

export { userRouter };
