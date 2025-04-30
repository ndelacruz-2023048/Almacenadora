import { create } from "zustand";


export const useOutProductRegisterStore = create((set, get) => ({
     
    isOutProductFormOpen: false,
    setIsOutProductFormOpen: () => {
        const {isOutProductFormOpen} = get()
        set({isOutProductFormOpen:isOutProductFormOpen?false:true})
    },
    dataProduct:[],
    isLoading:false,
    fetchAllProduct:async()=>{
        set({isLoading:true})
        const dataOutProduct = await fetch("http://localhost:2900/v1/api/product")
        const dataJson = await dataOutProduct.json()
        set({dataProduct:dataJson})
        set({isLoading:false})
    },
    dataOutProduct:{},
    setDataOutProduct:(p)=>{
        set({dataOutProduct:p})
    },
    isOutProduct:false,
    responseOutProduct:{},
    createOutProduct:async(p)=>{
        set({isOutProduct:true})
        const response = await fetch("http://localhost:2900/v1/api/productmovehistoryout",{
            method:"POST",
            headers: {
                "Content-Type": "application/json" // Le dice al servidor que el cuerpo es JSON
            },
            body:JSON.stringify(p)
        })
        const responseJSON = await response.json()
        set({responseOutProduct:responseJSON})
        set({isOutProduct:false})
    },
}))