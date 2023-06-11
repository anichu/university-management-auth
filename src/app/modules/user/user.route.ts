import express from 'express'
import createUser from './user.controller'

const router = express.Router()

router.route('/create-user').post(createUser)

export default router
