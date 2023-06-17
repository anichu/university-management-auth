import { NextFunction, Request, Response } from 'express';
import httpStatus from 'http-status';
import { paginationFields } from '../../../constants/pagination';
import catchAsync from '../../../shared/catchAsync';
import pick from '../../../shared/pick';
import { sendResponse } from '../../../shared/sendResponse';
import { academicSemesterFilterableFields } from './academicSemester.constants';
import { IAcademicSemester } from './academicSemester.interface';
import { AcademicSemesterService } from './academicSemester.service';
const createAcademicSemester = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    const semester = req.body;
    const result = await AcademicSemesterService.createAcademicSemester(
      semester
    );

    sendResponse<IAcademicSemester>(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Academic semester created successfully',
      data: result,
    });
    next();
  }
);

const getAllSemesters = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    const filters = pick(req.query, academicSemesterFilterableFields);
    console.log(filters);
    const paginationOptions = pick(req.query, paginationFields);
    const result = await AcademicSemesterService.getAllSemesters(
      filters,
      paginationOptions
    );

    sendResponse<IAcademicSemester[]>(res, {
      statusCode: httpStatus.OK,
      success: true,
      meta: result.meta,
      message: 'Semester retrieved successfully',
      data: result.data,
    });
  }
);

export const AcademicSemesterController = {
  createAcademicSemester,
  getAllSemesters,
};
