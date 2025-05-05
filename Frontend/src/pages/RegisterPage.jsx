import styled from "styled-components"
import logo from '../assets/LogoARK.png'
import { RegisterTemplate } from "../components/templates/RegisterTemplate"

export const Register = ()=>{
    return(
        <Wrapper>
            <FormContainer>
                <LogoWrapper>
                    <Img src={logo}/>
                </LogoWrapper>
                <RegisterTemplate/>
            </FormContainer>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    background-color: #0F1824;
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
    padding: 0 20px;
`

const FormContainer = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const LogoWrapper = styled.div`
    position: absolute;
    top: -50px; // Ajusta para que el logo sobresalga del contenedor
    display: flex;
    justify-content: center;
    width: 100%;
`;

const Img = styled.img`
    width: 110px;
    height: 110px;
    background: rgba(170, 170, 170, 0.281);
    border-radius: 50%;
    object-fit: contain;
`