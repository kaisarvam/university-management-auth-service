import express from 'express'
import { createUserController } from './users.controllers'
const UserRouter = express.Router()

UserRouter.post('/create-user', createUserController)

export default UserRouter
