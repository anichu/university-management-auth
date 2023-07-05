import { z } from 'zod';
import { bloodGroup, gender } from '../student/student.constant';

const updateAdminZodSchema = z.object({
  body: z.object({
    name: z
      .object({
        firstName: z.string().optional(),
        middleName: z.string().optional(),
        lastName: z.string().optional(),
      })
      .optional(),
    dateOfBirth: z.string().optional(),
    gender: z.enum([...gender] as [string, ...string[]]).optional(),
    bloodGroup: z.enum([...bloodGroup] as [string, ...string[]]).optional(),
    presentAddress: z.string().optional(),
    permanentAddress: z.string().optional(),
    emergencyContactNo: z.string().optional(),
    contactNo: z.string().optional(),
    email: z.string().optional(),
    profileImage: z.string().optional(),
    designation: z.string().optional(),
    department: z.string().optional(),
  }),
});

export const AdminValidation = {
  updateAdminZodSchema,
};