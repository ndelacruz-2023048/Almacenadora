import React, { useState } from 'react'
import styled from 'styled-components'

export const SettingsTemplate = () => {
  const [switches, setSwitches] = useState(Array(6).fill(false))

  const toggleSwitch = (index) => {
    setSwitches(prev => {
      const updated = [...prev]
      updated[index] = !updated[index]
      return updated
    })
  }

  return (
    <Container>
      <Bar />
      <h1>Settings</h1>
      <Section>
        {[0, 1].map(row => (
          <Row key={row}>
            {[0, 1, 2].map(col => {
              const index = row * 3 + col;
              return (
                <Config key={index}>
                  <Logo>
                    <h3>Light</h3>
                  </Logo>
                  <Bar />
                  <Desc>
                    <p>Modo oscuro que cambia color</p>
                  </Desc>
                  <MiniBar />
                  <Btn>
                    <SwitchContainer onClick={() => toggleSwitch(index)} isOn={switches[index]}>
                      <SwitchBall isOn={switches[index]} />
                    </SwitchContainer>
                  </Btn>
                </Config>
              );
            })}
          </Row>
        ))}
      </Section>
    </Container>
  )
}

const Container = styled.div`
  padding: 40px;
  width: 100%;
  box-sizing: border-box;
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

const MiniBar = styled.div`
  height: 2px;
  width: 100%;
  background-color: rgb(185, 185, 185);
  margin: 10px 0;
`

const Btn = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 10px;
`

const SwitchContainer = styled.div`
  width: 50px;
  height: 24px;
  background-color: ${(props) => (props.isOn ? '#4CAF50' : '#ccc')};
  border-radius: 24px;
  position: relative;
  cursor: pointer;
  transition: background-color 0.3s;
`

const SwitchBall = styled.div`
  width: 20px;
  height: 20px;
  background-color: white;
  border-radius: 50%;
  position: absolute;
  top: 2px;
  left: ${(props) => (props.isOn ? '26px' : '2px')};
  transition: left 0.3s;
`