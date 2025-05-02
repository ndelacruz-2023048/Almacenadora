import { useState } from 'react'
import styled from 'styled-components'
import { HeaderSectionContent } from '../organismos/HeaderSectionContent'
import { FooterSectionContent } from '../organismos/FooterSectionContent'
import { BodySectionContent } from '../organismos/BodySectionContent'
import { Outlet } from 'react-router'


export const ProductManagerTemplate = () => {
  const [activeTab, setActiveTab] = useState(0); // 0 para Users, 1 para Companies

  const handleTabChange = (index) => {
    setActiveTab(index);
  };

  return (
    <Wrapper>
      <Outlet/>
      <Header>
        <HeaderSectionContent onTabChange={handleTabChange} activeTab={activeTab} />
      </Header>
      <Body>
        {activeTab === 0 && <BodySectionContent />}
        {activeTab === 1 && <BodySectionContent />}
      </Body>
      <Footer>
        <FooterSectionContent/>
      </Footer>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  background-color: #fff;
  height: 100%;

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