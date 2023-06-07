import dotenv from 'dotenv'
import path from 'path'
dotenv.config({
  path: path.join(process.cwd(), '.env'),
})

console.log(process.env.PORT)

export default {
  port: process.env.PORT,
  mongo_uri: process.env.MONGO_URL,
}
