import { Request, Response } from 'express'
import { createUserService } from './users.services'

export const createUserController = async (req: Request, res: Response) => {
  try {
    const { id, password, role } = req.body
    const result = await createUserService({ id, password, role })
    res.status(200).json({
      success: true,
      message: 'User created Successfully !',
      data: result,
    })
  } catch (err) {
    res.status(400).json({ success: false, message: 'Failed to create user !' })
  }
}
