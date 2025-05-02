import { useState } from 'react'
import { SectionDataLogin } from '../moleculas/SectionDataLogin'
import { validateUserLogin, validatePassword } from '../../hooks/validators'
import { useLogin } from '../../hooks/useLogin'
import styled from 'styled-components'

export const LoginForm = () => {
    const form = {
        userLogin: {
            value: '',
            isValid: false,
            showError: false
        },
        password: {
            value: '',
            isValid: false,
            showError: false
        }
    }

    //Hooks
    const [formData, setFormData] = useState(form)
    
    //Variables/Constantes u Objetos/Arrays
    const { login } = useLogin()

    const isSubmitButtonDisabled = !formData.userLogin.isValid || 
                                    !formData.password.isValid
        console.log(isSubmitButtonDisabled);
        

    //Funciones/Manejadores
    const handleSubmit = (e)=> {
        e.preventDefault()
        console.log(formData);//pruebas luego quitar
        login(
        formData.userLogin.value,
        formData.password.value
        )
    }
    
    const handleValueChange = (value, field)=> {
        setFormData((prevData)=> (
        {
            ...prevData,
            [field]: {
            ...prevData[field],
            value
            }
        }
        ))
    }
    
    const handleValidateOnBlur = (value, field)=> {
        let isValid = false
        switch (field) {
        case 'userLogin':
            isValid = validateUserLogin(value)
            break;
        case 'password':
            isValid = validatePassword(value)
            break;
        default:
            break;
        }

        setFormData((prevData)=> (
        {
            ...prevData,
            [field]: {
            ...prevData[field],
            isValid,
            showError: !isValid
            }
        }
        ))
    }
    
    //Logica Condicional
    
    //Renderizado JSX
    return (
        <LoginFormWrapper onSubmit={handleSubmit}>
            <SectionDataLogin
                formData={formData}
                handleValueChange={handleValueChange}
                handleValidateOnBlur={handleValidateOnBlur}
                isSubmitButtonDisabled={isSubmitButtonDisabled}
            />
        </LoginFormWrapper>
    )
    }

const LoginFormWrapper = styled.form`
    position: absolute;
    transform:  translateX(-50%);
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    padding: 0 30px;
    transition: .3s;
    left: 50%;
`