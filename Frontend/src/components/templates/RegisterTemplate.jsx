import React from 'react'
import styled from 'styled-components'
import { RegisterForm } from '../organismos/RegisterForm'

export const RegisterTemplate = () => {
    return (
        <Wrapper>
            <RegisterColumn>
                <Title>
                    Registrarse
                </Title>
                <RegisterForm/>
            </RegisterColumn>
        </Wrapper>
    )
}


const Wrapper = styled.section`
    display: flex;
    width: 768px;
    height: 640px;
    border: none;
    border-radius: 30px;
    background: rgba(190, 190, 190, 0.219);
    text-align: center;
`

const RegisterColumn = styled.div`
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