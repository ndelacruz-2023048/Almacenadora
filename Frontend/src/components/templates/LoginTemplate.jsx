import React from 'react'
import { LoginForm } from '../organismos/LoginForm'
import styled from 'styled-components'
// import { useState } from "react"


export const LoginTemplate = () => {

  return (
    <Wrapper>
        <LoginColumn>
            <Title>
                Iniciar Seción
            </Title>
            <LoginForm/>
        </LoginColumn>
    </Wrapper>
  )
}

const Wrapper = styled.section`
    display: flex;
    width: 526px;
    height: 585px;
    border: none;
    border-radius: 30px;
    background: rgba(190, 190, 190, 0.219);
    text-align: center;
`

const LoginColumn = styled.div`
    position: relative;
    width: 100%;
    margin: 30px 0;
`

const Title = styled.h1`
    font-weight: 400;
    font-style: normal;
    font-family: "Great Vibes", cursive;
    display: inline-block;
    cursor: pointer; /* Indica que es interactivo */
    font-size: 40px;
    color: #A6A6A6;
    margin: 40px 0;
`