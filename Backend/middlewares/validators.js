import { body } from "express-validator"
import { validateErros } from './validate.errors.js'
import {
    existEmail,
    existUserName,
    comonPasswords,
    validatePhoneNumberForDB
} from '../utils/db.validators.js'

export const registerUser = [
    body('name', 'Name cannot be empty')
        .notEmpty()
        .isLength({ max: 30 }).withMessage(`Can't be more than 30 characters`),
    body('surname', 'Surname cannot be empty')
        .notEmpty()
        .isLength({ max: 30 }).withMessage(`Can't be more than 30 characters`),
    body('address', 'Address cannot be empty')
        .notEmpty(),
    body('mobilePhone', 'Invalid phone number')
        .notEmpty()
        .custom((mobilePhone, { req }) => {
            const countryCode = req.body.country; // Asegúrate de que el código de país se envíe en el body
            if (!countryCode) {
                throw new Error('Country code is required for phone number validation.');
            }
            const validationResult = validatePhoneNumberForDB(mobilePhone, countryCode);
            if (!validationResult.isValid) {
                throw new Error(validationResult.error);
            }
            // Si la validación es exitosa, puedes opcionalmente guardar el número normalizado en req.body
            req.body.mobilePhone = validationResult.normalizedNumber;
            return true; // Indica que la validación pasó
        }),
    body('country', 'Country code cannot be empty')
        .notEmpty()
        .isLength({ min: 2, max: 2 }).withMessage('Country code must be a 2-letter ISO code (e.g., US, GT)'),
    body('username', 'Username cannot be empty')
        .notEmpty()
        .isLength({ min: 4, max: 10 }).withMessage(`Username must be between 4 and 10 characters`)
        .custom(existUserName),
    body('email', 'Email cannot be empty')
        .notEmpty()
        .isEmail().withMessage('Enter a valid Email')
        .custom(existEmail),
    body('password', 'Password cannot be empty')
        .notEmpty()
        .isStrongPassword(
            {
                minLength: 8,
                minLowercase: 1,
                minNumbers: 1,
                minSymbols: 1,
                minUppercase: 1
            }
        )
        .isLength({ min: 12 }).withMessage(`The password must be at least 12 characters long`)
        .custom(comonPasswords),
    body('role')
        .optional()
        .isIn(['CLIENT']).withMessage(`Role must be 'CLIENT'`),
    validateErros,
]