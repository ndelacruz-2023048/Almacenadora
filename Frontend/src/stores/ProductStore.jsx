import {create} from 'zustand'
export const useProductStore = create((set,get)=>({
    isFormOpen:false,
    setIsFormOpen:()=>{
        const {isFormOpen} = get()
        set({isFormOpen:isFormOpen?false:true})
    },
    dataFile:{},
    setDataFile:(p)=>{
        const {dataFile} = get()
        set({dataFile:p})
    },
    dataProducts:{},
    setDataProducts:(p)=>{
        set({dataProducts:p})
    },
    isCreatingProduct:false,
    responseCreatingProduct:{},
    createProduct:async(p)=>{
        set({isCreatingProduct:true})
        const response = await fetch("http://localhost:2900/v1/api/product",{
            method:"POST",
            headers: {
                "Content-Type": "application/json" // Le dice al servidor que el cuerpo es JSON
            },
            body:JSON.stringify(p)
        })
        const responseJSON = await response.json()
        set({responseCreatingProduct:responseJSON})
        set({isCreatingProduct:false})
    },
    isListOptionsOpen:false,
    setIsListOptionsOpen:()=>{
        const {isListOptionsOpen} = get()
        set({isListOptionsOpen:isListOptionsOpen?false:true})
    }
}))