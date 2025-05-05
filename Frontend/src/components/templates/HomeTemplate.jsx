import React from 'react'
import styled from 'styled-components'
import { TopMovedProductsChart } from '../organismos/DashboardDesign/TopMovedProductsChart'
import { MovedProductByDate } from '../organismos/DashboardDesign/MovedProductByDate'
import { CardTotals } from '../organismos/Card/CardTotals'
import { useProviderStore } from '../../stores/ProviderStore'
import { useProductStore } from '../../stores/ProductStore'
import { useClientStore } from '../../stores/ClientStore'
import { useChartStore } from '../../stores/ChartsStore'
import { useQuery } from '@tanstack/react-query'
import { LottieAnimacion } from '../atomos/LottieAnimation'
import empty_animacion from '../../assets/empty_animation.json'
export const HomeTemplate = () => {
  const {dataProvider} = useProviderStore()
  const {listProducts} = useProductStore()
  const {dataClient} = useClientStore()
  const {topMovedProductChart,setTopMovedProductChart} = useChartStore()
    const {data} = useQuery({queryKey:['topMovedProducts'],queryFn:setTopMovedProductChart,retry:false})
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
            {data?.result?.length > 0 ? (
              <TopMovedProductsChart/>
            ):(
              <div className='container_animation'>
              <LottieAnimacion animacion={empty_animacion} width={10} height={10}/>
            </div>
            )
            }
        </div>
      </section>
      <section className='section2'>
          
          <div className='containerProduct'>
            
          </div>
          <div className='containerProductMovementByDate'>
          {data?.result?.length > 0 ? (
              <MovedProductByDate/>
            ):(
              <div className='container_animation'>
              <LottieAnimacion animacion={empty_animacion} width={10} height={10}/>
            </div>
            )
            }
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
        .container_animation{
    display: flex;
    justify-content: center;
    height: 80%;
  }
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