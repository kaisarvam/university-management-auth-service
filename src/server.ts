import mongoose from 'mongoose'
import config from './config'
import app from './app'
import { errorLogger, logger } from './shared/logger'
import { Server } from 'http'

const port = config.port || 3000
let server: Server

process.on('uncaughtException', error => {
  errorLogger.error('Uncaught exception', error)
  process.exit(1)
})

async function bootstrap() {
  try {
    await mongoose.connect(config.databaseUrl as string)
    logger.info('Database connect successfully!!!')
    server = app.listen(port, () => {
      logger.info(`Server is running on port ${port}`)
    })
  } catch (error) {
    errorLogger.error('Failed to connect to DB', error)
  }

  process.on('unhandledRejection', error => {
    if (server) {
      server.close(() => {
        errorLogger.error('Unhandled rejection', error)
        process.exit(1)
      })
    } else {
      process.exit(1)
    }
  })
}

bootstrap()

process.on('SIGTERM', () => {
  logger.info('SIGTERM received, shutting down gracefully')
  if (server) {
    server.close()
  }
})
