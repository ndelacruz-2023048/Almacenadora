import User from "../src/User/user.model.js"
import { isValidObjectId } from "mongoose"
import { parsePhoneNumberFromString, isValidPhoneNumber } from "libphonenumber-js"

export const existEmail = async(email, user)=> {
    const alreadyEmail = await User.findOne({email})
    if(alreadyEmail && alreadyEmail._id != user.uid){
        console.error(`Email ${email} is already taken`)
        throw new Error(`Email ${email} is already taken`)
    }
}

export const existUserName = async(username, user)=> {
    const alreadyUserName = await User.findOne({username})
    if(alreadyUserName && alreadyUserName._id != user.uid){
        console.error(`Username ${username} is already taken`)
        throw new Error(`Username ${username} is already taken`)
    }
}


//Otras validaciones para la bd
export const objectIdValid = async(objectid)=>{
    if(!isValidObjectId(objectid)) throw new Error(`Is not valid ObjectId`)
}

export const comonPasswords = async(password)=> {
    const comonPasswords = ['Password1234', 'Test1234', 'Prueba1234', 'Hola1234', 'Client1234', 'Admin1234', '12345678', 'asdfghjk', 'testtest']
    if(comonPasswords.includes(password)){
        throw new Error('Password is too common')
    }
    return true
}

export const validatePhoneNumberForDB = (phoneNumber, countryCode) => {
    if (!phoneNumber) {
        console.error('El número de teléfono es requerido.');
        throw new Error('El número de teléfono es requerido.');
    }

    if (typeof phoneNumber !== 'string') {
        console.error('El número de teléfono debe ser una cadena.');
        throw new Error('El número de teléfono debe ser una cadena.');
    }

    if (!countryCode) {
        console.error('El código de país es requerido para la validación.');
        throw new Error('El código de país es requerido para la validación.');
    }

    const parsedNumber = parsePhoneNumberFromString(phoneNumber, countryCode.toUpperCase());

    if (!parsedNumber) {
        console.error('El número de teléfono no pudo ser parseado.');
        throw new Error('El número de teléfono no pudo ser parseado.');
    }

    if (!isValidPhoneNumber(parsedNumber.number)) {
        console.error(`El número de teléfono ${phoneNumber} no es válido para el país ${countryCode.toUpperCase()}.`);
        throw new Error(`El número de teléfono ${phoneNumber} no es válido para el país ${countryCode.toUpperCase()}.`);
    }
    const normalizedNumber = parsedNumber.format('E.164');
    return { isValid: true, normalizedNumber };
}