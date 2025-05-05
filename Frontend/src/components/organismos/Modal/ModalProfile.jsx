import React from 'react'
import styled from 'styled-components'
import photoProfile from '../../../assets/photoProfile.avif'
import { Icon } from '@iconify/react'
import { NavLink } from 'react-router-dom'

export const CardProfile = () => {
  return (
    <Container>
      <Section>
        <Data>
          <Image src={photoProfile}/>
          <h3>Armando Casas</h3>
          <h5>Administrador</h5>
        </Data>
        <Line></Line>
        <Cuenta>
          <Lista>
            <Dato>
              <NavLink to="/setting" className="Nav">
                <BTN>
                  <Icon icon="material-symbols:settings" className='Leave'/>
                  Settings
                </BTN>
              </NavLink>
            </Dato>
            <Dato>
              <BTN>
                <Icon icon="ri:logout-box-r-line" className='Leave'/>
                Log Out
              </BTN>
            </Dato>
          </Lista>
          <Line></Line>
          <p>Privacy Policy • Terms of Service</p>
        </Cuenta>
      </Section>    
    </Container>
  )
}

const Container = styled.div`
    position: absolute;
    right: 5%;
    top: 110%;
    width: 450px;
    height: auto;
    z-index: 999; 
    background-color:rgba(0, 0, 0, 0.85);
    border-radius: 15px;
    border: 1px solid #ffffff;
    backdrop-filter: blur(5px); 
`

const Section = styled.div`
  padding: 30px;
`

const Data = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 20px;
  height: 40%;
  justify-content: center;
  color: #ffffff;
  font-size: 26px;
  gap: 15px;

  h5{
  color:rgb(242, 105, 255);
  }
`

const Image = styled.img`
    width: 80px;
    height: 80px;
    object-fit: cover;
    border-radius: 50%;
    border: 1.5px solid #28364b;
`

const Cuenta = styled.div`
  width: 100%;
  height: auto;

  p {
    color: #ffffff;
    margin-top: 15px;
    font-size: 20px;
  }
`

const Lista = styled.ul`
  list-style-type: none;
  padding: 5px;
  color: #f1f1f1;
`

const Dato = styled.li`
  display: flex;

  .Nav {
    text-Decoration: none;
    width: 100%
  }
`

const Line = styled.div`
  display: flex;
  background-color:rgb(128, 128, 128);
  width: 100%;
  height: 0.5px;
  margin-top: 10px;
`

const BTN = styled.button`
  display: flex;  
  height: 70px;
  width: 100%;
  background-color:rgba(0, 0, 0, 0);
  border-radius: 0 15px 15px 0;
  font-size: 25px;
  color: #f1f1f1;
  align-items: center;
  gap: 10px;

  

  &:hover {
    background-color:rgba(0, 0, 0, 0.58);
    transition: all 0.3s ease;
    color: #f1f1f1;
    cursor: pointer;
  }

  .Leave {
    color:rgb(255, 255, 255);
    font-size: 40px;
  }
`
