import React from 'react'
import { ProviderTemplate } from '../components/templates/ProviderTemplate'
import { useProviderStore } from '../stores/ProviderStore'
import { useQuery } from '@tanstack/react-query'
import { SyncLoader } from 'react-spinners'

export const ProviderPage = () => {
  const {fetchProviders,dataProvider} = useProviderStore()

  const {isLoading,data} = useQuery({queryKey:['listProviders'],queryFn:fetchProviders})
  if(isLoading){
      return ( <SyncLoader
        size={20}/>)
  }
  
  return (
    <ProviderTemplate/>
  )
}
