import mongoose from 'mongoose'
import config from './config/index'
import app from './app'

async function connectDb() {
  try {
    await mongoose.connect(config.mongo_uri as string)
    console.log(`Database is connected successfully`)
    app.listen(config.port, () => {
      console.log(`Example app listening on port ${config.port}`)
    })
  } catch (err) {
    console.log(err)
  }
}

connectDb()
