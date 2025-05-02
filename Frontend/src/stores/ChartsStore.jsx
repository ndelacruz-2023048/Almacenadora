import { create } from "zustand";

export const useChartStore = create((set)=>({
    topMovedProductChart:[],
    setTopMovedProductChart:async()=>{
        try {
            const response = await fetch("http://localhost:2900/v1/api/productmovehistory/topproductmovement")
            const data = await response.json()
            set({topMovedProductChart:data})
            return data
        } catch (error) {
            console.error(error)
        }
    },
    productMovedByDate:[],
    setProductMovedByDate:async()=>{
        try {
            const response = await fetch("http://localhost:2900/v1/api/productmovehistory/productmovementbydate")
            const data = await response.json()
            set({productMovedByDate:data})
            return data
        } catch (error) {
            console.error(error)
        }
    }
}))

