import React, { useState } from 'react';
import styled from 'styled-components';
import { ModalInventoryReport } from '../organismos/Modal/ModalInventoryReport';
import { ModalInventoryMovReport } from '../organismos/Modal/ModalInventoryMovReport';
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
              <Logo></Logo>
              <Desc>
                <h3>Light</h3>
                <p>Modo oscuro que cambia color</p>
              </Desc>
              <Bar />
              <Btn>
                <button onClick={() => setActiveModal('inventory')}>Inventario</button>
              </Btn>
            </Config>

            <Config>
              <Logo></Logo>
              <Desc>
                <h3>Movimientos</h3>
                <p>Reporte de movimientos de inventario</p>
              </Desc>
              <Bar />
              <Btn>
                <button onClick={() => setActiveModal('movement')}>Movimientos</button>
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
  );
};

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
  z-index: 1;
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
`

const Desc = styled.div`
  padding: 10px 0;
`

const Btn = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 10px;
`
