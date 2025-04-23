import { validationResult } from "express-validator"

export const validateErrorsWithoutFiles = (req, res, next)=>{
    const errors = validationResult(req)
    if(!errors.isEmpty()){
        return res.status(400).send(
            {success: false, message: 'Validate errors', errors: errors.errors}
        )
    }
    next()
}