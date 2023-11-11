import { RequestHandler } from 'express'
import { UserService } from './user.services'

const createUser: RequestHandler = async (req, res, next) => {
  try {
    const { id, password, role } = req.body
    const result = await UserService.createUser({ id, password, role })
    res.status(200).json({
      success: true,
      message: 'User created Successfully !',
      data: result,
    })
  } catch (err) {
    next(err)
  }
}

export default {
  createUser,
}
