import mongoose from 'mongoose'
import config from './config'
import app from './app'

const port = config.port || 3000

async function bootstrap() {
  try {
    await mongoose.connect(config.databaseUrl as string)
    console.log('Database Connected successfully!!!')
    app.listen(port, () => {
      console.log(`Server is running at http://localhost:${port}`)
    })
  } catch (error) {
    console.log('Connect failure!!! ', error)
  }
}

bootstrap()
