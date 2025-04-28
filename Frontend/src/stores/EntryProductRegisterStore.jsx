import { create } from "zustand";


export const useEntryProductRegister = create((set, get) => ({
    setEntryRegisterProductForm: false,
    isEntryProductFormOpen: false,
    setIsEntryProductFormOpen: () => {
        const { isEntryProductFormOpen } = get();
        set({isEntryProductFormOpen: isEntryProductFormOpen ? false : true});
    },
    dataEntryRegisterProduct:[],
    isLoading:false,
    fetchEntryRegisterProduct:async()=>{
        set({isLoading:true})
        const dataEntryProduct = await fetch("http://localhost:2900/v1/api/productCategory")
        const dataJson = await dataEntryProduct.json()
        set({dataEntryRegisterProduct:dataJson})
        set({isLoading:false})
    }
}))