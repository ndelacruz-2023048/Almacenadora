import { Schema, model } from "mongoose";

const providerSchema = Schema({
    name: {
        type: String,
        required: [true, 'Name Provider is required'],
        maxLength: [50, 'Name Provider is too long'],
    },
    departament:{
        type: String,
        required: [true, 'Departament is required'],
        maxLength: [50, 'Departament is too long'],
    },
    email:{
        type: String,
        required: [true, 'Email Provider is required'],
        unique: [true, 'Email Provider is already in use'],
        match: [/.+@.+\..+/, 'Email Provider is not valid'],
    },
    phone:{
        type: String,
        required: [true, 'Phone Provider is required'],
        unique: [true, 'Phone Provider is already in use'],
        match: [/^\d{10}$/, 'Phone Provider is not valid'],
    },
    data:{
        type: String,
        required: [true, 'Data Provider is required'],
        maxLength: [50, 'Data Provider is too long'],
    },
    address:{
        type: String,
        required: [true, 'Address Provider is required'],
        maxLength: [100, 'Address Provider is too long'],
    },
    description:{
        type: String,
        required: [true, 'Description Provider is required'],
        unique: [true, 'Description Provider is already in use'],
    },
    image:{
        type: String,
        required: [true, 'Image Provider is required'],
    }
})

export default model('PProvider', providerSchema);