import { RequestHandler } from 'express';
import { UserService } from './user.service';

const createUser: RequestHandler = async (req, res, next) => {
  const data = req.body;
  try {
    const result = await UserService.createUser(data);
    res.status(201);
    res.json({
      success: true,
      message: 'user created successfully',
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

export const UserController = {
  createUser,
};
