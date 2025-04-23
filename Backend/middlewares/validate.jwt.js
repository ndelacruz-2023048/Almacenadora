'use strict'
//VAlidacion para usuario verifivar al usuario desde el toquen
/*import jwt from 'jsonwebtoken'

export const validateJwt = async (req, res, next) =>{ 
    try{
        let secretKey = process.env.SECRET_KEY;
        let { authorization } = req.headers;
        
        if (!authorization) return res.status(401).send({ message: 'Unauthorized' })

        let decoded = jwt.verify(authorization, secretKey)

        let user = await User.findById(decoded.uid).select('-password')

        if (!user) return res.status(401).send({ message: 'User not found' })

        req.user = user
        
        next()
    } catch (err){
        console.error(err)
        return res.status(401).send({ message: 'Invalid credentials' })
    }
}

export const isAdmin = (req, res, next)=>{
    if (req.user.role !== 'ADMIN') {
        return res.status(403).send({ message: 'Access denied. Admins only.' })
    }
    next()
}*/