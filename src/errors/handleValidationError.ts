import mongoose from 'mongoose';
import { IGenericErrorResponse } from '../interfaces/common';

export const handleValidationError = (
  error: mongoose.Error.ValidationError
): IGenericErrorResponse => {
  const errors = Object.values(error.errors).map((element: any) => {
    return {
      path: element?.path,
      message: element?.message,
    };
  });
  const statusCode = 400;
  return {
    statusCode,
    message: 'Validation Error',
    errorMessages: errors,
  };
};
