import mongoose from 'mongoose'
import config from './config'
import app from './app'
import { errorLogger, logger } from './shared/logger'

const port = config.port || 3000

async function bootstrap() {
  try {
    await mongoose.connect(config.databaseUrl as string)
    logger.info('Database connect successfully!!!')
    app.listen(port, () => {
      logger.info(`Server is running on port ${port}`)
    })
  } catch (error) {
    errorLogger.error('Failed to connect to DB', error)
  }
}

bootstrap()
