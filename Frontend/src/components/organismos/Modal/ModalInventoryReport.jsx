import React from 'react'
import styled from 'styled-components'
import { Icon } from '@iconify/react'
import InformeFullData from '../../../reports/informeFullData'

export const ModalInventoryReport = ({ onClose }) =>{
  const handleClickButton =async ()=>{
    const response = await InformeFullData("b64")
  }
    return(
        <Container>
            <FirstDiv>
                <UpT>
                    <h2>Inventory Report</h2>
                    <p>Here you can download an ".xls" file of the inventory data.</p>
                </UpT>
                <Icon icon="icomoon-free:cross" onClick={onClose} className='cross'/>
            </FirstDiv>
            <TwoDiv>
                <Convert onClick={handleClickButton}>Export XLS</Convert>
            </TwoDiv>
            <Warning>
                <p className='siren'>🚨</p>
                <TextWarning>
                    <p className='warningT'>Warning</p>
                    <p>This section is responsible for making a request 
                        to the database to receive the inventory record 
                        and convert it to Excel format.</p>
                </TextWarning>   
            </Warning>
        </Container>
    )
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: white;
  padding: 4%;
  width: 50%;
  min-height: 50%;
  border-radius: 30px;
  background-color: #2f204b;
  color: white;
  opacity: 0;
  animation: fadeIn 0.3s ease-out forwards;
  z-index: 20;

  @keyframes fadeIn {
    to {
      opacity: 1;
      transform: translate(-50%, -50%) scale(1);
    }
  }
`

const FirstDiv = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  width: 100%;

  .cross {
    font-size: 24px;
    color: rgb(119, 99, 138);
    cursor: pointer;

    &:hover {
      color: #c1b5cc;
      transition: all 0.3s ease;
    }
  }
`

const UpT = styled.div`
  display: flex;
  flex-direction: column;
  width: 70%;

  h2 {
    font-size: 50px;
    margin-bottom: 2%;
  }

  p {
    font-size: 30px;
  }
`

const TwoDiv = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-top: 4%;
`

const Convert = styled.button`
  height: 30%;
  width: 30%;
  padding: 3%;
  font-size: 30px;
  background-color: #9348a1;
  color: #f1f1f1;
  border-radius: 15px;
  cursor: pointer;

  &:hover {
    background-color: rgb(209, 130, 223);
    transition: all 0.3s ease;
  }
`

const Warning = styled.div`
  display: flex;
  width: 100%;
  margin-top: 4%;
  background-color: rgba(71, 60, 24, 0.69);
  border-radius: 15px;
  justify-content: space-between;
  align-items: flex-start;

  .siren {
    padding: 2%;
    color: rgb(247, 29, 0);
    font-size: 50px;
  }

  .warningT {
    color: #ffd103;
  }
`

const TextWarning = styled.div`
  width: 90%;
  padding: 2%;
  font-size: 25px;
  line-height: 1.5;
`