import { create } from "zustand";
import axios from 'axios';

export const useProductCategory = create((set,get)=>({
    isProductCategoryFormActive:false,
    setIsProductCategoryFormActive:()=>{
        const {isProductCategoryFormActive} = get()
        set({isProductCategoryFormActive:isProductCategoryFormActive?false:true})
    },
    dataProductCategory:[],
    isLoading:false,
    fetchProductCategories:async()=>{
        set({isLoading:true})
        const dataCategories = await fetch("http://localhost:2900/v1/api/productCategory")
        const dataJson = await dataCategories.json()
        set({dataProductCategory:dataJson})
        set({isLoading:false})
    },
    dataFile:{},
    setDataFile:(p)=>{
        const {dataFile} = get()
        set({dataFile:p})
    },
    dataProductCategory:{},
    setDataProductCategory:(p)=>{
        set({dataProductCategory:p})
    },
    isCreatingProductCategory:false,
    responseCreatingProductCategory:{},
    createProductCategory:async(p)=>{
        set({isCreatingProduct:true})
        const response = await fetch("http://localhost:2900/v1/api/productCategoryCreated",{
            method:"POST",
            headers: {
                "Content-Type": "application/json" // Le dice al servidor que el cuerpo es JSON
            },
            body:JSON.stringify(p)
        })
        const responseJSON = await response.json()
        set({responseCreatingProductCategory:responseJSON})
        set({isCreatingProductCategory:false})
    },
    isSameCategory:[],
    fetchCategoryByName:async(p)=>{
        const paramsCategorie = {
            nameCategory:p
        }
        const category = await axios.get('http://localhost:2900/v1/api/productCategory/search',
        {params:paramsCategorie})
        const dataJSON = await category.data
        set(()=>({isSameCategory:dataJSON}))
        return {
            dataJSON
        }
    }
}))