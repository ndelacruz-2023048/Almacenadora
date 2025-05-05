import axios from "axios"

const apiClient = axios.create(
    {
        baseURL: 'http://localhost:2900/v1/ark',
        withCredentials: true,
        timeout: 2000
    }
)

export const registerRequest = async(user)=> {
    try {
        return await apiClient.post('/register', user)
    } catch (e) {
        return {
            error: true,
            e
        }
    }
}

export const loginRequest = async(user) => {
    try {
        return await apiClient.post('/login', user)
    } catch (e) {
        return {
            error: true,
            e
        }
    }
}

export const logoutRequest = async()=> {
    try {
        return await apiClient.post('/logout')
    } catch (e) {
        return {
            error: true,
            e
        }
    }
}