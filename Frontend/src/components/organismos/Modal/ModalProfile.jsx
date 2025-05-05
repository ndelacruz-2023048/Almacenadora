import React from 'react'
import photoProfile from '../../../assets/photoProfile.avif'
import { useLogout } from "../../../hooks/useLogout"
import { Icon } from '@iconify/react'
import styled from 'styled-components'

export const CardProfile = () => {
  const { logout, isLoadingLogout} = useLogout()

    const handleLogoutClick  = ()=> {
        logout()
    }

  return (
    <Container>
      <Section>
        <Data>
          <Image src={photoProfile}/>
          <h3>¡Hola Armando!</h3>
          <Administrar>Administrar tu Cuenta</Administrar>
        </Data>
        <Cuenta>
          <Lista>
            <Dato>
              <Icon icon="wpf:name" />
              Armando Emanuel
            </Dato> 
            <Dato>
              <Icon icon="wpf:name" />
              Casas Garcia
            </Dato>
            <Dato>
              <Icon icon="mingcute:birthday-2-fill" />
              15/06/2005
            </Dato>
            <Dato>
              <Icon icon="mdi:email" />
              armandoc05@gmail.com
            </Dato>
            <Dato>
              <Icon icon="mingcute:phone-fill" />
              1234-5678
            </Dato>
            <Dato>
              <Icon icon="ph:gender-intersex-bold" />
              Masculino
            </Dato>
            <Line></Line>
          </Lista>

          <Sesion onClick={handleLogoutClick}>
            <Icon icon="fluent-mdl2:leave" className='Leave'/>
            Cerrar seción
            {isLoadingLogout && <div>Cerrando sesión...</div>}
          </Sesion>
        </Cuenta>
      </Section>
        
    </Container>
  )
}

const Container = styled.div`
    position: absolute;
    right: 5%;
    top: 110%;
    width: 500px;
    height: auto;
    background-color: #d8d8d8;
    border-radius: 15px;
    z-index: 1000;
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
  border:1px solid #1d3150;
  border-radius: 25px;
  width: 80%;
  background-color: #f1f1f1;
  color: #1d3150;

  &:hover {
    background-color: #1d3150;
    transition: all 0.3s ease;
    border:1px solid #f1f1f1;
    color: #f1f1f1;
    cursor: pointer;
  }
`

const Cuenta = styled.div`
  margin-top: 20px;
  width: 100%;
  height: auto;
  background-color: #9e9e9e;
  border-radius: 30px;
`

const Lista = styled.ul`
  list-style-type: none;
  padding: 15px;
  color: #f1f1f1;
`

const Dato = styled.li`
display: flex;
  font-size: 25px;
  margin-top: 10px;
  align-items: center;
`

const Line = styled.div`
  display: flex;
  background-color: #f1f1f1;
  width: 100%;
  height: 0.5px;
  margin-top: 10px;
`

const Sesion = styled.button`
  display: flex;  
  height: 70px;
  width: 100%;
  background-color: #8a8989;
  border-radius: 30px;
  font-size: 25px;
  color: #f1f1f1;
  align-items: center;
  justify-content: center;


  &:hover {
    background-color:rgb(124, 124, 124);
    transition: all 0.3s ease;
    color: #f1f1f1;
    cursor: pointer;
  }

  .Leave {
    color: #f1f1f1;
    font-size: 25px;
  }
`
