import { Icon } from "@iconify/react/dist/iconify.js";
import { Input } from "../atomos/Input"
import { userLoginMessage, passwordValidationMessage } from '../../hooks/validators'
import styled from "styled-components"

export const SectionDataLogin = ({formData, handleValueChange, handleValidateOnBlur, isSubmitButtonDisabled}) => {
    return (
        <DataWrapper>
            <DataBox>
                <Input
                    field={'userLogin'}
                    type={"text"}
                    value={formData.userLogin.value}
                    holder={"Usuario o Email"}
                    change={handleValueChange}
                    blur={handleValidateOnBlur}
                    showErrMsg={formData.userLogin.showError}
                    validateMsg={userLoginMessage}
                />
                <Icon icon="fa:user" className="IconLabel"/>
            </DataBox>
            <DataBox>
                <Input
                    field={'password'}
                    type={"password"}
                    value={formData.password.value}
                    holder={"Contraseña"}
                    change={handleValueChange}
                    blur={handleValidateOnBlur}
                    showErrMsg={formData.password.showError}
                    validateMsg={passwordValidationMessage}
                />
                <Icon icon="mdi:password" className="IconLabel"/>
            </DataBox>
            <DataFPassword>
                <A href="/*">Contraseña olvidada</A>
                <CheckContent>
                    <input type="checkbox" name="" id="" />
                    <TextCheck>Recordarme</TextCheck>
                </CheckContent>
            </DataFPassword>
            <DataBoxButton>
                <ButtonLogin disabled={isSubmitButtonDisabled} type="submit">Iniciar Seción</ButtonLogin>
            </DataBoxButton>
            <Register>
                <A href="/register">Nuevo? Registrate Acá</A>
            </Register>
            
        </DataWrapper>
    )
}

const DataWrapper = styled.div`
    width: 100%;
`

const DataBox = styled.div`
    position: relative;
    .IconLabel{
        position: absolute;
        top: 50%;
        right: 95px;
        transform: translateY(-50%);
        color: black;
        width: 15px;
        height: 17px;
    }
`

const DataBoxButton = styled.div`
    margin: 15px 0;
    position: relative;
`

const DataFPassword = styled.div`
    display: flex;
    justify-content: left;
    gap: 5px;
    margin: 8px 80px;
`

const CheckContent = styled.div`
    position: absolute;
    right: 112px;
    transform: translateY(-15%);
    display: flex;
    align-items: center;
`

const TextCheck = styled.span`
    font-size: 11px;
    color: #A6A6A6;
`

const ButtonLogin = styled.button`
    background-color: #B29464;
    border-radius: 80px;
    width: 353px;
    height: 50px;
    color: white;
    font-size: 25px;
    font-weight: 400;
    font-style: normal;
    font-family: "Great Vibes", cursive;
    cursor: pointer;
    transition: .5s ease;
    &:hover{
        background-color: #0F1824;
        transition: .5s ease;
    }
`

const Register = styled.div`
    display: flex;
    justify-content: center;
`

const A = styled.a`    
    color: #B29464;
    text-decoration: none;
    font-size: 11px;
    cursor: pointer;
    &:hover{
        text-decoration: underline;
    }
`