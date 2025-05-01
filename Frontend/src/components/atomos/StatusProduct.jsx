import React from 'react'
import styled from 'styled-components'

export const StatusProduct = ({stock,children}) => {
  return (
    <Container stock={stock}>
        {children?children:stock>25?"active":stock>10?"warning":"low"}
    </Container>
  )
}

const Container = styled.span`
    background-color: ${({ stock }) =>
        stock >25 ? "#d2e9e2" : stock >10? "#fde8aa" : "#faa8a8"};
    color: ${({stock})=>
    stock > 25 ? "#38856d":stock>10?"#b98c05":"#8c0505"};
    padding: 4px 15px;
    font-weight: 500;
    border-radius: 20px;
`
