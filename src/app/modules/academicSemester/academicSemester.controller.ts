import { NextFunction, Request, Response } from 'express';
import httpStatus from 'http-status';
import catchAsync from '../../../shared/catchAsync';
import { sendResponse } from '../../../shared/sendResponse';
import { AcademicSemesterService } from './academicSemester.service';
const createAcademicSemester = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    const semester = req.body;
    const result = await AcademicSemesterService.createAcademicSemester(
      semester
    );
    // res.status(201);
    // res.json({
    //   success: true,
    //   message: 'Academic semester created successfully',
    //   data: result,
    // });
    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Academic semester created successfully',
      data: result,
    });
    next();
  }
);

export const AcademicSemesterController = {
  createAcademicSemester,
};
