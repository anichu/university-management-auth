import { SortOrder } from 'mongoose';
import { paginationHelpers } from '../../../helpers/paginationHelpers';
import { IGenericResponse } from '../../../interfaces/common';
import { IPaginationOptions } from '../../../interfaces/pagination';
import {
  IAcademicDepartment,
  IAcademicDepartmentFilters,
} from './academicDepartment.interface';
import {
  default as AcademicDepartment,
  default as AcademicFaculty,
} from './academicDepartment.model';

const createAcademicDepartment = async (
  payload: IAcademicDepartment
): Promise<IAcademicDepartment | null> => {
  const result = (await AcademicDepartment.create(payload)).populate(
    'academicFaculty'
  );
  return result;
};

const updateAcademicDepartment = async (
  id: string,
  payload: IAcademicDepartment
): Promise<IAcademicDepartment | null> => {
  const result = await AcademicDepartment.findOneAndUpdate(
    { _id: id },
    payload,
    {
      new: true,
    }
  );
  return result;
};

const deleteAcademicDepartment = async (id: string) => {
  const result = await AcademicDepartment.findByIdAndDelete(id);
  return result;
};

const findSingleAcademicDepartment = async (
  id: string
): Promise<IAcademicDepartment | null> => {
  const result = await AcademicFaculty.findById(id).populate('academicFaculty');
  return result;
};

const getAllAcademicDepartment = async (
  filters: IAcademicDepartmentFilters,
  paginationOptions: IPaginationOptions
): Promise<IGenericResponse<IAcademicDepartment[]>> => {
  const { searchTerm } = filters;
  const whereCondition = searchTerm
    ? {
        title: {
          $regex: searchTerm,
          $options: 'i',
        },
      }
    : {};

  const { page, limit, skip, sortBy, sortOrder } =
    paginationHelpers.calculatePagination(paginationOptions);
  const sortCondition: {
    [key: string]: SortOrder;
  } = {};

  if (sortBy && sortOrder) {
    sortCondition[sortBy] = sortOrder;
  }

  const result = await AcademicDepartment.find(whereCondition)
    .populate('academicFaculty')
    .sort(sortCondition)
    .skip(skip)
    .limit(limit);
  const total: number = await AcademicDepartment.countDocuments();
  return {
    meta: {
      page: page,
      total: total,
      limit: limit,
    },
    data: result,
  };
};

export const AcademicDepartmentService = {
  createAcademicDepartment,
  updateAcademicDepartment,
  deleteAcademicDepartment,
  findSingleAcademicDepartment,
  getAllAcademicDepartment,
};
