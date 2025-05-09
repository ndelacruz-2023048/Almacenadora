import React, {useEffect} from 'react'
import styled from 'styled-components'
import { CiGrid41 } from "react-icons/ci";
import { Card } from '../organismos/Card/Card'
import { FiMenu } from "react-icons/fi";
import { GrAdd } from "react-icons/gr";
import { ButtonAdd } from '../atomos/ButtonAdd';
import { useProviderStore } from '../../stores/ProviderStore';
import { ProviderForm } from '../organismos/Forms/ProviderForm';
import { CardProvider } from '../organismos/Card/CardProvider';
import { LottieAnimacion } from '../atomos/LottieAnimation'
import empty_animacion from '../../assets/empty_animation.json'

export const ProviderTemplate = () => {
  const { isProviderFormOpen, setIsFormOpen,dataProvider,fetchProvider,isLoading } = useProviderStore()
  return (
    <Container>
      {isProviderFormOpen && <ProviderForm/>}
      <Line/>
      <Section1>
        <Title>
          <Header>All Providers (5.5k)</Header>
        </Title>
        <IconsContainer>
            <CiGrid41  className='iconHeader'/>
            <FiMenu className='iconHeader'/>
            <ButtonAdd setState={setIsFormOpen} btnBackgroundColor="#5042cb" iconName="ic:round-add" btnText="Add New" iconSize={'27px'}  btnWidth="22%"/>
        </IconsContainer>
      </Section1>
      <Section2>
        {
          dataProvider?.providers?.length > 0? (<>
              <ContainerCard>
                {dataProvider?.providers?.map((e) => (
                  <CardProvider name={e.name} date={e.date} departament={e.departament} email={e.email} phone={e.phone} address={e.address} image={e.image}/>
                ))}
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
