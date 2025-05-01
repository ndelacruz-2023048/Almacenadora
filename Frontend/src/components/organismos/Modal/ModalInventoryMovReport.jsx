import React, { useState } from 'react'
import styled from 'styled-components'
import { Icon } from '@iconify/react'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import InformeDataByRangeDate from '../../../reports/InformeDataByRangeDate'


export const ModalInventoryMovReport = ({ onClose }) => {
  const [dateRange, setDateRange] = useState([null, null]);
  const [startDate, endDate] = dateRange;
  const handleClickButton =async ()=>{
    const response = await InformeDataByRangeDate("b64")
  }
  return (
    <Container>
      <FirstDiv>
        <UpT>
          <h2>Inventory Movement Report</h2>
          <p>Here you can download an ".xls" file of the inventory data.</p>
        </UpT>
        <Icon icon="icomoon-free:cross" onClick={onClose} className="cross" />
      </FirstDiv>

      <TwoDiv>
        <DateRangeWrapper>
          <DatePicker
            selectsRange
            startDate={startDate}
            endDate={endDate}
            onChange={(update) => {
              setDateRange(update);
            }}
            isClearable
            placeholderText="Select date range"
          />
        </DateRangeWrapper>
        <Convert
        disabled={!startDate || !endDate}
        onClick={handleClickButton}
        title={!startDate || !endDate ? 'Select date range first' : ''}>
        Export XLS
        </Convert>
            </TwoDiv>

      <Warning>
        <p className="siren">🚨</p>
        <TextWarning>
          <p className="warningT">Warning</p>
          <p>
            This section is responsible for making a request to the database to receive the inventory record and convert it to Excel format.
          </p>
        </TextWarning>
      </Warning>
    </Container>
  );
};

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
    font-size: 20px;
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
  align-items: center;
  gap: 15px;
  width: 100%;
  margin-top: 4%;
`

const Convert = styled.button`
  width: 30%;
  height: 70px;
  font-size: 25px;
  padding: 0 15px;
  background-color: #9348a1;
  color: #f1f1f1;
  border-radius: 15px;
  cursor: pointer;

  &:hover {
    background-color: rgb(209, 130, 223);
    transition: all 0.3s ease;
  }

  &:disabled {
    background-color: #694b77;
    cursor: not-allowed;
    opacity: 0.6;
  }
`

const DateRangeWrapper = styled.div`
  width: 70%;
  display: flex;
  align-items: center;
  position: relative;
  z-index: 100;

  .react-datepicker-wrapper {
    width: 100%;
  }

  .react-datepicker__input-container {
    width: 100%;
  }

  .react-datepicker__input-container input {
    height: 70px;
    width: 100%;
    padding: 0 15px;
    font-size: 25px;
    border-radius: 15px;
    border: none;
    background-color: rgb(35, 23, 58);
    color: rgb(209, 130, 223);
    box-sizing: border-box;
  }

  .react-datepicker {
    background-color: #2f204b; // Fondo del calendario
    border: none;
    border-radius: 10px;
    color: white;
  }

  .react-datepicker__header {
    background-color: #3a2b5e; // Encabezado del calendario (días y meses)
    border-bottom: none;
  }

  .react-datepicker__current-month,
  .react-datepicker__day-name {
    color: #d182df; // Color de mes actual y nombres de días
    font-weight: bold;
  }

  .react-datepicker__day {
    color: #f1f1f1; // Color normal de días
  }

  .react-datepicker__day--selected {
    background-color: #9348a1; // Día seleccionado
    color: white;
    border-radius: 50%;
  }

  .react-datepicker__day--in-range {
    background-color: #5c3f78; // Rango de fechas
    color: white;
    border-radius: 0;
  }

  .react-datepicker__day--keyboard-selected {
    background-color: #b96bd6;
    color: white;
  }

  .react-datepicker__navigation-icon::before {
    border-color: #d182df; // Flechas de navegación
  }

  .react-datepicker__close-icon {
    background-color: transparent;

    &::after {
      content: '×';
      background-color: #d182df;
      color: #f1f1f1; /* Cambia el color aquí */
      font-size: 25px;
      width: 25px;
    }
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
