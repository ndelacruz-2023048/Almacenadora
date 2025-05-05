import { Schema, model } from "mongoose"

const userSchema = Schema(
    {
        name: {
            type: String
        },
        surname: {
            type: String
        },
        address: {
            type: String
        },
        mobilePhone: {
            type: String
        },
        country: {
            type: String
        },
        username: {
            type: String,
            unique: true
        },
        email: {
            type: String,
            unique: true
        },
        password: {
            type: String
        },
        profilePicture: {
            type: String
        },
        role: {
            type: String,
            uppercase: true,
            enum: ['ADMIN', 'CLIENT', 'EMPLOYEE'],
            default: 'CLIENT'
        }
    },
    {
        versionKey: false,
        timestamps: true
    }
)

userSchema.methods.toJSON = function(){
    const { __v, password, ...user } = this.toObject() //Sirve para convertir un documento de MongoDB a Objeto de JS
    return user
}

export default model('User', userSchema)