import { create } from "zustand";

export const useProductCategory = create((set,get)=>({
    dataProductCategory:[],
    isLoading:false,
    fetchProductCategories:async()=>{
        set({isLoading:true})
        const dataCategories = await fetch("http://localhost:2900/v1/api/productCategory")
        const dataJson = await dataCategories.json()
        console.log(dataJson);
        
        set({dataProductCategory:dataJson})
        set({isLoading:false})
        return dataJson
    }
}))