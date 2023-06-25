import httpStatus from 'http-status';
import mongoose from 'mongoose';
import config from '../../../config';
import ApiError from '../../../errors/ApiError';
import AcademicSemester from '../academicSemester/academicSemester.model';
import { IStudent } from '../student/student.interface';
import Student from '../student/student.model';
import { IUser } from './user.interface';
import User from './user.model';
import { generateStudentId } from './user.utils';

const createStudent = async (
  student: IStudent,
  user: IUser
): Promise<IUser | null> => {
  // TODO:: DEFAULT PASSWORD
  if (!user.password) {
    user.password = config.default_student_pass as string;
  }

  // TODO:: set role
  user.role = 'student';

  const academicSemester = await AcademicSemester.findById(
    student.academicSemester
  );
  // TODO:: generate student id

  const session = await mongoose.startSession();
  let newUserAllData;
  try {
    session.startTransaction();
    const id = await generateStudentId(academicSemester);
    console.log(id);
    user.id = id;
    student.id = id;

    const createdStudent = await Student.create([student], {
      session,
    });

    if (!createdStudent.length) {
      throw new ApiError(httpStatus.BAD_REQUEST, 'Failed to  create student');
    }

    // TODO:: SET _ID INTO USER

    user.student = createdStudent[0]._id;

    const newUser = await User.create([user], {
      session,
    });

    if (!newUser.length) {
      throw new ApiError(httpStatus.BAD_REQUEST, 'Failed to create user');
    }

    newUserAllData = newUser[0];

    await session.commitTransaction();
    await session.endSession();

    if (newUserAllData) {
      newUserAllData = await User.findOne({
        id: newUserAllData.id,
      }).populate({
        path: 'student',
        populate: [
          {
            path: 'academicSemester',
          },
          {
            path: 'academicDepartment',
          },
          {
            path: 'academicFaculty',
          },
        ],
      });
    }
    return newUserAllData;
  } catch (error) {
    await session.abortTransaction();
    await session.endSession();
    throw error;
  }
};

export const UserService = {
  createStudent,
};
