import { RequestHandler } from 'express';
import { AcademicSemesterService } from './academicSemester.service';
const createAcademicSemester: RequestHandler = async (req, res, next) => {
  const semester = req.body;
  try {
    const result = await AcademicSemesterService.createAcademicSemester(
      semester
    );
    res.status(201);
    res.json({
      success: true,
      message: 'Academic semester created successfully',
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

export const AcademicSemesterController = {
  createAcademicSemester,
};
