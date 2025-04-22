import React from 'react'
import styled from 'styled-components'
import { Card } from '../organismos/Card/Card'

export const ClientTemplate = () => {
  return (
    <Container>
      <Section1>
        Cliente--Hector Cordero
      </Section1>
      <Section2>
        <ContainerCard>
          <Card/>
          <Card/>
          <Card/>
          <Card/>
          <Card/>
          <Card/>
          <Card/>
          <Card/>
          <Card/>
          <Card/>
        </ContainerCard>
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
  background-color: red;
  height: 12%;
  `

const Section2 = styled.div`
  display: flex;
  background-color: #fff;
  height: 86%;
  border: 1px solid #969595;
  border-radius: 20px;
`

const ContainerCard = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  height: 90%;
  width: 98%;
  margin: auto;
  background-color: aliceblue;
  overflow-y: scroll;
`
