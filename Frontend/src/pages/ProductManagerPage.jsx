import React from 'react'
import { ProductManagerTemplate } from '../components/templates/ProductManagerTemplate'
import { useQuery } from '@tanstack/react-query'
import { useProductStore } from '../stores/ProductStore'
import { ClipLoader,SyncLoader
} from "react-spinners";

export const ProductManagerPage = () => {
  const {listProducts,fetchProducts}= useProductStore()
  const {isLoading,data} = useQuery({queryKey:['listProducts'],queryFn:fetchProducts})
  if(isLoading){
    return ( <SyncLoader
      size={20}/>)
  }
  return (
        <ProductManagerTemplate/>
  )
}
