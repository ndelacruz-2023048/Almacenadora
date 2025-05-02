import axios from "axios";
import { create } from "zustand";


export const useEntryProductRegister = create((set, get) => ({
    isEntryProductFormOpen: false,
    setIsEntryProductFormOpen: () => {
        const {isEntryProductFormOpen} = get()
        set({isEntryProductFormOpen:isEntryProductFormOpen?false:true})
    },
    dataProduct:{},
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
    isEntryProduct:false,
    responseEntryProduct:{},
    createEntryProduct:async(p)=>{
        set({isEntryProduct:true})
        const response = await fetch("http://localhost:2900/v1/api/productmovehistory",{
            method:"POST",
            headers: {
                "Content-Type": "application/json" // Le dice al servidor que el cuerpo es JSON
            },
            body:JSON.stringify(p)
        })
        const responseJSON = await response.json()
        set({responseEntryProduct:responseJSON})
        set({isEntryProduct:false})
    },
    listHistorialProducts:[],
    fetchHistorialProducts:async()=>{
        const historialProducts = await axios.get('http://localhost:2900/v1/api/getproductmovihistoty')
        const dataJSONHistori = await historialProducts.data
        set(()=>({listHistorialProducts:dataJSONHistori}))
        return{
            dataJSONHistori
        }
    }
}))