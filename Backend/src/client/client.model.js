import { Schema, model } from "mongoose";

const clientSchema = Schema({
    namePerson: {
        type: String,
        required: [true, 'Name is required'],
        maxLength: [50, 'Name is too long'],
        unique: [true, 'Name is already taken']
    },
    username:{
        type: String,
        required: [true, 'Username is required'],
        unique: [true, 'Username is already in use'],
    },
    emailPerson:{
        type: String,
        required: [true, 'Email is required'],
        unique: [true, 'Email is already in use']
    },
    passwordPerson:{
        type: String,
        required: [true,'Password is required'],
        minLength: [8, 'Password must be at least 8 characters long'],
    },
    phonePerson:{
        type: String,
        required: [true, 'Phone is required'],
        unique: [true, 'Phone is already in use']
    },
})

clientSchema.methods.toJSON = function(){
    const {__v, password, ...user} = this.toObject();
    return user;
}

export default model('Client', clientSchema);