import { Icon } from '@iconify/react/dist/iconify.js'
import React, { useState } from 'react'
import styled from 'styled-components'

export const ButtonAdd = ({setState,state,btnText,btnBorder,btnColor,btnBackgroundColor,iconName,iconSize,btnWidth}) => {
  const [stateButton,setStateButton] = useState(false)
  const handleClick = () => {
    setState()
    setStateButton(!stateButton)
  }
  return (
    <Add
        onClick={handleClick}
        btnBorder={btnBorder} 
        btnColor={btnColor} 
        btnBackgroundColor={btnBackgroundColor}
        iconSize={iconSize}
        btnWidth={btnWidth}
        className={stateButton?"active":""}
        >
        <Icon icon={iconName} className='iconStyle'/>
        {btnText && <p className='text'>{btnText}</p>}
    </Add>
  )
}
/*#5042cb */
const Add = styled.button`
  display: flex;
  background-color: white;
  border: none;  
  border-radius: 20px;
  cursor: pointer;
  justify-content: center;
  align-items: center;
  width: ${(prop)=> prop.btnWidth};
  padding: 10px 0;
  gap: 5px;
  border: 1px solid ${(prop)=> prop.btnBackgroundColor};
  .iconStyle{
    align-items: center;
    color: ${(prop)=> prop.btnBackgroundColor};
    font-size: ${(prop)=> prop.iconSize};
  }
  .text{
    font-size: 16px;
    color: ${(prop)=> prop.btnBackgroundColor};
  }
  &.active{
    background-color: ${(prop)=> prop.btnBackgroundColor};
    color: white;
    border: none;
    .iconStyle{
      align-items: center;
      color: #fff;
      font-size: ${(prop)=> prop.iconSize};
    }
    .text{
      color: #fff;

    }
  }
  `
