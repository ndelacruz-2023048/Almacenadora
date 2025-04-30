import React, { useState } from 'react'
import { loginRequest } from '../services/app'
import toast from 'react-hot-toast'

export const useLogin = () => {
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState(false)

    const login = async(userLogin, password)=> {
        setIsLoading(true)
        const user = {
            userLogin,
            password
        }

        const response = await loginRequest(user)
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
        const userName = response.data.loggedUser.name;
        return toast.success(`Bienvenido, ${userName}`);
    }

    return {
        login,
        isLoading,
        error,
        setError
    }
}
