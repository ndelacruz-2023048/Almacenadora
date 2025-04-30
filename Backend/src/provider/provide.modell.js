import { Schema, model } from "mongoose";

const providerSchema = Schema({
    name: {
        type: String,
        required: [true, 'Name Provider is required'],
    },
    departament:{
        type: String,
        required: [true, 'Departament is required'],
    },
    email:{
        type: String,
        required: [true, 'Email Provider is required'],
    },
    phone:{
        type: String,
        required: [true, 'Phone Provider is required'],
    },
    date:{
        type: Date,
        required: [true, 'Date Provider is required'],
    },
    address:{
        type: String,
        required: [true, 'Address Provider is required'],
    },
    description:{
        type: String,
        required: [true, 'Description Provider is required'],
    },
    image:{
        type: String,
        required: [true, 'Image Provider is required'],
    }
})

export default model('Provider', providerSchema);