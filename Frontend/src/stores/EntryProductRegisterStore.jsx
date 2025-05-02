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
    addStockProduct:async(stockProduct,idProduct)=>{
        try {
            if (!idProduct || !stockProduct?.quantity) {
                console.error("❌ ID o stock inválidos:", idProduct, stockProduct);
                return { data: null };
              }
            const response = await fetch(`http://localhost:2900/v1/api/product/addStock/${idProduct}`,{
                method: "PUT",
                headers:{
                    "Content-Type": "application/json"
                },
                body:JSON.stringify(stockProduct)
            })
            const data = await response.json()
            return{
                data
            }
        } catch (error) {
            console.error(error)
            return { data: null };
        }
    }
}))