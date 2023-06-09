import express, { Application, Request, Response } from 'express'
import cors from 'cors'
import userService from './app/modules/user/user.service'
import usersRoutes from './app/modules/user/user.route'
const app: Application = express()

app.use(cors())

// TODO:: BODY PARSER
app.use(express.json())
app.use(
  express.urlencoded({
    extended: true,
  })
)
// Application routes

app.use('/api/v1/users', usersRoutes)

app.get('/', async (req: Request, res: Response) => {
  res.send('Hello')
})

app.post('/', async (req: Request, res: Response) => {
  const data = req.body
  console.log(data)
  const user = await userService.createUser(data)
  res.send(user)
})

export default app
