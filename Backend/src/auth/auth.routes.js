import { Router } from 'express'
import { login } from './auth.controller.js'
import { validateTokenJWT } from '../../middlewares/validate.jwt.js'

const api = Router()

api.post('/login', login)

api.get('/protected', validateTokenJWT, (req, res) => {
    console.log('Accediendo a la ruta protegida xD');
    console.log('Usuario auntenticado: ', req.user);
    return res.json({
        success: true,
        message: 'Acceso permitido',
        user: {
            uid: req.user.uid,
            name: req.user.name
        }
    })
    
    
})

export default api