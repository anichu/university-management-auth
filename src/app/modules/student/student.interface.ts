import { Model, Types } from 'mongoose';
import { IAcademicDepartment } from '../academicDepartment/academicDepartment.interface';
import { IAcademicFaculty } from '../academicFaculty/academicFaculty.interface';
import { IAcademicSemester } from '../academicSemester/academicSemester.interface';

type IGuardian = {
  fatherName: string;
  fatherOccupation: string;
  fatherContactNo: string;
  motherName: string;
  motherOccupation: string;
  motherContactNo: string;
  address: string;
};

type ILocalGuardian = {
  name: string;
  occupation: string;
  contactNo: string;
  address: string;
};

type IName = {
  firstName: string;
  middleName?: string;
  lastName: string;
};

export type IStudent = {
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
  guardian: IGuardian;
  localGuardian: ILocalGuardian;
  academicFaculty: Types.ObjectId | IAcademicFaculty;
  academicDepartment: Types.ObjectId | IAcademicDepartment;
  academicSemester: Types.ObjectId | IAcademicSemester;
  profileImage?: string;
};
export type StudentModel = Model<IStudent, Record<string, unknown>>;

export type IStudentFilters = {
  searchTerm?: string;
  bloodGroup?: string;
  id?: string;
  email?: string;
  contactNo?: string;
  emergencyContactNo?: string;
};
