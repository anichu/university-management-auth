import { Request, Response } from 'express';
import httpStatus from 'http-status';
import { paginationFields } from '../../../constants/pagination';
import catchAsync from '../../../shared/catchAsync';
import pick from '../../../shared/pick';
import { sendResponse } from '../../../shared/sendResponse';
import { academicDepartmentFilterableFields } from './academicDepartment.constants';
import { IAcademicDepartment } from './academicDepartment.interface';
import { AcademicDepartmentService } from './academicDepartment.service';

const createAcademicDepartment = catchAsync(
  async (req: Request, res: Response) => {
    const Department = req.body;
    const result = await AcademicDepartmentService.createAcademicDepartment(
      Department
    );
    sendResponse<IAcademicDepartment>(res, {
      statusCode: httpStatus.CREATED,
      success: true,
      message: 'Academic Department successfully created',
      data: result,
    });
  }
);

const updateAcademicDepartment = catchAsync(
  async (req: Request, res: Response) => {
    const updatedAcademicDepartment = req.body;
    const id: string = req.params.id;
    const result = await AcademicDepartmentService.updateAcademicDepartment(
      id,
      updatedAcademicDepartment
    );
    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Academic Department updated successfully',
      data: result,
    });
  }
);
const deleteAcademicDepartment = catchAsync(
  async (req: Request, res: Response) => {
    const id: string = req.params.id;
    const result = await AcademicDepartmentService.deleteAcademicDepartment(id);
    sendResponse<IAcademicDepartment>(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Academic Department deleted successfully',
      data: result,
    });
  }
);
const getAcademicDepartmentSingleOne = catchAsync(
  async (req: Request, res: Response) => {
    const id: string = req.params.id;
    const result = await AcademicDepartmentService.findSingleAcademicDepartment(
      id
    );
    sendResponse<IAcademicDepartment>(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Academic Department get successfully',
      data: result,
    });
  }
);
const getAllAcademicDepartment = catchAsync(
  async (req: Request, res: Response) => {
    const paginationOptions = pick(req.query, paginationFields);
    const filters = pick(req.query, academicDepartmentFilterableFields);

    const result = await AcademicDepartmentService.getAllAcademicDepartment(
      filters,
      paginationOptions
    );
    sendResponse<IAcademicDepartment[]>(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Academic Department get successfully',
      meta: result.meta,
      data: result.data,
    });
  }
);

export const AcademicDepartmentController = {
  createAcademicDepartment,
  updateAcademicDepartment,
  deleteAcademicDepartment,
  getAcademicDepartmentSingleOne,
  getAllAcademicDepartment,
};
