import React, { useState } from 'react'
import { registerRequest } from '../services/app'
import toast from 'react-hot-toast'

export const useRegister = ()=> {
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState(false)

    const register = async(name, surname, address, mobilePhone, country, username, email, password)=> {
        setIsLoading(true)
        const user = {
            name,
            surname,
            address,
            mobilePhone,
            country,
            username,
            email,
            password
        }

        const response = await registerRequest(user)
        setIsLoading(false)

        if(response.error){
            setError(true)
            if(response?.e?.response?.data?.errors){
                let arrayErrors = response?.e?.response?.data?.errors
                for(const error of arrayErrors){
                    return toast.error(error.msg)
                }
            }
            return toast.error(
                response?.e?.response?.data?.msg ||
                response?.e?.data?.msg ||
                'Error al intentar iniciar seción. Usuario/Correo o contraseña invalidos'
            )
        }
        setError(false)
        return toast.success(`${user.name}, Has sido registrado exitosamente`)
    }

    return {
        register,
        isLoading,
        error,
        setError
    }
}