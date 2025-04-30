'use strict'
import jwt from 'jsonwebtoken'
import User from '../src/User/user.model.js'

export const validateTokenJWT = async(req, res, next)=> {
    try {
        //Token por Cookie
        const token = req.cookies.access_token
        if(!token) return res.status(401).send(
            {
                success: false,
                message: 'Unauthorized'
            }
        )
        const user = jwt.verify(token, process.env.SECRET_KEY)
        const userVerify = await User.findOne({ _id: user.uid })
        if(!userVerify) return res.status(404).send(
            {
                success: false,
                message: 'User not found - unauthorized'
            }
        )
        req.user = user
        next() 

        //Token por Authorization
        /* let secretKey = process.env.SECRET_KEY
        let { authorization } = req.headers
        if(!authorization) return res.status(401).send({success: false, message: 'Unauthorized'})
        let user = jwt.verify(authorization, secretKey)
        //Validar que el usuario exista
        const validateUser = await findUser(user.uid)
        if(!validateUser) return res.status(404).send(
            {
                success: false,
                message: 'User not found - unauthorized'
            }
        )
        req.user = user
        next() */
    } catch (e) {
        console.error(e)
        return res.status(401).send(
            {
                success: false,
                message: 'Invalid credentials'
            }
        )
    }
}

export const isAdmin = (req, res, next)=>{
    try {
        const { user } = req
        if(!user  || user.role != 'ADMIN') return res.status(403).send(
            {
                success: false,
                message: `You dont have acces | username ${user.username}, is not an ADMIN`
            }
        )
        next()
    } catch (e) {
        console.error(e);
        return res.status(403).send(
            {
                success: false,
                message: 'Error with authorization'
            }
        )
    }
}
