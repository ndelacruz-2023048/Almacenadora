import React from 'react'
import { ClientTemplate } from '../components/templates/ClientTemplate'
import { useClientStore } from '../stores/ClientStore'
import { useQuery } from '@tanstack/react-query'
import { SyncLoader } from 'react-spinners'

export const ClientPage = () => {
  const {fetchClients} = useClientStore()
  const {isLoading} = useQuery({queryKey:['listClients'],queryFn:fetchClients,retry:false})

  if(isLoading){
    return ( <SyncLoader
      size={20}/>)
  }
  return (
    <ClientTemplate/>
  )
}
