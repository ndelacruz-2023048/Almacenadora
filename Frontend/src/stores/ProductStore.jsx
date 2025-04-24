import {create} from 'zustand'
export const useProductStore = create((set,get)=>({
    isFormOpen:false,
    setIsFormOpen:()=>{
        const {isFormOpen} = get()
        set({isFormOpen:isFormOpen?false:true})
    }
}))