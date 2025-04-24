import {create} from 'zustand'
export const useClientStore = create((set) =>({
    data:[],
    isLoading:false,
    fetchClients: async ()=>{
        set({isLoading: true})
        const response = await fetch('http://localhost:2900/v1/api/client')
        const dataCliente = await response.json()
        set({isLoading: false})
        set({data:dataCliente})
    }
}))