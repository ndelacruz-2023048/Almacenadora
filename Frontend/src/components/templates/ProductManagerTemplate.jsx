import { useState } from 'react'
import styled from 'styled-components'
import { HeaderSectionContent } from '../organismos/HeaderSectionContent'
import { FooterSectionContent } from '../organismos/FooterSectionContent'
import { BodySectionContent } from '../organismos/BodySectionContent'
import { Outlet } from 'react-router'
import { useProductStore } from '../../stores/ProductStore'
import { LottieAnimacion } from '../atomos/LottieAnimation'
import empty_animacion from '../../assets/empty_animation.json'

export const ProductManagerTemplate = () => {
  const [activeTab, setActiveTab] = useState(0); // 0 para Users, 1 para Companies

  const handleTabChange = (index) => {
    setActiveTab(index);
  };

  const {listProducts}= useProductStore()
  const {message} = listProducts;

  return (
    <Wrapper>
      <Outlet/>
      <Header>
        <HeaderSectionContent onTabChange={handleTabChange} activeTab={activeTab} />
      </Header>
      {
        message?.length >0 ? (
        <>
        <Body>
          {activeTab === 0 && <BodySectionContent />}
          {activeTab === 1 && <BodySectionContent />}
        </Body>
        <Footer>
          <FooterSectionContent/>
        </Footer>
        </>):(
          <div className='container_animation'>
            <LottieAnimacion animacion={empty_animacion} width={10} height={10}/>
          </div>
        )
      }
    </Wrapper>
  )
}

const Wrapper = styled.div`
  background-color: #fff;
  height: 100%;
  .container_animation{
    display: flex;
    justify-content: center;
    height: 80%;
  }
`

const Header = styled.section`
  background-color: white;
  height: auto;
`

const Body = styled.section`
  background-color: white;
  height: auto;
`

const Footer = styled.section`
  background-color: white;
  height: auto;
`