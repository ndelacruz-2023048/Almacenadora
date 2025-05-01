import {create} from 'zustand'
import axios from 'axios'

export const useClientStore = create((set, get) =>({
    isFormOpenClient:false,
    setIsFromOpenClient:()=>{
        const {isFormOpenClient}= get()
        set({isFormOpenClient:isFormOpenClient?false:true})
    },
    dataClient:[],
    isLoadingCliente:false,
    fetchClients: async ()=>{
        set({isLoadingCliente: true})
        const response = await fetch('http://localhost:2900/v1/api/client')
        const dataClienteJson = await response.json()
        set({dataClient:dataClienteJson})
        set({isLoadingCliente: false})
    },
    dataClientForm:{},
    setDataClientForm:(p)=>{
        set({dataClientForm:p})
    },
    isCreatingClient:false,
    responseCreatingClient:{},
    createClient:async(p)=>{
        set({isCreatingClient:true})
        const response = await fetch("http://localhost:2900/v1/api/client",{
            method:"POST",
            headers: {
                "Content-Type": "application/json" // Le dice al servidor que el cuerpo es JSON
            },
            body:JSON.stringify(p)
        })
        const responseJSON = await response.json()
        set({responseCreatingClient:responseJSON})
        set({isCreatingClient:false})
    },
    dataFile:{},
    setDataFile:(p)=>{
        const {dataFile} = get()
        set({dataFile:p})
    },
    isSameClient:[],
    fetchClientFieldExists :async (field, value) => {
        try {
          const response = await axios.get('http://localhost:2900/v1/api/client/check', {
            params: { [field]: value }
          });
          return response.data.exists;
        } catch (error) {
          console.error("Validation error:", error);
          return false;
        }
    }
}))