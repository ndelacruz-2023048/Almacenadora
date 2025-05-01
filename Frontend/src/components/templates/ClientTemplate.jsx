import React, { useEffect } from 'react'
import styled from 'styled-components'
import { CiGrid41 } from "react-icons/ci";
import { CardClient } from '../organismos/Card/CardClient'
import { FiMenu } from "react-icons/fi";
import { GrAdd } from "react-icons/gr";
import { ButtonAdd } from '../atomos/ButtonAdd';
import { useClientStore } from '../../stores/ClientStore';
import {ClientForm} from "../organismos/Forms/ClientForm"
import { LottieAnimacion } from '../atomos/LottieAnimation'
import empty_animacion from '../../assets/empty_animation.json'
import { data } from 'react-router';
export const ClientTemplate = () => {

  const {isFormOpenClient, setIsFromOpenClient, dataClient, isLoadingCliente, fetchClients} = useClientStore()
  useEffect(()=>{
    fetchClients()
  },[])
  if(isLoadingCliente) return <p>Cargando....</p>
  console.log(dataClient.clients);

  return (
    <Container>
      {isFormOpenClient && <ClientForm/>}
      <Line/>
      <Section1>
        <Title>
          <Header>All Client (5.5k)</Header>
        </Title>
        <IconsContainer>
            <CiGrid41  className='iconHeader'/>
            <FiMenu className='iconHeader'/>
            <ButtonAdd setState={setIsFromOpenClient} btnBackgroundColor="#5042cb" iconName="ic:round-add" btnText="Add New" iconSize={'27px'}  btnWidth="22%"/>
        </IconsContainer>
      </Section1>

      <Section2>
        {
          dataClient?.clients?.length > 0 ? (<>
            <ContainerCard>
              {
                dataClient?.clients?.map((e)=>(
                  <CardClient 
                    clientName={e.clientName} 
                    clientUsername={e.clientUsername} 
                    clientEmail={e.clientEmail}
                    clientPhone={e.clientPhone}
                    uploadImage={e.uploadImage}
                    clientAddress={e.clientAddress}
                  />
                ))
              }
            </ContainerCard>
          </>):(
          <div className='container_animation'>
            <LottieAnimacion animacion={empty_animacion} width={200} height={200}/>
          </div>
          )
        }
      </Section2>
    </Container>
  )
}
const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
`

const Section1 = styled.div`
  display: flex;
  align-items: center;
  background-color: transparent;
  height: 10%;
  width: 100%;
`

const Title = styled.div`
display: flex;
  width: 50%;
`
const IconsContainer = styled.div`
    display: flex;
    gap: 10px;
    justify-content: end;
    width: 50%;
    border-radius: 15px;
    align-items: center;
    .iconHeader{
        font-size: 30px;
        margin-left: 10px;
        color: #3636d3;
    }
`


const Section2 = styled.div`
  display: flex;
  background-color: #fff;
  height: 86%;
  border: 1px solid #969595;
  border-radius: 20px;
  .container_animation{
    display: flex;
    justify-content: center;
    width: 100%;
  }
`

const ContainerCard = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  height: 90%;
  width: 98%;
  margin: auto;

  overflow-y: scroll;
`
const Header = styled.div`
  font-size: 25px;
  font-weight: bold;
`


const Line = styled.div`
  height: 1px;
  background-color: #c8c8c8;
`
