import { Router } from 'express'
import { login, logout, register } from './auth.controller.js'
import { registerUser } from '../../middlewares/validators.js'

const api = Router()

api.post(
    '/register',
    [
        registerUser
    ],
    register
)
api.post('/login', login)
api.post('/logout', logout)

export default api