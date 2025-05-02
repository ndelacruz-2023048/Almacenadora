import styled from "styled-components"
import propTypes from 'prop-types'

export const Input  = ({
    field,
    holder, 
    type, 
    value, 
    change,
    showErrMsg,
    validateMsg,
    blur,
    textarea
}) => {

    const handleValueChange = (e)=> {
        change(e.target.value, field)
    }

    const handleOnBlur = (e)=> {
        blur(e.target.value, field)
    }

    return (
        <InputWrapper>
            {
                textarea ? (
                    <textarea
                        type={type}
                        value={value}
                        placeholder={holder}
                        onChange={handleValueChange}
                        onBlur={handleOnBlur}
                    />
                ) : (
                    <StyledInput 
                        type={type}
                        value={value}
                        placeholder={holder}
                        onChange={handleValueChange}
                        onBlur={handleOnBlur}
                    />
                )
            }

            <ErrorMsg>
                {showErrMsg && validateMsg}
            </ErrorMsg>
        </InputWrapper>
    )
}

const InputWrapper = styled.div`
    position: relative;
`

const StyledInput = styled.input`
    width: 363px;
    height: 55px;
    margin: 15px 0;
    border: none;
    color: #A6A6A6;
    text-decoration: none;
    font-size: 20px;
    font-family: "Raleway", sans-serif;
    font-optical-sizing: auto;
    font-weight: 600;
    font-style: normal;
    background-color: transparent;
    outline: none;
    border-bottom: .5px solid black; // Línea inferior como en la imagen
    padding-bottom: 5px; // Espacio entre el contenido y la línea
    &::placeholder {
        color: #A6A6A6;
        font-size: 15px;
    }
`

const ErrorMsg = styled.span`
    margin: 0 50px;
    display: flex;
    position: relative;
    justify-content: center;
    width: 400px;
    color: red;
`

Input.propTypes = {
    field: propTypes.string.isRequired,
    holder: propTypes.string.isRequired, 
    type: propTypes.string.isRequired, 
    value: propTypes.string.isRequired, 
    change: propTypes.func.isRequired,
    showErrMsg: propTypes.bool.isRequired,
    validateMsg: propTypes.string,
    blur: propTypes.func.isRequired,
    textarea: propTypes.bool.isRequired
}