import React, { useState } from 'react'
import styled from 'styled-components'
import { ModalInventoryReport } from '../organismos/Modal/ModalInventoryReport'
import { ModalInventoryMovReport } from '../organismos/Modal/ModalInventoryMovReport'
import { Icon } from '@iconify/react'
import { NavLink } from 'react-router-dom'
import InformeFullData from '../../reports/informeFullData';

export const SettingsTemplate = () => {
  const [activeModal, setActiveModal] = useState(null); // null | 'inventory' | 'movement'
  const [base64,setBase64] = useState("");
  const [switches, setSwitches] = useState(Array(6).fill(false))

  const handleClickButton =async ()=>{
    const response = await InformeFullData("b64")

  }

  const toggleSwitch = (index) => {
    setSwitches(prev => {
      const updated = [...prev]
      updated[index] = !updated[index]
      return updated
    })
  }

  return (
    <>
      {activeModal && <Backdrop onClick={() => setActiveModal(null)} />}
      <Container>
        <Bar />
        <h1>Settings</h1>
        <Section>
          <Row>
          <Config>
              <Logo>
                <Icon icon="tabler:category-filled" className='iconSetting'/>
                <NavLink to="/products/categories" className='navIcon'>
                  <Icon icon="mdi:stretch-to-page-outline" />
                </NavLink>
                
              </Logo>
              <Desc>
                <h2>Categoria</h2>
                <p>Pestaña en la cual configurar las categorias.</p>
              </Desc>
              <Bar />
              <Btn>
                <NavLink to="/products/categories" className="button-link">Ir</NavLink>
              </Btn>
            </Config>
            <Config>
              <Logo>
                <Icon icon="lsicon:report-filled" className='iconSetting'/>
                <Icon icon="mdi:stretch-to-page-outline" onClick={() => setActiveModal('inventory')}/>
              </Logo>
              <Desc>
                <h2>Inventario</h2>
                <p>Reporte del inventario completo.</p>
              </Desc>
              <Bar />
              <Btn>
                <button onClick={() => setActiveModal('inventory')} className="button-link">Inventario</button>
              </Btn>
            </Config>
            <Config>
              <Logo>
                <Icon icon="ion:calendar-sharp" className='iconSetting'/>
                <Icon icon="mdi:stretch-to-page-outline" onClick={() => setActiveModal('movement')}/>
              </Logo>
              <Desc>
                <h2>Movimientos</h2>
                <p>Reporte de movimientos de inventario</p>
              </Desc>
              <Bar/>
              <Btn>
                <button onClick={() => setActiveModal('movement')} className="button-link">Movimientos</button>
              </Btn>
            </Config>
          </Row>
        </Section>
      </Container>

      {activeModal === 'inventory' && (
        <ModalInventoryReport onClose={() => setActiveModal(null)} />
      )}
      {activeModal === 'movement' && (
        <ModalInventoryMovReport onClose={() => setActiveModal(null)} />
      )}
    </>
  )
}

const Backdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100vw;
  backdrop-filter: blur(5px);
  background-color: rgba(255, 255, 255, 0.55), 0.3;
  z-index: 10;
`

const Container = styled.div`
  padding: 40px;
  width: 100%;
  box-sizing: border-box;
  position: relative;
`

const Bar = styled.div`
  background-color: #c2c1c1;
  width: 100%;
  height: 1px;
  margin-bottom: 30px;
`

const Section = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #f8f6f6;
  padding: 20px;
  border-radius: 15px;
  gap: 40px;
`

const Row = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  width: 100%;
`

const Config = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid #9e9e9e;
  border-radius: 30px;
  width: 30%;
  padding: 20px;
  box-sizing: border-box;
  min-height: 200px;
`

const Logo = styled.div`
  padding: 10px 0;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  color: #c2c2c2;
  font-size: 30px;

  Icon:hover {
      cursor: pointer;
    }

  .navIcon{
    color: #c2c2c2;
    font-size: 30px;
  }

  .iconSetting{
    font-size: 70px;
    color:rgb(19, 40, 85);
  }
`

const Desc = styled.div`
  padding: 10px 0;
`

const Btn = styled.div`
  display: flex;
  align-items: center;
  padding-top: 10px;

  .button-link{
    width: 50%;
    height: 100%;
    display: flex;
    justify-content: center;
    text-decoration: none;
    color: inherit;
    font-size: 25px;
    border-radius: 10px;
    background-color: rgb(209, 209, 209);

    &:hover {
      background-color: rgb(156, 156, 156);
      color: #f1f1f1;
      transition: all 0.3s ease;
      cursor: pointer;
    }
  }
`