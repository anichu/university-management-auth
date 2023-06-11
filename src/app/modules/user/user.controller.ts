import { Request, Response } from 'express'
import usersServices from './user.service'
const createUser = async (req: Request, res: Response) => {
  const data = req.body
  try {
    const result = await usersServices.createUser(data)
    res.status(201)
    res.json({
      success: true,
      message: 'user created successfully',
      data: result,
    })
  } catch (error) {
    res.status(400).json({
      success: false,
      message: 'failed to create user',
    })
  }
}

export default createUser
