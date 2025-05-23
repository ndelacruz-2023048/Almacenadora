import { create } from "zustand";
import axios from 'axios'
export const useProviderStore = create((set, get) => ({
    isProviderFormOpen: false,

    setIsFormOpen: () => {
        const { isProviderFormOpen } = get();
        set({isProviderFormOpen: isProviderFormOpen ? false : true});
    },
    dataProvider:[],
    isLoading:false,
    fetchProvider:async()=>{
        try {
            const provider = await fetch("http://localhost:2900/v1/api/provider")
            const dataJson = await provider.json()
            set(()=>({dataProvider:dataJson}))
            return dataJson
        } catch (error) {
            console.log(error)
        }
    },
    dataFile:{},
    setDataFile:(p)=>{
        const {dataFile} = get()
        set({dataFile:p})
    },
    dataProviders:{},
    setDataProviders:(p)=>{
        set({dataProviders:p})
    },
    isCreatingProvider:false,
    responseCreatingProvider:{},
    createProvider:async(p)=>{
        set({isCreatingProvider:true})
        const response = await fetch("http://localhost:2900/v1/api/provider",{
            method:"POST",
            headers: {
                "Content-Type": "application/json" // Le dice al servidor que el cuerpo es JSON
            },
            body:JSON.stringify(p)
        })
        const responseJSON = await response.json()
        set({responseCreatingProvider:responseJSON})
        set({isCreatingProvider:false})
    },
    isSameProvider:[],
    fetchProviderByName:async(p)=>{
        const paramsProvider={
            name:p
        }
        const provider = await axios.get("http://localhost:2900/v1/api/provider/search",
        {params:paramsProvider})
        const dataJson = await provider.data
        return {dataJson:dataJson}
    }
}))