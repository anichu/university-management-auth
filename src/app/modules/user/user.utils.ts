/* eslint-disable no-undefined */
import { IAcademicSemester } from '../academicSemester/academicSemester.interface';
import User from './user.model';

export const findLastFacultyId = async (): Promise<string | undefined> => {
  const lastFaculty = await User.findOne(
    { role: 'faculty' },
    {
      id: 1,
      _id: 0,
    }
  )
    .sort({
      createdAt: -1,
    })
    .lean();

  return lastFaculty?.id ? lastFaculty.id.substring(4) : undefined;
};

export const findLastStudentId = async (): Promise<string | undefined> => {
  const lastStudent = await User.findOne(
    {
      role: 'student',
    },
    {
      id: 1,
      _id: 0,
    }
  )
    .sort({
      createdAt: -1,
    })
    .lean();

  return lastStudent?.id ? lastStudent.id.substring(4) : undefined;
};

export const findLastAdminId = async (): Promise<string | undefined> => {
  const lastAdmin = await User.findOne(
    { role: 'admin' },
    {
      id: 1,
      _id: 0,
    }
  )
    .sort({
      createdAt: -1,
    })
    .lean();

  return lastAdmin?.id ? lastAdmin.id.substring(4) : undefined;
};

export const generateStudentId = async (
  academicSemester: IAcademicSemester | null
): Promise<string> => {
  const currentId =
    (await findLastStudentId()) || (0).toString().padStart(5, '0');
  let incrementId = (parseInt(currentId) + 1).toString();
  const incrementIdLength = incrementId.length;
  incrementId = incrementId.padStart(6 - incrementIdLength, '0');
  incrementId = `${academicSemester?.year.substring(2)}${
    academicSemester?.code
  }${incrementId}`;
  return incrementId;
};

export const generateFacultyId = async (): Promise<string> => {
  const currentId =
    (await findLastFacultyId()) || (0).toString().padStart(5, '0');
  let incrementId = (parseInt(currentId) + 1).toString();
  const incrementIdLength = incrementId.length;
  incrementId = incrementId.padStart(6 - incrementIdLength, '0');
  incrementId = `F-${incrementId}`;
  return incrementId;
};

export const generateAdminId = async (): Promise<string> => {
  const currentId =
    (await findLastAdminId()) || (0).toString().padStart(5, '0');
  let incrementId = (parseInt(currentId) + 1).toString();
  const incrementIdLength = incrementId.length;
  incrementId = incrementId.padStart(6 - incrementIdLength, '0');
  incrementId = `A-${incrementId}`;
  return incrementId;
};
