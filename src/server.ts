import mongoose from 'mongoose'
import config from './config'
import app from './app'

async function bootstrap() {
  try {
    await mongoose.connect(config.databaseUrl as string)
    console.log('Database Connected successfully!!!')
    app.listen(3000, () => {
      console.log(`Server is running at http://localhost:${config.port}`)
    })
  } catch (error) {
    console.log('Connect failure!!! ', error)
  }
}

bootstrap()
