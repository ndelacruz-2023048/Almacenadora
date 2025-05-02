import React from 'react'
import { ProductManagerTemplate } from '../components/templates/ProductManagerTemplate'
import { useQuery } from '@tanstack/react-query'
import { useProductStore } from '../stores/ProductStore'
import { ClipLoader,SyncLoader
} from "react-spinners";
import { useProductCategory } from '../stores/ProductCategoryStore';
import { useProviderStore } from '../stores/ProviderStore';

export const ProductManagerPage = () => {
  const {listProducts,fetchProducts}= useProductStore()
  const {fetchProductCategories} = useProductCategory()
  const {fetchProvider} = useProviderStore()
  const {isLoading,data} = useQuery({queryKey:['listProducts'],queryFn:fetchProducts})
  const categories = useQuery({queryKey:['listCategoriesProducts'],queryFn:fetchProductCategories})
  const providers = useQuery({queryKey:['listProviders'],queryFn:fetchProvider})
  if(isLoading){
    return ( <SyncLoader
      size={20}/>)
  }
  return (
        <ProductManagerTemplate/>
  )
}
