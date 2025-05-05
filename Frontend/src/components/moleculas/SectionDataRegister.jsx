import React from 'react'
import styled from 'styled-components'
import { Input } from "../atomos/Input"
import { emailValidationMessage, usernameValidationMessage, passwordValidationMessage, nameValidationMessage, surNameValidationMessage, addressValidationMessage} from '../../hooks/validators'
import { Icon } from "@iconify/react/dist/iconify.js";
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';
import { useNavigate } from 'react-router';

export const SectionDataRegister = ({formData, handleValueChange, handleValidateOnBlur, isSubmitButtonDisabled, handleCountryCodeChange, phoneError}) => {
    
    const navigate = useNavigate();

    const changeLogin = ()=> {
        navigate('/login')
    }

    return (
        <DataWrapper>
            <DataBox>
                <InputSection>
                    <Input
                        field={'name'}
                        type={"text"}
                        holder={"Nombres"}
                        value={formData.name.value}
                        change={handleValueChange}
                        blur={handleValidateOnBlur}
                        showErrMsg={formData.name.showError}
                        validateMsg={nameValidationMessage}
                    />
                    <Icon icon="material-symbols:id-card" className="IconLabel1"/>
                </InputSection>
                <InputSection>
                    <Input
                        field={'surname'}
                        type={"text"}
                        holder={"Apellidos"}
                        value={formData.surname.value}
                        change={handleValueChange}
                        blur={handleValidateOnBlur}
                        showErrMsg={formData.surname.showError}
                        validateMsg={surNameValidationMessage}
                    />
                    <Icon icon="material-symbols:id-card" className="IconLabel"/>
                </InputSection>
            </DataBox>
            <DataBox>
                <InputSection>
                    <Input
                        field={'address'}
                        type={"text"}
                        holder={"Dirección"}
                        value={formData.address.value}
                        change={handleValueChange}
                        blur={handleValidateOnBlur}
                        showErrMsg={formData.address.showError}
                        validateMsg={addressValidationMessage}
                    />
                    <Icon icon="mingcute:location-3-fill" className='IconLabel1'/>
                </InputSection>
                <InputSection1>
                    <PhoneInputStyled
                        country={formData.countryCode}
                        value={formData.mobilePhone.value}
                        onChange={(value, country) => {
                            handleValueChange(value, 'mobilePhone');
                            handleCountryCodeChange(country);
                            
                        }}
                        onBlur={(e) => handleValidateOnBlur(e.target.value, 'mobilePhone')}
                        inputClass="phone-input"
                        containerClass="phone-container"
                        dropdownClass="phone-dropdown"
                        buttonClass='phone-dbutton'
                        enableSearch={true}
                    />
                    {phoneError && <p style={{ color: 'red', fontSize: '0.8em', marginTop: '5px' }}>{phoneError}</p>}
                    <Icon icon="line-md:phone-filled" className='IconLabel'/>
                </InputSection1>
            </DataBox>
            <DataBox>
                <InputSection>
                    <Input
                        field={'username'}
                        type={"text"}
                        holder={"Usuario"}
                        value={formData.username.value}
                        change={handleValueChange}
                        blur={handleValidateOnBlur}
                        showErrMsg={formData.username.showError}
                        validateMsg={usernameValidationMessage}
                    />
                    <Icon icon="fa:user" className="IconLabel1"/>
                </InputSection>
                <InputSection>
                    <Input
                        field={'email'}
                        type={"email"}
                        holder={"Correo Electrónico"}
                        value={formData.email.value}
                        change={handleValueChange}
                        blur={handleValidateOnBlur}
                        showErrMsg={formData.email.showError}
                        validateMsg={emailValidationMessage}
                    />
                    <Icon icon="entypo:email" className='IconLabel'/>
                </InputSection>
            </DataBox>
            <DataBox>
                <Input
                    field={'password'}
                    type={"password"}
                    holder={"Contraseña"}
                    value={formData.password.value}
                    change={handleValueChange}
                    blur={handleValidateOnBlur}
                    showErrMsg={formData.password.showError}
                    validateMsg={passwordValidationMessage}
                />
                <Icon icon="mdi:password" className="IconLabel2"/>
            </DataBox>
            <DataBoxButton>
                <ButtonRegister disabled={isSubmitButtonDisabled} onClick={changeLogin} type="submit">Registrarme</ButtonRegister>
            </DataBoxButton>
            <Login>
                <A href="/login">Ya tienes cuenta?</A>
            </Login>
        </DataWrapper>
    )
}

const DataWrapper = styled.div`
    width: 100%;
`

const DataBox = styled.div`
    display: flex;
    position: relative;
    gap: 15px;
    margin: 0 10px;
    justify-content: center;
    .IconLabel{
        position: absolute;
        top: 50%;
        right: 95px;
        transform: translateY(-50%);
        color: black;
        width: 15px;
        height: 17px;
    }
    .IconLabel1{
        position: absolute;
        top: 50%;
        left: 18em;
        transform: translateY(-50%);
        color: black;
        width: 15px;
        height: 17px;
    }
    .IconLabel2{
        position: absolute;
        top: 50%;
        left: 28em;
        transform: translateY(-50%);
        color: black;
        width: 15px;
        height: 17px;
    }
`

const PhoneInputStyled = styled(PhoneInput)`
    border-bottom: .5px solid black;
    .phone-container {
        width: 100%;
    }

    .phone-input {
        width: 100%;
        height: 40px;
        padding: 10px;
        padding-left: 50px; /* Espacio para el selector de país */
        border: none;
        border-radius: 5px;
        font-size: 16px;
        outline: none;
        transition: border-color 0.3s ease;
        background-color: transparent;
        color: #A6A6A6;

        &:focus {
            border-color: #b29464;
        }
    }

    .flag-dropdown {
        border: none;
        border-right: none;
        border-radius: 5px 0 0 5px;
    }

    .selected-flag {
        padding: 0 10px;
        background: rgba(190, 190, 190, 0.219);
        cursor: progress;
        &:hover{
            background: rgba(255, 255, 255, 0.219);
        }
    }

    .flag-dropdown.open .selected-flag {
        background-color: #B29464;
    }

    .phone-dropdown {
        background: rgba(0, 0, 0, 0.418);
        backdrop-filter: blur(3px);
        border-radius: 5px;
        box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2); /* Sombra para resaltar */
        max-height: 200px;
        overflow-y: auto;
        font-size: 14px;
        cursor: pointer;

        &::-webkit-scrollbar {
            width: 8px;
        }

        &::-webkit-scrollbar-track {
            background: rgba(0, 0, 0, 0.219);
            border-radius: 5px;
        }

        &::-webkit-scrollbar-thumb {
            background: #b29464;
            border-radius: 5px;
        }

        &::-webkit-scrollbar-thumb:hover {
            background: #8c6b43;
        }

        .country {
            padding: 5px 10px;
            display: flex;
            align-items: center;
            gap: 5px;

            &:hover {
                background: rgba(0, 0, 0, 0.288); /* Fondo al pasar el mouse */
            }

            .country-name {
                margin-right: 10px;
                color: #B29464; /* Espacio entre el nombre y el código */
            }

            .dial-code  {
                color: #cfa869;
            }
            
        }
        .country.highlight {
            background-color: rgba(0, 0, 0, 0.288); /* Fondo para el país seleccionado */
        }

    }

    .phone-dbutton {
        background: rgba(190, 190, 190, 0.219);
    }
`

const InputSection = styled.div`
    width: 23em;
`

const InputSection1 = styled.div`
    width: 23em;
    display: flex;
    align-items: center;
`

const DataBoxButton = styled.div`
    margin: 15px 0;
    position: relative;
`

const ButtonRegister = styled.button`
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
    &:disabled{
        cursor: not-allowed;
    }
    &:not(:disabled){
        cursor: pointer;
    }
`

const Login = styled.div`
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