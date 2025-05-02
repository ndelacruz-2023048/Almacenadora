//Crear todas las validaciones de campos

/* ---------------------------- Validación de correo ---------------------- */
export const validateUserLogin = (value) => {
    if(!value || value.trim() === '') return false

    const emailRegex = /\S+@\S+\.\S+/
    const isEmail = emailRegex.test(value)

    const usernameRegex = /^\S{3,8}$/
    const isUsername = usernameRegex.test(value)

    return isEmail || isUsername
}

/* ---------------------------- Validación de contraseña ---------------------- */
export const validatePassword = (password)=> {
    const regex = /^\S{6,20}$/ // Corregir despues a mas seguro
    return regex.test(password)
}

/* ---------------------------- Validación de confirmación de contraseña ---------------------- */
export const validatePasswordConfirm = (password, passConfirm)=> {
    return password === passConfirm
}

/* ---------------------------- Mensajes generales de validación  ---------------------- */
export const emailValidationMessage = 'Por favor ingresa un correo valido'
export const usernameValidationMessage = 'El nombre de usuario debe contener entre 3 y 8 caracteres '
export const passwordValidationMessage = 'La contraseña debe tener entre 6 y 12 caracteres y no debe estar vacio'
export const passwordConfirmValidationMessage = 'Las contraseñas no coinciden '
export const userLoginMessage = 'El nombre de usuario o el email no son validos o pueden estar vacios'