import axios from "axios"

const apiClient = axios.create(
    {
        baseURL: 'http://localhost:2900/v1/ark',
        timeout: 2000
    }
)

export const loginRequest = async(user) => {
    try {
        return await apiClient.post('/login', user, {
            type: 'multipart/form-data'
        })
    } catch (e) {
        return {
            error: true,
            e
        }
    }
}