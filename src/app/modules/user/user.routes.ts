import express from 'express'
import UserController from './user.controllers'
import validateRequest from '../../middlewares/validateRequest'
import { userValidation } from './user.validation'

const router = express.Router()

router.post(
  '/create-user',
  validateRequest(userValidation.createUserZodSchema),
  UserController.createUser
)

export const UserRoutes = router
