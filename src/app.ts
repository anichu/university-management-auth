import express, { Application, Request, Response } from 'express'
import cors from 'cors'

const app: Application = express()

app.use(cors())

// TODO:: BODY PARSER
app.use(express.json())
app.use(
  express.urlencoded({
    extended: true,
  })
)
app.get('/', (req: Request, res: Response) => {
  res.send('Hello World!')
})

export default app
