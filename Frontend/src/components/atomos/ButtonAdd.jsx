import { Icon } from '@iconify/react/dist/iconify.js'
import React from 'react'
import styled from 'styled-components'

export const ButtonAdd = ({setState,state,btnText,btnBorder,btnColor,btnBackgroundColor,iconName,iconSize,btnWidth}) => {
  const handleClick = () => {
    setState()
  }
  return (
    <Add
        onClick={handleClick}
        btnBorder={btnBorder} 
        btnColor={btnColor} 
        btnBackgroundColor={btnBackgroundColor}
        iconSize={iconSize}
        btnWidth={btnWidth}
        >
        <Icon icon={iconName} className='iconStyle'/>
        {btnText && <Text>{btnText}</Text>}
    </Add>
  )
}
/*#5042cb */
const Add = styled.button`
  display: flex;
  background-color: ${(prop)=> prop.btnBackgroundColor};
  color: white;
  border: none;  
  border-radius: 20px;
  cursor: pointer;
  justify-content: center;
  align-items: center;
  width: ${(prop)=> prop.btnWidth};
  padding: 10px 0;
  gap: 5px;
  .iconStyle{
        align-items: center;
        color: #fff;
        font-size: ${(prop)=> prop.iconSize};
    }
`

const Text = styled.p`
  font-size: 16px;
  color: #fff;
`