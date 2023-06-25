import mongoose, { Schema, model } from 'mongoose';
import { bloodGroup, gender } from './student.constant';
import { IStudent, StudentModel } from './student.interface';

export const StudentSchema = new Schema<IStudent, StudentModel>({
  id: {
    type: String,
    required: true,
    unique: true,
  },
  name: {
    type: {
      firstName: {
        type: String,
        required: true,
      },
      middleName: {
        type: String,
        required: false,
      },
      lastName: {
        type: String,
        required: true,
      },
    },
  },
  gender: {
    type: String,
    required: true,
    enum: gender,
  },
  dateOfBirth: {
    type: String,
    required: true,
  },
  profileImage: {
    type: String,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  contactNo: {
    type: String,
    required: true,
    unique: true,
  },
  emergencyContactNo: {
    type: String,
    required: true,
    unique: true,
  },
  presentAddress: {
    type: String,
    required: true,
  },
  permanentAddress: {
    type: String,
    required: true,
  },
  bloodGroup: {
    type: String,
    enum: bloodGroup,
  },
  guardian: {
    required: true,
    type: {
      fatherName: { type: String, required: true },
      fatherOccupation: { type: String, required: true },
      fatherContactNo: { type: String, required: true },
      motherName: { type: String, required: true },
      motherOccupation: { type: String, required: true },
      motherContactNo: { type: String, required: true },
      address: { type: String, required: true },
    },
  },
  localGuardian: {
    required: true,
    type: {
      name: { type: String, required: true },
      occupation: { type: String, required: true },
      contactNo: { type: String, required: true },
      address: { type: String, required: true },
    },
  },
  academicFaculty: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'AcademicFaculty',
    required: true,
  },
  academicDepartment: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'AcademicDepartment',
    required: true,
  },
  academicSemester: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'AcademicSemester',
    required: true,
  },
});

const Student = model<IStudent, StudentModel>('Student', StudentSchema);

export default Student;
