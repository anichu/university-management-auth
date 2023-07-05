import { Schema, model } from 'mongoose';
import {
  IManagementDepartment,
  IManagementDepartmentModel,
} from './managementDepartment.interface';

export const ManagementDepartmentSchema = new Schema<IManagementDepartment>(
  {
    title: {
      type: String,
      required: true,
      unique: true,
    },
  },
  {
    timestamps: true,
  }
);

const ManagementDepartment = model<
  IManagementDepartment,
  IManagementDepartmentModel
>('ManagementDepartment', ManagementDepartmentSchema);

export default ManagementDepartment;
