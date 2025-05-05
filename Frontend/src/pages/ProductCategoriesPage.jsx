import React from 'react'
import { ProductCategoriesTemplate } from '../components/templates/ProductCategoriesTemplate'
import { useProductCategory } from '../stores/ProductCategoryStore'
import {useQuery} from '@tanstack/react-query'
import { SyncLoader } from 'react-spinners'

export const ProductCategoriesPage = () => {
  const {fetchProductCategories} = useProductCategory()
  const {isLoading} = useQuery({queryKey:['listCategoriesProducts'],queryFn:fetchProductCategories})
  if(isLoading){
    return ( <SyncLoader
      size={20}/>)
  }
  return (
    <ProductCategoriesTemplate/>
  )
}
