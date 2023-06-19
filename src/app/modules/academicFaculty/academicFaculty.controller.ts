import { Request, Response } from 'express';
import httpStatus from 'http-status';
import { paginationFields } from '../../../constants/pagination';
import catchAsync from '../../../shared/catchAsync';
import pick from '../../../shared/pick';
import { sendResponse } from '../../../shared/sendResponse';
import { academicFacultyFilterableFields } from './academicFaculty.constants';
import { IAcademicFaculty } from './academicFaculty.interface';
import { AcademicFacultyService } from './academicFaculty.service';

const createAcademicFaculty = catchAsync(
  async (req: Request, res: Response) => {
    const faculty = req.body;
    const result = await AcademicFacultyService.createAcademicFaculty(faculty);
    sendResponse<IAcademicFaculty>(res, {
      statusCode: httpStatus.CREATED,
      success: true,
      message: 'Academic faculty successfully created',
      data: result,
    });
  }
);

const updateAcademicFaculty = catchAsync(
  async (req: Request, res: Response) => {
    const updatedAcademicFaculty = req.body;
    const id: string = req.params.id;
    const result = await AcademicFacultyService.updateAcademicFaculty(
      id,
      updatedAcademicFaculty
    );
    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Academic faculty updated successfully',
      data: result,
    });
  }
);
const deleteAcademicFaculty = catchAsync(
  async (req: Request, res: Response) => {
    const id: string = req.params.id;
    const result = await AcademicFacultyService.deleteAcademicFaculty(id);
    sendResponse<IAcademicFaculty>(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Academic faculty deleted successfully',
      data: result,
    });
  }
);
const getAcademicFacultySingleOne = catchAsync(
  async (req: Request, res: Response) => {
    const id: string = req.params.id;
    const result = await AcademicFacultyService.findSingleAcademicFaculty(id);
    sendResponse<IAcademicFaculty>(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Academic faculty get successfully',
      data: result,
    });
  }
);
const getAllAcademicFaculty = catchAsync(
  async (req: Request, res: Response) => {
    const paginationOptions = pick(req.query, paginationFields);
    const filters = pick(req.query, academicFacultyFilterableFields);

    const result = await AcademicFacultyService.getAllAcademicFaculty(
      filters,
      paginationOptions
    );
    sendResponse<IAcademicFaculty[]>(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Academic faculty get successfully',
      meta: result.meta,
      data: result.data,
    });
  }
);

export const AcademicFacultyController = {
  createAcademicFaculty,
  updateAcademicFaculty,
  deleteAcademicFaculty,
  getAcademicFacultySingleOne,
  getAllAcademicFaculty,
};
