import React from 'react'
import { HomeTemplate } from '../components/templates/HomeTemplate'
import { useQuery } from '@tanstack/react-query'
import { useProviderStore } from '../stores/ProviderStore'
import { useProductStore } from '../stores/ProductStore'
import {useClientStore} from '../stores/ClientStore'
import { SyncLoader } from 'react-spinners'

export const HomePage = () => {
  const {fetchProvider} = useProviderStore()
  const {fetchProducts} = useProductStore()
  const {fetchClients} = useClientStore()
  const providers = useQuery({queryKey:['listProviders'],queryFn:fetchProvider})
  const {isLoading,data} = useQuery({queryKey:['listProducts'],queryFn:fetchProducts})
  const clients = useQuery({queryKey:['listClients'],queryFn:fetchClients})
  if(isLoading){
    return ( <SyncLoader
      size={20}/>)
  }
  return (
    <HomeTemplate/>
  )
}

