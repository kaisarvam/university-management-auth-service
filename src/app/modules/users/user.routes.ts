import express from 'express'
import { createUserController } from './user.controllers'
const router = express.Router()

router.post('/create-user', createUserController)

export const UserRoutes = router
