import express, { Application } from 'express'
import cors from 'cors'
import globalErrorHandler from './app/middlewares/globalErrorHandler'
import { UserRoutes } from './app/modules/users/user.routes'
const app: Application = express()

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

//Application routes

//console.log('env current :', app.get('env'))
//global error handler

app.use('/api/v1/users/', UserRoutes)

//testing route
// app.get('/', async (_req: Request, _res: Response, next: NextFunction) => {
//   Promise.reject(new Error('Unhandled Promise Rejection'))
//   next()
// })

//testing route
// app.get('/', (_req: Request, _res: Response, next: NextFunction) => {
//   console.log(x)
// })

app.use(globalErrorHandler)
export default app
