import { AnyZodObject } from 'zod'
import { NextFunction, Request, Response } from 'express'

const validateRequest =
  (schema: AnyZodObject) =>
  async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      schema.parseAsync({
        body: req.body,
        query: req.query,
        params: req.params,
        cookies: req.cookies,
      })
      return next()
    } catch (err) {
      next(err)
    }
  }

export default validateRequest
