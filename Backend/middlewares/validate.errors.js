import { validationResult } from "express-validator"

export  const validateErros = (req, res, next) => {
    const error = validationResult(req)
    if(!error.isEmpty()){
        return res.status(400).json(error)
    }
    next()
}

export const validateErrorsWithoutFiles = (req, res, next)=>{
    const errors = validationResult(req)
    console.log(validationResult(req))
    if(!errors.isEmpty()){
        return res.status(400).send(
            {
                success: false,
                message: 'Error with validations',
                errors: errors.errors
            }
        )
    }
    next()
}