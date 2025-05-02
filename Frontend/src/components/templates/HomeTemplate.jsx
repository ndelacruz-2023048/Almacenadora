import React from 'react'
import styled from 'styled-components'
import { TopMovedProductsChart } from '../organismos/DashboardDesign/TopMovedProductsChart'
import { MovedProductByDate } from '../organismos/DashboardDesign/MovedProductByDate'
import { CardTotals } from '../organismos/Card/CardTotals'
import { useProviderStore } from '../../stores/ProviderStore'
import { useProductStore } from '../../stores/ProductStore'
import { useClientStore } from '../../stores/ClientStore'

export const HomeTemplate = () => {
  const {dataProvider} = useProviderStore()
  const {listProducts} = useProductStore()
  const {dataClient} = useClientStore()
  const countProviders = dataProvider?.providers?.length
  const countProducts = listProducts?.message?.length
  const countClients = dataClient?.clients?.length
  
  return (
    <Container>
      <section className='section1'>
        <div className='containerTotals'>
          <CardTotals icon="fluent-color:comment-multiple-24" count={countClients} title="Clients" path="/clients"/>
          <CardTotals icon="fluent-color:reward-20" count={countProviders} title="Providers" path="provider"/>
          <CardTotals icon="fluent-color:news-16" count={countProducts} title="All products" path="products"/>
        </div>
        <div className='containerTopMovementProducts'>
            <TopMovedProductsChart/>
        </div>
      </section>
      <section className='section2'>
          
          <div className='containerProduct'>
            
          </div>
          <div className='containerProductMovementByDate'>
            <MovedProductByDate/>
          </div>
      </section>
        
    </Container>
  )
}

const Container = styled.div`
    display: flex;
    height: 100%;
    /* background-color: red; */
    .section1{
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      width: 60%;
      .containerTotals{
        display: flex;
        justify-content: space-between;
        width: 100%;
        height: 20%;
        /* background-color: green; */
      }
      .containerTopMovementProducts{
        height: 75%;
        /* background-color: yellow; */
      }
    }

    
    .section2{
      /* background-color: orange; */
      width: 40%;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      .containerProduct{
        height: 20%;
      }
      .containerProductMovementByDate{
        height: 70%;
      }
    }

    .containerTotals{
    }
`