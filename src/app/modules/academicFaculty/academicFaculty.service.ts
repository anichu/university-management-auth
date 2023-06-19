import { SortOrder } from 'mongoose';
import { paginationHelpers } from '../../../helpers/paginationHelpers';
import { IGenericResponse } from '../../../interfaces/common';
import { IPaginationOptions } from '../../../interfaces/pagination';
import {
  IAcademicFaculty,
  IAcademicFacultyFilters,
} from './academicFaculty.interface';
import AcademicFaculty from './academicFaculty.model';

const createAcademicFaculty = async (
  payload: IAcademicFaculty
): Promise<IAcademicFaculty | null> => {
  const result = await AcademicFaculty.create(payload);
  return result;
};

const updateAcademicFaculty = async (
  id: string,
  payload: IAcademicFaculty
): Promise<IAcademicFaculty | null> => {
  const result = await AcademicFaculty.findOneAndUpdate({ _id: id }, payload, {
    new: true,
  });
  return result;
};

const deleteAcademicFaculty = async (id: string) => {
  const result = await AcademicFaculty.findByIdAndDelete(id);
  return result;
};

const findSingleAcademicFaculty = async (
  id: string
): Promise<IAcademicFaculty | null> => {
  const result = await AcademicFaculty.findById(id);
  return result;
};

const getAllAcademicFaculty = async (
  filters: IAcademicFacultyFilters,
  paginationOptions: IPaginationOptions
): Promise<IGenericResponse<IAcademicFaculty[]>> => {
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

  const result = await AcademicFaculty.find(whereCondition)
    .sort(sortCondition)
    .skip(skip)
    .limit(limit);
  const total: number = await AcademicFaculty.countDocuments();
  return {
    meta: {
      page: page,
      total: total,
      limit: limit,
    },
    data: result,
  };
};

export const AcademicFacultyService = {
  createAcademicFaculty,
  updateAcademicFaculty,
  deleteAcademicFaculty,
  findSingleAcademicFaculty,
  getAllAcademicFaculty,
};
