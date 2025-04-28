import React from 'react'
import styled from 'styled-components'
import photoProfile from '../../../assets/photoProfile.avif'

export const CardProfile = () => {
  return (
    <Container>
      <Section>
        <Data>
          <h5>pingu@gmail.com</h5>
          <Image src={photoProfile}/>
          <h3>¡Hola Pinguino!</h3>
          <Administrar>Administrar tu Cuenta</Administrar>
        </Data>
      </Section>
        
    </Container>
  )
}

const Container = styled.div`
    position: absolute;
    right: 5%;
    top: 110%;
    width: 500px;
    height: 700px;
    background-color:#d8d8d8;
    border-radius: 15px;
`

const Section = styled.div`
  padding: 30px;
`

const Data = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 20px;
  gap: 20px;
  height: 40%;
  align-items: center;
  justify-content: center;
`

const Image = styled.img`
    width: 125px;
    height: 125px;
    object-fit: cover;
    border-radius: 50%;
    border: 1.5px solid #28364b;
`
const Administrar = styled.button`
  height: 50px;
  font-size: 20px;
  border:1px solid #5bcbff;
  border-radius: 25px;
  width: 80%;
  background-color: #f1f1f1;
  color: #5bcbff;

  &:hover {
    background-color: #e6e6e6;
    transition: all 0.3s ease;
  }
`
