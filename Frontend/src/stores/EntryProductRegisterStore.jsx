import { create } from "zustand";


export const useEntryProductRegister = create((set, get) => ({
    isEntryProductFormOpen: false,
    setIsEntryProductFormOpen: () => {
        const {isEntryProductFormOpen} = get()
        set({isEntryProductFormOpen:isEntryProductFormOpen?false:true})
    },
    dataProduct:[],
    isLoading:false,
    fetchAllProducts:async()=>{
        set({isLoading:true})
        const dataEntryProduct = await fetch("http://localhost:2900/v1/api/product")
        const dataJson = await dataEntryProduct.json()
        set({dataProduct:dataJson})
        set({isLoading:false})
    },
    dataEntryProduct:{},
    setDataEntryProduct:(p)=>{
        set({dataEntryProduct:p})
    },

}))