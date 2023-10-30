import express, { Application, Request, Response } from 'express'
import cors from 'cors'
import UserRouter from './app/modules/users/user.routes'
const app: Application = express()

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

//Application routes

app.use('/api/v1/users/', UserRouter)

app.get('/', async (req: Request, res: Response) => {
  res.send('Hello World! ')
})

export default app
