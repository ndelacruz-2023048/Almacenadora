import { useState } from 'react'
import { SectionDataRegister } from '../moleculas/SectionDataRegister'
import { validateName, validateSurName, validateAddress, validateUserName, validateEmail, validatePassword } from '../../hooks/validators'
import { useRegister } from '../../hooks/useRegister'
import { isValidPhoneNumber, parsePhoneNumberFromString } from 'libphonenumber-js';
import styled from 'styled-components'

export const RegisterForm = () => {
    const form = {
        name: {
            value: '',
            isValid: false,
            showError: false
        },
        surname: {
            value: '',
            isValid: false,
            showError: false
        },
        address: {
            value: '',
            isValid: false,
            showError: false
        },
        countryCode: 'gt',
        mobilePhone: {
            value: '',
            isValid: false,
            showError: false
        },
        email: {
            value: '',
            isValid: false,
            showError: false
        },
        username: {
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
    const [phoneError, setPhoneError] = useState('')
    
      //Variables/Constantes u Objetos/Arrays
    const { register } = useRegister()
    
    const isSubmitButtonDisabled = !formData.name.isValid ||
                                    !formData.surname.isValid ||
                                    !formData.address.isValid ||
                                    !formData.mobilePhone.isValid ||
                                    !formData.email.isValid ||
                                    !formData.username.isValid ||
                                    !formData.password.isValid    
    console.log(isSubmitButtonDisabled);
          
    
      //Funciones/Manejadores
    const handleSubmit = (e)=> {
        
        e.preventDefault();
        const isPhoneValid = validateMobilePhone(formData.mobilePhone.value, formData.countryCode) === true;
        
        const allFieldsValid = formData.name.isValid &&
                                formData.surname.isValid &&
                                formData.address.isValid &&
                                isPhoneValid &&
                                formData.email.isValid &&
                                formData.username.isValid &&
                                formData.password.isValid;

        if (allFieldsValid) {
            const formattedPhoneNumber = formData.mobilePhone.value.startsWith("+")
                ? formData.mobilePhone.value
                : `+${formData.mobilePhone.value}`;
                
                
            register(
                formData.name.value,
                formData.surname.value,
                formData.address.value,
                formattedPhoneNumber,
                formData.countryCode,
                formData.username.value,
                formData.email.value,
                formData.password.value
            )
            
        } else {
            console.log('El formulario tiene errores de validación');
        }
    }
      
    const handleValueChange = (value, field)=> {
        let formattedValue = value;
        if (field === 'mobilePhone') {
            if (value && !value.startsWith("+")) {
                formattedValue = `+${value}`;
            }
            console.log("Formatted Phone Value:", formattedValue); 
        }
        setFormData((prevData)=> (
        {
            ...prevData,
            [field]: {
                ...prevData[field],
                value: formattedValue
            }
        }
        ))
        if (field === "mobilePhone") {
            setPhoneError("");
        }
    }

    const handleCountryCodeChange = (country) => {
        setFormData((prevData) => ({
            ...prevData,
            countryCode: country.countryCode,
        }));
        setFormData((prevData) => ({ 
            ...prevData,
            mobilePhone: { ...prevData.mobilePhone, isValid: false, showError: false },
        }));
        setPhoneError('');
    }

    const validateMobilePhone = (phoneNumber, countryCode) => {
        if (!phoneNumber) {
            return 'El número de teléfono es requerido';
        }
        if (!countryCode) {
            return 'Por favor, selecciona un país';
        }
        const parsedNumber = parsePhoneNumberFromString(phoneNumber, countryCode.toUpperCase());
        if (!parsedNumber || !isValidPhoneNumber(phoneNumber, countryCode)) {
            return 'El número de teléfono no es válido para el país seleccionado';
        }
        return true;
    }

    const handleValidateOnBlur = (value, field)=> {
        let errorMessage = '';
        let isValid = false
        switch (field) {
            case 'name':
                isValid = validateName(value)
                break;
            case 'surname':
                isValid = validateSurName(value)
                break;
            case 'address':
                    isValid = validateAddress(value)
                    break;            
            case 'mobilePhone': {
                const phoneValidationResult = validateMobilePhone(value, formData.countryCode);
                isValid = phoneValidationResult === true;
                errorMessage = typeof phoneValidationResult === "string" ? phoneValidationResult : "";
                setPhoneError(errorMessage); // Actualizar el estado del error
                break;
            }
            case 'email':
                    isValid = validateEmail(value)
                    break;
            case 'username':
                    isValid = validateUserName(value)
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
        <RegisterFormWrapper onSubmit={handleSubmit}>
            <SectionDataRegister 
            formData={formData}
            handleValueChange={handleValueChange}
            handleValidateOnBlur={handleValidateOnBlur}
            isSubmitButtonDisabled={isSubmitButtonDisabled}
            handleCountryCodeChange={handleCountryCodeChange} // Pasar el nuevo handler
            phoneError={phoneError}
        />
        </RegisterFormWrapper>
    )
}

const RegisterFormWrapper = styled.form`
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