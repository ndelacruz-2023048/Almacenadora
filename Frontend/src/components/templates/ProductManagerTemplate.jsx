import React from 'react'
import styled from 'styled-components'
import { HeaderSectionContent } from '../organismos/HeaderSectionContent'
import { FooterSectionContent } from '../organismos/FooterSectionContent'
import { BodySectionContent } from '../organismos/BodySectionContent'
import { Outlet } from 'react-router'


export const ProductManagerTemplate = () => {
  return (
    <Wrapper>
      <Outlet/>
      <Header>
        <HeaderSectionContent/>
      </Header>
      <Body>
        tabla encabezado "falta"
        <BodySectionContent/>
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