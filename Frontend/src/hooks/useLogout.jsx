import { useState } from 'react';
import { logoutRequest } from '../services/app'
import { UserAuth } from '../context/AuthContext'
import { useNavigate } from 'react-router'
import toast from 'react-hot-toast'
import {jwtDecode} from 'jwt-decode'

export const useLogout = () => {
    const [isLoadingLogout, setIsLoadingLogout] = useState(false)
    const [errorLogout, setErrorLogout] = useState(false)
    const { clearAuthUser, user } = UserAuth()
    const navigate = useNavigate()

    const logout = async () => {
        setIsLoadingLogout(true)
        setErrorLogout(false)

        const response = await logoutRequest(); 

        setIsLoadingLogout(false)

        if (response?.error) {
            setErrorLogout(true)
            toast.error('Error al cerrar sesión')
            console.error('Error al cerrar sesión:', response.e)
            return false;
        }

        let userName = ''
        if (user) {
            try {
                const decodedToken = jwtDecode(user)
                userName = decodedToken?.name
            } catch (error) {
                console.error('Error al decodificar el token:', error)
            }
        }
        clearAuthUser();
        navigate('/login')
        toast.success(`Sesión cerrada exitosamente, hasta pronto ${userName || ''}`)
        return true
    }

    return {
        logout,
        isLoadingLogout,
        errorLogout,
    }
}