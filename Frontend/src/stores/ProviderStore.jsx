import { create } from "zustand";

export const useProviderStore = create((set,get)=>({
    isFormProviderOpen:false,
    setIsFormProviderOpen:()=>{
        const {isFormProviderOpen} = get()
        set({isFormProviderOpen:isFormProviderOpen ? false:true})
    }
}))