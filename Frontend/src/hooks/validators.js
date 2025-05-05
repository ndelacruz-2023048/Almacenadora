//Crear todas las validaciones de campos

/* ---------------------------- Validación de userLogin ---------------------- */
export const validateUserLogin = (value) => {
    if(!value || value.trim() === '') return false

    const emailRegex = /\S+@\S+\.\S+/
    const isEmail = emailRegex.test(value)

    const usernameRegex = /^\S{3,8}$/
    const isUsername = usernameRegex.test(value)

    return isEmail || isUsername
}
/* ---------------------------- Validación de nombres ---------------------- */

export const validateName = (name) => {
    const regex = /^[\p{L}\s'-]+$/u
    return regex.test(name)
}

/* ---------------------------- Validación de appellidos ---------------------- */

export const validateSurName = (surname) => {
    const regex = /^[\p{L}\s'-]+$/u
    return regex.test(surname)
}

/* ---------------------------- Validación de dirección ---------------------- */

export const validateAddress = (address) => {
    const regex = /^[\p{L}\p{N}\s.,#\-/()°ªº]+$/u
    return regex.test(address)
}

/* ---------------------------- Validación de nombre de usuario ---------------------- */

export const validateUserName = (username) => {
    const regex = /^\S{4,10}$/
    return regex.test(username)
}

/* ---------------------------- Validación de correo ---------------------- */
export const validateEmail = (email) => {
    const regex = /\S+@\S+\.\S+/
    return regex.test(email)
}

/* ---------------------------- Validación de contraseña ---------------------- */
export const validatePassword = (password)=> {
    const regex = /^\S{10,15}$/ // Corregir despues a mas seguro
    return regex.test(password)
}

/* ---------------------------- Validación de confirmación de contraseña ---------------------- */
export const validatePasswordConfirm = (password, passConfirm)=> {
    return password === passConfirm
}

/* ---------------------------- Mensajes generales de validación  ---------------------- */
export const emailValidationMessage = 'Por favor ingresa un correo valido'
export const nameValidationMessage = 'Por favor ingresa un nombre valido'
export const surNameValidationMessage = 'Por favor ingresa un apellido valido'
export const addressValidationMessage = 'Por favor ingresa una dirección valido'
export const phoneValidationMessage = 'Por favor ingresa un No. de telefono valido valido'
export const usernameValidationMessage = 'El nombre de usuario debe contener entre 3 y 8 caracteres '
export const passwordValidationMessage = 'La contraseña debe tener entre 6 y 12 caracteres y no debe estar vacio'
export const passwordConfirmValidationMessage = 'Las contraseñas no coinciden '
export const userLoginMessage = 'El nombre de usuario o el email no son validos o pueden estar vacios'