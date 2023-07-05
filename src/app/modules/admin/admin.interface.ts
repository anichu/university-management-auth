import { Model, Types } from 'mongoose';
import { IManagementDepartment } from '../managementDepartment/managementDepartment.interface';

type IName = {
  firstName: string;
  middleName?: string;
  lastName: string;
};

export type IAdmin = {
  id: string;
  name: IName;
  gender: 'male' | 'female';
  dateOfBirth: string;
  email: string;
  contactNo: string;
  emergencyContactNo: string;
  presentAddress: string;
  permanentAddress: string;
  bloodGroup?: 'A+' | 'B+' | 'O+' | 'O-' | 'A-' | 'B-' | 'AB+' | 'AB-';
  designation: string;
  department: Types.ObjectId | IManagementDepartment;
  profileImage?: string;
};
export type AdminModel = Model<IAdmin, Record<string, unknown>>;

export type IAdminFilters = {
  searchTerm?: string;
  bloodGroup?: string;
  id?: string;
  email?: string;
  contactNo?: string;
  emergencyContactNo?: string;
  designation?: string;
  department?: string;
};
