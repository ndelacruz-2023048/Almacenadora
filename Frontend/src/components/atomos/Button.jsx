import React from 'react'
import styled from 'styled-components'

export const Button = ({text, active, onClick, icon}) => {
    return (
        <ButtonWrapper $active={active} onClick={onClick}>
            {icon}
            {text}
        </ButtonWrapper>
    )
}

const ButtonWrapper = styled.button`
    background-color: ${({ $active }) => ($active ? '#6b48ff' : 'transparent')};
    border-radius: 10%;
    border: 0.5px solid;
    color: ${({ $active }) => ($active ? '#fff' : 'black')};
    align-items: center;
    justify-content: center;
    display: flex;
    margin: 0 5px;
    height: 40px;
    &:hover {
        background-color: ${({ $active }) => ($active ? '#5a3de6' : '#f5f5f5')};
    }
`