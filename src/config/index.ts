import dotenvn from 'dotenv'
import path from 'path'
dotenvn.config({ path: path.join(process.cwd(), '.env') })
export default {
  port: process.env.PORT,
  databaseUrl: process.env.DATABASE_URL,
  defaultUserPassword: process.env.DEFAULT_USER_PASS,
}
