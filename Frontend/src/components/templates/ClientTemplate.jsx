import React from 'react'
import styled from 'styled-components'
import { CiGrid41 } from "react-icons/ci";
import { Card } from '../organismos/Card/Card'
import { FiMenu } from "react-icons/fi";
import { GrAdd } from "react-icons/gr";


export const ClientTemplate = () => {
  return (
    <Container>
      <Line/>
      <Section1>
        <Header>All Client (5.5k)</Header>
        <IconsContainer>
            <CiGrid41  className='iconHeader'/>
            <FiMenu className='iconHeader'/>
        </IconsContainer>
        <Add><GrAdd className='iconHeader'/> Add New</Add>
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
  background-color: transparent;
  height: 10%;
  display: flex
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
const Header = styled.div`
  display: flex;
  text-align: center;
  font-size: 25px;
  font-weight: bold;
  width: 15%;
`

const IconsContainer = styled.div`
    display: flex;
    align-items: center;
    height: 60%;
    width: 7%;
    background-color : #dedada;
    margin-left: 70%;
    margin-right: 1%;
    border-radius: 15px;
    .iconHeader{
        font-size: 30px;
        margin-left: 10px;
        color: #3636d3;
    }
`

const Line = styled.div`
  height: 1px;
  background-color: #c8c8c8;
`

const Add = styled.button`
  background-color: #5042cb;
  color: white;
  border: none;  
  border-radius: 15px;
  cursor: pointer;
  align-items: center;
  display: flex;
  width: 8%;
  height: 60%;
  .iconHeader{
        align-items: center;
        color: #ffffff;
        margin-right: 10px;
        margin-left: 4px;
    }
`